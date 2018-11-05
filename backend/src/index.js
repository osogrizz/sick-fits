const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: 'variables.env' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// Use express middleware to handle cookies (JWT)
server.express.use(cookieParser())

// decode JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
    const { token } = req.cookies
    console.log(token);
    if(token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET)
        // put the user Id on the req for future request to aqccess
        req.userId = userId
    }
    next()
})

// 2. Create a middleware that populates the user on each request.
server.express.use(async (req, res, next) => {
    if (!req.userId) return next()
     const user =  await db.query.user(
         { where: {id: req.userId} },
         '{id, permissions, email, name}'
         )
         req.user = user
         next()
         
})

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`Server is now on port http://localhost:#${deets.port}`);
    }
)