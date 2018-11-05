function Person(name, foods) {
    this.name = name
    this.foods = foods
}

Person.prototype.fetchFavFoods = function() {
    return new Promise((resolve, reject) => {
        // Simulating an API
        setTimeout(() => resolve(this.foods), 2000)
    })
}

describe('mocking learning', () => {
    it('mocks a reg funstion', () => {
        const fetchDogs = jest.fn()
        fetchDogs('Snickers')
        expect(fetchDogs).toHaveBeenCalled()
        expect(fetchDogs).toHaveBeenCalledWith('Snickers')
        fetchDogs('Hugo')
        expect(fetchDogs).toHaveBeenCalledTimes(2)
    })

    it('can create a Person', () => {
        const me = new Person('Wes', ['Pizza', 'Cheesburgers'])
        expect(me.name).toBe('Wes')
    })

    it('can fetch foods', async () => {
        const me = new Person('Wes', ['Pizza', 'Cheesburgers'])
        // Mock the favFoods function
        // me.fetchFavFoods jest.fn().mockResolvedValue(['Sushi', 'Rahmen'])
        const favFoods = await me.fetchFavFoods()
        // console.log(favFoods)
        expect(favFoods).toContain('Pizza')
        
    })
})