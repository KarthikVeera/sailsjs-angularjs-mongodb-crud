/**
 * Products
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

/*
/create?name=Marek&brand=Hyperlite&year=2013
*/
module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    name: {
      type: 'STRING',
      required: true
    },
    brand: {
      type: 'STRING',
      required: true
    },
    year: {
      type: 'INTEGER',
      required: true
    },
    desc: {
      type: 'TEXT'
    },
    image: {
      type: 'TEXT'
    },
    delta: {
      type: 'TEXT'
    },
    other: {
      type: 'JSON'
    }
  }
};
