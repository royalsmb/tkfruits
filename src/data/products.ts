export interface Product {
  id: string;
  name: string;
  category: 'Fruit' | 'Vegetable';
  description: string;
  image: string;
  origin: string;
  season: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Gambian Mango',
    category: 'Fruit',
    description: 'Sweet, juicy, and sun-ripened mangoes directly from Gambian orchards.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=750&fit=crop',
    origin: 'West Coast Region',
    season: 'May - August'
  },
  {
    id: '2',
    name: 'Fresh Papaya',
    category: 'Fruit',
    description: 'Rich in vitamins and perfectly sweet. A tropical delight.',
    image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=600&h=750&fit=crop',
    origin: 'North Bank Region',
    season: 'Year-round'
  },
  {
    id: '3',
    name: 'Organic Cashew Fruit',
    category: 'Fruit',
    description: 'Unique flavor profile, high in Vitamin C. Locally sourced.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=750&fit=crop',
    origin: 'Lower River Region',
    season: 'March - June'
  },
  {
    id: '4',
    name: 'Local Tomatoes',
    category: 'Vegetable',
    description: 'Firm, red, and full of flavor. Perfect for Gambian stews.',
    image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=600&h=750&fit=crop',
    origin: 'Central River Region',
    season: 'Year-round'
  },
  {
    id: '5',
    name: 'Garden Eggs',
    category: 'Vegetable',
    description: 'Traditional African eggplant, essential for local cuisine.',
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=600&h=750&fit=crop',
    origin: 'Upper River Region',
    season: 'Year-round'
  },
  {
    id: '6',
    name: 'Sweet Potatoes',
    category: 'Vegetable',
    description: 'Nutritious and versatile root vegetable grown in fertile soil.',
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&h=750&fit=crop',
    origin: 'West Coast Region',
    season: 'Year-round'
  },
  {
    id: '7',
    name: 'Baobab Fruit',
    category: 'Fruit',
    description: 'The superfood of the savannah. Great for juices and powders.',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=750&fit=crop',
    origin: 'Various Regions',
    season: 'December - April'
  },
  {
    id: '8',
    name: 'Fresh Okra',
    category: 'Vegetable',
    description: 'Freshly harvested, tender okra pods. A Gambian kitchen staple.',
    image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=600&h=750&fit=crop',
    origin: 'North Bank Region',
    season: 'Year-round'
  },
  {
    id: '9',
    name: 'Watermelon',
    category: 'Fruit',
    description: 'Large, refreshing watermelons perfect for hot Gambian days.',
    image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&h=750&fit=crop',
    origin: 'Central River Region',
    season: 'March - July'
  },
  {
    id: '10',
    name: 'Fresh Peppers',
    category: 'Vegetable',
    description: 'Colorful bell and chili peppers to spice up any Gambian dish.',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=750&fit=crop',
    origin: 'Upper River Region',
    season: 'Year-round'
  },
  {
    id: '11',
    name: 'Banana',
    category: 'Fruit',
    description: 'Sweet, creamy Gambian bananas. Perfect for snacking or cooking.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=750&fit=crop',
    origin: 'West Coast Region',
    season: 'Year-round'
  },
  {
    id: '12',
    name: 'Pineapple',
    category: 'Fruit',
    description: 'Juicy, golden pineapples bursting with tropical sweetness.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&h=750&fit=crop',
    origin: 'West Coast Region',
    season: 'Year-round'
  }
];
