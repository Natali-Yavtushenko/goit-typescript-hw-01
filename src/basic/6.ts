// const mango = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const poly = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
// };

interface IPerson {
  name: string;
  age: number;
  email: string;
  address?: string;
}

const mango: IPerson = {
  name: "mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: IPerson = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
