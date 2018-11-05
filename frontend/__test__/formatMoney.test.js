import formatMoney from '../lib/formatMoney'

describe('fromatMoney Function', () => {
    it('works with fractional dollar amounts', () => {
        expect(formatMoney(1)).toEqual('$0.01')
        expect(formatMoney(10)).toEqual('$0.10')
        expect(formatMoney(9)).toEqual('$0.09')
        expect(formatMoney(40)).toEqual('$0.40')
    })

    it('leaves cents off for whole dollar amounts', () => {
        expect(formatMoney(5000)).toEqual('$50')
        expect(formatMoney(100)).toEqual('$1')
        expect(formatMoney(50000000)).toEqual('$500,000')
    })
    
    it('works with whole and fractional dollar amounts', () => {
        expect(formatMoney(5000)).toEqual('$50')
        expect(formatMoney(101)).toEqual('$1.01')
        expect(formatMoney(110)).toEqual('$1.10')
        expect(formatMoney(232423424230230)).toEqual('$2,324,234,242,302.30')
        
    })
})