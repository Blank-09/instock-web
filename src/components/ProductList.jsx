import { faker } from '@faker-js/faker'
const productList = Array(100)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    image: faker.image.url(),
    name: faker.commerce.product(),
    category: faker.commerce.productMaterial(),
    price: faker.commerce.price({ min: 0, max: 10000 }),
    stock: faker.number.int({ min: 0, max: 10000 }),
  }))

// console.log(productList)

const data = [
  {
    id: 1,
    name: 'Cap',
    category: 'Hats',
    price: 828,
    stock: 25,
  },
  {
    id: 2,
    name: '2 Color T-Shirt',
    category: 'Hats',
    price: 144,
    stock: 43,
  },
  {
    id: 3,
    name: 'Polo Tshirt',
    category: "Men's cloths",
    price: 28,
    stock: 123,
  },
  {
    id: 4,
    name: 'Couple Set',
    category: "Men's cloths",
    price: 85,
    stock: 33,
  },
  {
    id: 5,
    name: 'Collection',
    category: 'Collection',
    price: 113,
    stock: 11,
  },
  {
    id: 6,
    name: 'Balt Bag',
    category: 'Collection',
    price: 28,
    stock: 123,
  },
  {
    id: 20,
    name: 'Female T-Shirt',
    category: "Women's cloths",
    price: 25,
    stock: 10,
  },
  {
    id: 7,
    name: 'Female Polo T-Shirt',
    category: "Women's cloths",
    price: 92,
    stock: 323,
  },
  {
    id: 8,
    name: 'Half Pant',
    category: "Women's cloths",
    price: 35,
    stock: 52,
  },
  {
    id: 9,
    name: 'Bag',
    category: 'Accessories',
    price: 13,
    stock: 25,
  },

  {
    id: 10,
    name: 'Glasses',
    category: 'Glases',
    price: 828,
    stock: 30,
  },
  {
    id: 11,
    name: 'Nike Hat',
    category: 'Hats',
    price: 144,
    stock: 20,
  },
  {
    id: 12,
    name: 'Addidas Shoes',
    category: 'Shoes',
    price: 28,
    stock: 19,
  },
  {
    id: 13,
    name: 'Luis glasses',
    category: 'Glasses',
    price: 85,
    stock: 30,
  },
  {
    id: 14,
    name: 'kids T-Shirt',
    category: 'T-Shirts',
    price: 113,
    stock: 75,
  },
  {
    id: 15,
    name: 'Sandals',
    category: 'Shoes',
    price: 28,
    stock: 12,
  },
  {
    id: 16,
    name: 'Gucci Bag',
    category: 'Accessories',
    price: 25,
    stock: 13,
  },
  {
    id: 17,
    name: 'Sport Shoes',
    category: 'Shoes',
    price: 92,
    stock: 18,
  },
  {
    id: 18,
    name: 'Nasa T-Shirt',
    category: 'T-Shirts',
    price: 35,
    stock: 27,
  },
  {
    id: 19,
    name: 'American Pants',
    category: 'Pants',
    price: 13,
    stock: 43,
  },
]

export default productList
