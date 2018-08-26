import shortid from 'shortid';

export default [
  {
    id: 'D3FE',
    timestamp: new Date(),
    name: 'groceries',
    budget: 500,
    expenses: [
      {
        id: shortid.generate(),
        categoryId: 'D3FE',
        timestamp: new Date(),
        name: 'chicken',
        price: 8
      },
      {
        id: shortid.generate(),
        categoryId: 'D3FE',
        timestamp: new Date(),
        name: 'beer',
        price: 12
      }
    ]
  },
  {
    id: 'F874',
    timestamp: new Date(),
    name: 'coffee',
    budget: 500,
    expenses: [
      {
        id: shortid.generate(),
        categoryId: 'F874',
        timestamp: new Date(),
        name: 'white mocha',
        price: 5
      },
      {
        id: shortid.generate(),
        categoryId: 'F874',
        timestamp: new Date(),
        name: 'americano',
        price: 3
      }
    ]
  },
  {
    id: 'GR8T',
    timestamp: new Date(),
    name: 'bar',
    budget: 200,
    expenses: [
      {
        id: shortid.generate(),
        categoryId: 'GR8T',
        timestamp: new Date(),
        name: 'boneyard IPA',
        price: 5
      },
      {
        id: shortid.generate(),
        categoryId: 'GR8T',
        timestamp: new Date(),
        name: 'gin & tonic',
        price: 5
      }
    ]
  }
];