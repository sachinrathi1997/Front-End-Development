export interface Food {
  title: string;
  imgSrc: string;
  price: number;
  description: string;
}

export const foods: Food[] = [
  {
    title: "Greek salad",
    imgSrc: "/assets/greek-salad.webp",
    price: 12.99,
    description:
      "The famous greed salad of crispy lettuce, peppers, olives and our Vancouver style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Bruchetta",
    imgSrc: "/assets/bruschetta.webp",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    imgSrc: "/assets/lemon-dessert.webp",
    price: 4.99,
    description:
      "This comes straight from grandma's recipe book, last ingredient has benn sourced and is as authentic as can be imagined.",
  },
  {
    title: "Margherita Pizza",
    imgSrc: "/assets/margherita-pizza.webp",
    price: 10.99,
    description:
      "A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
  },
  {
    title: "Sushi Platter",
    imgSrc: "/assets/sushi-platter.webp",
    price: 15.99,
    description:
      "A selection of fresh sushi rolls including California rolls, tuna rolls, and salmon rolls, served with soy sauce, wasabi, and pickled ginger.",
  },
  {
    title: "Chicken Parmesan",
    imgSrc: "/assets/chicken-parmesan.webp",
    price: 14.99,
    description:
      "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese, served with spaghetti marinara.",
  },
  {
    title: "Vegetable Stir-Fry",
    imgSrc: "/assets/vegetable-stir-fry.webp",
    price: 9.99,
    description:
      "A colorful medley of stir-fried vegetables including bell peppers, broccoli, carrots, and snap peas, tossed in a savory soy sauce.",
  },
  {
    title: "Beef Burrito",
    imgSrc: "/assets/beef-burrito.webp",
    price: 8.99,
    description:
      "A flour tortilla filled with seasoned ground beef, rice, black beans, shredded lettuce, diced tomatoes, cheese, and sour cream.",
  },
  {
    title: "Chocolate Lava Cake",
    imgSrc: "/assets/chocolate-lava-cake.webp",
    price: 6.99,
    description:
      "A decadent chocolate cake with a gooey molten chocolate center, served warm with a scoop of vanilla ice cream.",
  },
];

export const specials = foods.slice(0, 3);
