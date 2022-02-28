import {checkTheUrl} from'../src/client/js/checkUrl'

describe("Testing Check URL",()=>{
    test("Testing Check The URL",()=>{
    expect(checkTheUrl).toBeDefined()

    })
    test("Testing Check The URL When Passing Valid URL",()=>{
        expect(checkTheUrl("https://www.wikipedia.org/")).toBeTruthy()

})

test("Testing Check The URL When Passing Valid URL",()=>{
    expect(checkTheUrl("https://twitter.com/?lang=en")).toBeTruthy()
})
test("Testing Check The URL When Passing inValid URL",()=>{
    expect(checkTheUrl("wikipedia")).toBeFalsy()

})

test("Testing Check The URL When Passing inValid URL",()=>{
    expect(checkTheUrl("twitter")).toBeFalsy()

})

})