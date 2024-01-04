export const categories = [
  {
    id: 1,
    title: "Restaurantes",
  },
  {
    id: 2,
    title: "Promocoes",
  },
  {
    id: 3,
    title: "refeicoes",
  },
  {
    id: 4,
    title: "Extra",
  },
];

export const restaurants = [
  {
    id: 1,
    name: "Restaurant 1",
    description: "A cozy Italian restaurant serving authentic pasta dishes.",
    image: require('../assets/images/coffee1.png'),
    categoryId: 1,
    stars: '4.6',
    menu: [
      { id: 1, name: "Spaghetti Bolognese", type: "food", price: 12.99 },
      { id: 2, name: "Margherita Pizza", type: "food", price: 9.99 },
      { id: 3, name: "Chicken Alfredo", type: "food", price: 14.99 },
      { id: 4, name: "Caprese Salad", type: "food", price: 8.99 },
      { id: 5, name: "Tiramisu", type: "food", price: 6.99 },
      { id: 6, name: "Minestrone Soup", type: "appetizer", price: 4.99 },
      { id: 7, name: "Garlic Bread", type: "appetizer", price: 3.99 },
      { id: 8, name: "Cannoli", type: "dessert", price: 5.99 },
      { id: 9, name: "Cappuccino", type: "drink", price: 3.49 },
      { id: 10, name: "Limoncello", type: "drink", price: 4.49 }
    ]
  },
  {
    id: 2,
    name: "Restaurant 2",
    description: "A trendy fusion restaurant with a mix of Asian and European flavors.",
    image: require('../assets/images/coffee1.png'),
    categoryId: 1,
    stars: '4.0',
    menu: [
      { id: 11, name: "Sushi Rolls", type: "food", price: 10.99 },
      { id: 12, name: "Pad Thai", type: "food", price: 11.99 },
      { id: 13, name: "Beef Teriyaki", type: "food", price: 13.99 },
      { id: 14, name: "Spring Rolls", type: "appetizer", price: 5.99 },
      { id: 15, name: "Mango Sticky Rice", type: "dessert", price: 7.99 },
      { id: 16, name: "Green Tea Ice Cream", type: "dessert", price: 4.99 },
      { id: 17, name: "Bubble Tea", type: "drink", price: 4.49 },
      { id: 18, name: "Mojito", type: "drink", price: 6.49 },
      { id: 19, name: "Thai Iced Tea", type: "drink", price: 3.99 },
      { id: 20, name: "Sake", type: "drink", price: 8.99 }
    ]
  },
    {
    id: 3,
    name: "Restaurant 3",
    description: "A family-friendly diner with classic comfort food.",
    image: "https://example.com/restaurant3.jpg",
    categoryId: 1,
    stars: '4.8', 
    menu: [
      { id: 21, name: "Cheeseburger", type: "food", price: 3.99 },
      { id: 22, name: "Chicken Tenders", type: "food", price: 3.99 },
      { id: 23, name: "Grilled Cheese Sandwich", type: "food", price: 3.99 },
      { id: 24, name: "French Fries", type: "appetizer", price: 3.99 },
      { id: 25, name: "Milkshake", type: "drink", price: 3.99 },
      { id: 26, name: "Apple Pie", type: "dessert", price: 3.99 },
      { id: 27, name: "Root Beer Float", type: "drink", price: 3.99 },
      { id: 28, name: "Onion Rings", type: "appetizer", price: 3.99 },
      { id: 29, name: "Hot Dog", type: "food", price: 3.99 },
      { id: 30, name: "Chocolate Brownie", type: "dessert", price: 3.99 }
    ]
  },
  {
    id: 4,
    name: "Restaurant 4",
    description: "A vibrant Mexican restaurant with a wide selection of tacos and margaritas.",
    image: "https://example.com/restaurant4.jpg",
    categoryId: 1,
    stars: '3.6', 
    menu: [
      { id: 31, name: "Tacos al Pastor", type: "food", price: 4.99 },
      { id: 32, name: "Chicken Enchiladas", type: "food", price: 4.99 },
      { id: 33, name: "Beef Burrito", type: "food", price: 4.99 },
      { id: 34, name: "Guacamole", type: "appetizer" , price: 4.99},
      { id: 35, name: "Churros", type: "dessert", price: 4.99 },
      { id: 36, name: "Margarita", type: "drink" , price: 4.99},
      { id: 37, name: "Quesadillas", type: "food" , price: 4.99},
      { id: 38, name: "Mexican Rice", type: "food" , price: 4.99},
      { id: 39, name: "Salsa and Chips", type: "appetizer", price: 4.99 },
      { id: 40, name: "Agua Fresca", type: "drink" , price: 4.99}
    ]
  },
  {
    id: 5,
    name: "Restaurant 5",
    description: "A sushi bar specializing in fresh seafood and creative sushi rolls.",
    image: "https://example.com/restaurant5.jpg",
    categoryId: 1,
    stars: '2.6', 
    menu: [
      { id: 41, name: "Nigiri Sushi", type: "food", price: 10.99  },
      { id: 42, name: "Dragon Roll", type: "food" , price: 10.99 },
      { id: 43, name: "Rainbow Roll", type: "food" , price: 10.99 },
      { id: 44, name: "Edamame", type: "appetizer" , price: 10.99 },
      { id: 45, name: "Miso Soup", type: "appetizer" , price: 10.99 },
      { id: 46, name: "Tempura", type: "appetizer" , price: 10.99 },
      { id: 47, name: "Green Salad", type: "food" , price: 10.99 },
      { id: 48, name: "Sashimi Platter", type: "food" , price: 10.99 },
      { id: 49, name: "Matcha Ice Cream", type: "dessert" , price: 10.99 },
      { id: 50, name: "Sake Bomb", type: "drink" , price: 10.99 }
    ]
  },
  {
    id: 6,
    name: "Restaurant 6",
    description: "A steakhouse known for its prime cuts and hearty side dishes.",
    image: "https://example.com/restaurant6.jpg",
    categoryId: 1,
    stars: '4.9', 
    menu: [
      { id: 51, name: "Filet Mignon", type: "food", price: 5.99 },
      { id: 52, name: "Ribeye Steak", type: "food", price: 5.99 },
      { id: 53, name: "Baked Potato", type: "food", price: 5.99 },
      { id: 54, name: "Caesar Salad", type: "appetizer", price: 5.99 },
      { id: 55, name: "Creamed Spinach", type: "food" , price: 5.99},
      { id: 56, name: "Lobster Tail", type: "food" , price: 5.99},
      { id: 57, name: "Garlic Shrimp", type: "food" , price: 5.99},
      { id: 58, name: "Red Wine", type: "drink" , price: 5.99},
      { id: 59, name: "Cheesecake", type: "dessert", price: 5.99 },
      { id: 60, name: "Old Fashioned", type: "drink" , price: 5.99}
    ]
  },
  {
    id: 7,
    name: "Restaurant 7",
    description: "A vegetarian restaurant offering healthy and flavorful plant-based dishes.",
    image: "https://example.com/restaurant7.jpg",
    categoryId: 1,
    stars: '3.2', 
    menu: [
      { id: 61, name: "Veggie Burger", type: "food", price: 7.99, categoryId: '2' },
      { id: 62, name: "Portobello Mushroom Steak", type: "food" , price: 7.99},
      { id: 63, name: "Quinoa Salad", type: "appetizer" , price: 7.99},
      { id: 64, name: "Hummus and Pita Bread", type: "appetizer", price: 7.99 },
      { id: 65, name: "Tofu Stir-Fry", type: "food" , price: 7.99},
      { id: 66, name: "Falafel Wrap", type: "food" , price: 7.99},
      { id: 67, name: "Coconut Curry", type: "food" , price: 7.99},
      { id: 68, name: "Avocado Toast", type: "food" , price: 7.99},
      { id: 69, name: "Acai Bowl", type: "dessert" , price: 7.99},
      { id: 70, name: "Green Smoothie", type: "drink" , price: 7.99}
    ]
  },
  {
    id: 8,
    name: "Restaurant 8",
    description: "A seafood restaurant with a focus on fresh catches and coastal flavors.",
    image: "https://example.com/restaurant8.jpg",
    categoryId: 1, 
    stars: '4.6',
    menu: [
      { id: 71, name: "Grilled Salmon", type: "food" , price: 8.99 },
      { id: 72, name: "Fish and Chips", type: "food" , price: 8.99 },
      { id: 73, name: "Clam Chowder", type: "appetizer" , price: 8.99 },
      { id: 74, name: "Crab Cakes", type: "appetizer" , price: 8.99 },
      { id: 75, name: "Lobster Bisque", type: "appetizer" , price: 8.99 },
      { id: 76, name: "Shrimp Scampi", type: "food", price: 8.99  },
      { id: 77, name: "Oysters on the Half Shell", type: "appetizer" , price: 8.99 },
      { id: 78, name: "Lemon Bars", type: "dessert", price: 8.99  },
      { id: 79, name: "Mojito", type: "drink" , price: 8.99 },
      { id: 80, name: "Sea Breeze", type: "drink" , price: 8.99 }
    ]
  },
  {
    id: 9,
    name: "Restaurant 9",
    description: "An upscale French bistro with a sophisticated menu and extensive wine list.",
    image: "https://example.com/restaurant9.jpg",
    categoryId: 1, 
    stars: '5.0',
    menu: [
      { id: 81, name: "Escargots", type: "appetizer" , price: 11.99},
      { id: 82, name: "Coq au Vin", type: "food" , price: 11.99},
      { id: 83, name: "Croque Monsieur", type: "food" , price: 11.99},
      { id: 84, name: "Foie Gras", type: "appetizer" , price: 11.99},
      { id: 85, name: "Beef Bourguignon", type: "food" , price: 11.99},
      { id: 86, name: "Ratatouille", type: "food" , price: 11.99},
      { id: 87, name: "Crème Brûlée", type: "dessert" , price: 11.99},
      { id: 88, name: "French Onion Soup", type: "appetizer" , price: 11.99},
      { id: 89, name: "Kir Royale", type: "drink" , price: 11.99},
      { id: 90, name: "Champagne", type: "drink" , price: 11.99}
    ]
  },
  {
    id: 10,
    name: "Restaurant 10",
    description: "A modern fusion restaurant with a blend of Mediterranean and Middle Eastern flavors.",
    image: "https://example.com/restaurant10.jpg",
    categoryId: 1,
    stars: '4.6', 
    menu: [
      { id: 91, name: "Hummus Platter", type: "appetizer" , price: 6.99},
      { id: 92, name: "Chicken Shawarma", type: "food" , price: 6.99},
      { id: 93, name: "Falafel Salad", type: "food" , price: 6.99},
      { id: 94, name: "Tabbouleh", type: "appetizer" , price: 6.99},
      { id: 95, name: "Baklava", type: "dessert" , price: 6.99},
      { id: 96, name: "Lamb Kebabs", type: "food" , price: 6.99},
      { id: 97, name: "Baba Ganoush", type: "appetizer" , price: 6.99},
      { id: 98, name: "Greek Salad", type: "food" , price: 6.99},
      { id: 99, name: "Turkish Tea", type: "drink" , price: 6.99},
      { id: 100, name: "Mint Lemonade", type: "drink" , price: 6.99}
    ]
  }
];

// Add random promotions to at least one item in each restaurant
export const promotionItems = [
{
   id: 91,
  name: "Hummus Platter", 
  type: "appetizer" , 
  price: 6.99,
  categoryId: 2,
  stars: '4.6', 
  description:'delicious food, try it out'

},
{
 id: 60, 
 name: "Old Fashioned", 
 type: "drink" , 
 price: 5.99,
 categoryId: 2,
 stars: '4.6', 
 description:'delicious food, try it out'


},
{
  id: 100, 
  name: "Mint Lemonade", 
  type: "drink" , 
  price: 6.99,
  categoryId: 2,
  stars: '4.6', 
  description:'delicious food, try it out'
}
];



