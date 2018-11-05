import ItemComponent from '../components/Item'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeItem = {
    id: 'ABC123',
    title: 'A cool item',
    price: 4000,
    description: 'this item is really cool',
    image: 'dog.jpg',
    largeImage: 'largeDog.jpg'
}

describe('<Item />', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />)
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
    // it('renders PriceTag and title properly', () => {
    //     const wrapper =  shallow(<ItemComponent item={fakeItem} /> )
    //     const PriceTag = wrapper.find('PriceTag')
    //     // console.log(PriceTag.children());
    //     expect(PriceTag.children().text()).toBe('$50') 
    //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title)
    // })
    
    // it('renders the img properly', () => {
    //     const wrapper =  shallow(<ItemComponent item={fakeItem} /> )
    //     const img = wrapper.find('img')
    //     expect(img.props().src).toBe(fakeItem.image)
    //     expect(img.props().alt).toBe(fakeItem.title)
    // })

    // it('renders out the buttons properly', () => {
    //     const wrapper =  shallow(<ItemComponent item={fakeItem} /> )
    //     // console.log(wrapper.debug());
    //     const buttonList = wrapper.find('.buttonList')
    //     console.log(buttonList.debug())
    //     expect(buttonList.children()).toHaveLength(3)
    //     expect(buttonList.find('Link')).toHaveLength(1)  
    // })
})