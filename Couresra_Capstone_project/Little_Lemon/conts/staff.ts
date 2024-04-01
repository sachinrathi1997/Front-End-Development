export interface Staff {
  name: string;
  imgSrc: string;
  position: string;
}

export const staff: Staff[] = [
  {
    name: "Samantha Lee",
    imgSrc: "/assets/samantha.webp",
    position: "Head Chef",
  },
  {
    name: "Michael Nguyen",
    imgSrc: "/assets/michael.webp",
    position: "Sous Chef",
  },
  {
    name: "Emily Chen",
    imgSrc: "/assets/emily.webp",
    position: "Restaurant Manager",
  },
  {
    name: "Daniel Garcia",
    imgSrc: "/assets/daniel.webp",
    position: "Head Bartender",
  },
  {
    name: "Olivia Patel",
    imgSrc: "/assets/olivia.webp",
    position: "Pastry Chef",
  },
  {
    name: "Lucas Thompson",
    imgSrc: "/assets/lucas.webp",
    position: "Waiter",
  },
];
