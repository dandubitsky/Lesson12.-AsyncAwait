const { expect } = require('chai');
const superagent = require('superagent');

describe("make a call", ()=>{
    it("should make a call", async ()=>{ // Async means that we dont know when we will get an answer. Asyncronic call to: Data base, API etc...
        //If we are making an API call, we use async pattern. RULE!
        const url = "https://mern-ecommerce.sdet.school/api/product/item/air-jordan-1-travis-scott-reverse-mocha"
        const res = await superagent.get(url); // 
        console.log(res.body); // '.body' prints the response body to the terminal
        
    expect(res.body).to.eql({
        product: {
          taxable: true,
          isActive: true,
          brand: {
            isActive: true,
            _id: '63a39fac873c300037f226bd',
            name: 'Elite shoes',
            slug: 'elite-shoes'
          },
          _id: '63ea6339feac5600364e5265',
          sku: 'sdjghsdg',
          name: 'Air Jordan 1 travis scott Reverse Mocha',
          description: "Travis Scott and MJ's collab",
          quantity: 0,
          price: 1,
          imageUrl: 'https://mern-ecommerce-sdet-school.s3.amazonaws.com/travisSc.htm',
          imageKey: 'travisSc.htm',
          created: '2023-02-13T16:20:09.888Z',
          slug: 'air-jordan-1-travis-scott-reverse-mocha',
          __v: 0
        }
      })  
    })
})

// describe('Get product by slug name', ()=>{
//     it('should')
// })
