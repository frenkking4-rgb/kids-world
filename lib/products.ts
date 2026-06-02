export type Category = "toys" | "educational" | "outdoor" | "arts";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  ageMin: number;
  ageMax: number;
  emoji: string;
  badge?: "new" | "sale";
  discount?: number;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Rainbow Stacking Rings",
    price: 24.99,
    category: "educational",
    ageMin: 1,
    ageMax: 4,
    emoji: "🌈",
    badge: "new",
    color: "from-pink-200 to-purple-200",
  },
  {
    id: 2,
    name: "Wooden Train Set",
    price: 49.99,
    category: "toys",
    ageMin: 2,
    ageMax: 7,
    emoji: "🚂",
    color: "from-orange-200 to-yellow-200",
  },
  {
    id: 3,
    name: "Watercolor Paint Kit",
    price: 18.99,
    category: "arts",
    ageMin: 4,
    ageMax: 12,
    emoji: "🎨",
    badge: "sale",
    discount: 20,
    color: "from-blue-200 to-cyan-200",
  },
  {
    id: 4,
    name: "Balance Bike",
    price: 89.99,
    category: "outdoor",
    ageMin: 2,
    ageMax: 5,
    emoji: "🚲",
    color: "from-green-200 to-teal-200",
  },
  {
    id: 5,
    name: "Alphabet Puzzle",
    price: 21.99,
    category: "educational",
    ageMin: 3,
    ageMax: 6,
    emoji: "🔤",
    badge: "new",
    color: "from-yellow-200 to-amber-200",
  },
  {
    id: 6,
    name: "Magnetic Building Blocks",
    price: 59.99,
    category: "educational",
    ageMin: 5,
    ageMax: 12,
    emoji: "🧲",
    color: "from-violet-200 to-pink-200",
  },
  {
    id: 7,
    name: "Play Kitchen Set",
    price: 74.99,
    category: "toys",
    ageMin: 3,
    ageMax: 8,
    emoji: "🍳",
    badge: "sale",
    discount: 15,
    color: "from-red-200 to-orange-200",
  },
  {
    id: 8,
    name: "Outdoor Bubble Kit",
    price: 12.99,
    category: "outdoor",
    ageMin: 2,
    ageMax: 10,
    emoji: "🫧",
    color: "from-sky-200 to-blue-200",
  },
  {
    id: 9,
    name: "Clay Sculpting Set",
    price: 16.99,
    category: "arts",
    ageMin: 4,
    ageMax: 14,
    emoji: "🏺",
    color: "from-lime-200 to-green-200",
  },
  {
    id: 10,
    name: "Soft Plush Bear",
    price: 29.99,
    category: "toys",
    ageMin: 0,
    ageMax: 5,
    emoji: "🧸",
    badge: "new",
    color: "from-amber-200 to-yellow-200",
  },
  {
    id: 11,
    name: "Jump Rope",
    price: 9.99,
    category: "outdoor",
    ageMin: 5,
    ageMax: 14,
    emoji: "🪢",
    color: "from-fuchsia-200 to-purple-200",
  },
  {
    id: 12,
    name: "Math Flash Cards",
    price: 14.99,
    category: "educational",
    ageMin: 5,
    ageMax: 10,
    emoji: "🔢",
    badge: "sale",
    discount: 10,
    color: "from-teal-200 to-cyan-200",
  },
];
