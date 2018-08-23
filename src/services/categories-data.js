import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    timestamp: new Date(),
    name: 'rent',
    budget: 1000
  },
  {
    id: shortid.generate(),
    timestamp: new Date(),
    name: 'groceries',
    budget: 500
  },
  {
    id: shortid.generate(),
    timestamp: new Date(),
    name: 'bar',
    budget: 200
  }
];