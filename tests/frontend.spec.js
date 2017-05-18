describe('Front End Tests Yo', function () {

  beforeEach(function(){
    browser.get('http://localhost:3000')
  })

 describe('Initial Test', function () {
   it('should pass', function () {
     expect(true).toBe(true)
    })
  })

  describe('Page Test', function () {
   it('should grab and element on the page and identify it?', function () {
     expect(element.all(by.tagName('h1')).get(0).getText()).toBe('Booyah')
   })
  })

  describe('send them keys', function () {
   it('should type some shit in the input boxes', function () {

     const input1 = element.all(by.model('test1'))
     const firstResult = element.all(by.tagName('p')).get(0)

     input1.sendKeys('booyah')
     expect(firstResult.getText()).toBe('booyah')


   })
  })



})
