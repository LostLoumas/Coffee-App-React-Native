export const categories = [
  {
    id: 1,
    title: "Cappuccino",
  },
  {
    id: 2,
    title: "Latte",
  },
  {
    id: 3,
    title: "Espresso",
  },
  {
    id: 4,
    title: "Mocha",
  },
  {
    id: 5,
    title: "Americano",
  },
]

export const coffeeItems = [
  {
    id: 1,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('../assets/images/coffee1.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
    categoryId: 5, // Assigned to "Americano" category
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: '15.50',
    volume: '110 ml',
    stars: '4.3',
    image: require('../assets/images/coffee2.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
    categoryId: 1, // Assigned to "Cappuccino" category
  },
  {
    id: 3,
    name: 'Espresso',
    price: '30.00',
    volume: '100 ml',
    stars: '4.0',
    image: require('../assets/images/coffee3.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
    categoryId: 3, // Assigned to "Espresso" category
  },
  {
    id: 4,
    name: 'Latte',
    price: '10.30',
    volume: '80 ml',
    stars: '3.5',
    image: require('../assets/images/coffee4.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
    categoryId: 2, // Assigned to "Latte" category
  },
  {
    id: 5,
    name: 'Mocha',
    price: '23.10',
    volume: '120 ml',
    stars: '4.7',
    image: require('../assets/images/coffee5.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
    categoryId: 4, // Assigned to "Mocha" category
  },
  // Additional coffee items
  {
    id: 6,
    name: 'Iced Coffee',
    price: '18.00',
    volume: '200 ml',
    stars: '4.2',
    //image: require('../assets/images/coffee6.png'),
    desc: 'Refreshing cold coffee made with ice, coffee concentrate, and milk.',
    categoryId: 5, // Assigned to "Americano" category
  },
  {
    id: 7,
    name: 'Hazelnut Latte',
    price: '12.50',
    volume: '120 ml',
    stars: '4.8',
    //image: require('../assets/images/coffee7.png'),
    desc: 'Latte flavored with rich and nutty hazelnut syrup.',
    categoryId: 2, // Assigned to "Latte" category
  },
  {
    id: 8,
    name: 'Double Shot Espresso',
    price: '35.00',
    volume: '60 ml',
    stars: '4.4',
    //image: require('../assets/images/coffee8.png'),
    desc: 'A powerful and concentrated espresso shot for a strong coffee experience.',
    categoryId: 3, // Assigned to "Espresso" category
  },
  {
    id: 9,
    name: 'White Chocolate Mocha',
    price: '28.50',
    volume: '150 ml',
    stars: '4.5',
    //image: require('../assets/images/coffee9.png'),
    desc: 'Mocha made with smooth white chocolate and espresso.',
    categoryId: 4, // Assigned to "Mocha" category
  },
  {
    id: 10,
    name: 'Caramel Macchiato',
    price: '14.80',
    volume: '130 ml',
    stars: '4.1',
    //image: require('../assets/images/coffee10.png'),
    desc: 'Espresso topped with foamed milk and drizzled with sweet caramel syrup.',
    categoryId: 1, // Assigned to "Cappuccino" category
  },
]
