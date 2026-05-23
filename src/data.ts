import { Dish, Testimonial, GalleryItem } from './types';

export const DISHES: Dish[] = [
  {
    id: 'wagyu-a5',
    name: "A5 Miyazaki Wagyu Beef",
    description: "Sashimi-grade seared Japanese Wagyu with caramelized wild mushrooms, aged micro-herbs, and a rich black garlic and cabernet sauvignon reduction.",
    price: "$145",
    category: 'main',
    image: '/src/assets/images/wagyu_plating_card_1779372221254.png',
    tags: ['Signature', 'Michelin Standard', 'A5 Grade'],
    sommelierPairing: "Château Latour Pauillac 2015",
    ingredients: ['Miyazaki Wagyu', 'Black Winter Truffle', 'Black Garlic', 'Chanterelle Mushrooms', '24k Gold Leaf']
  },
  {
    id: 'saffron-lobster',
    name: "Saffron Butter Lobster Tail",
    description: "Butter-poached Nova Scotia lobster tail served over a velvet saffron and sea fennel emulsion, finished with fresh sea grapes and toasted brioche dust.",
    price: "$88",
    category: 'main',
    image: '/src/assets/images/lobster_saffron_card_1779372240732.png',
    tags: ['Guest Favorite', 'Atlantic Catch'],
    sommelierPairing: "Domaine Leflaive Puligny-Montrachet 2019",
    ingredients: ['Atlantic Lobster', 'Saffron Caviar Pearls', 'Sea Fennel', 'Cultured Butter', 'Edible Pansies']
  },
  {
    id: 'oysters-caviar',
    name: "Kumamoto Oysters & Caviar",
    description: "Chilled hand-selected Kumamoto oysters topped with Royal Oscietra Caviar, frozen champagne mignonette, and fresh finger lime pearls.",
    price: "$52",
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1534080391025-447c05485d5b?auto=format&fit=crop&q=80&w=800',
    tags: ['Sea to Table', 'Luxurious'],
    sommelierPairing: "Krug Clos d'Ambonnay Champagne 2002",
    ingredients: ['Kumamoto Oysters', 'Oscietra Caviar', 'Vintage Champagne Mignonette', 'Finger Limes']
  },
  {
    id: 'foie-gras',
    name: "Pan-Seared Foie Gras",
    description: "Rich duck foie gras pan-seared and paired with caramelized mission figs, aged balsamic caviar, pain d'épices crumble, and a glass of sauternes reduction.",
    price: "$48",
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ['Rich', 'Artisanal'],
    sommelierPairing: "Château d'Yquem Sauternes 2011",
    ingredients: ['Foie Gras', 'Mission Figs', 'Aged Balsamic', 'Pain d\'Épices', 'Aquitaine Sea Salt']
  },
  {
    id: 'dark-chocolate-dome',
    name: "Valrhona Grand Cru Chocolate Sphere",
    description: "Smoked dark chocolate sphere filled with Tahitian vanilla bean lava, cocoa nib praline, espresso dust, melted table-side with hot salted caramel.",
    price: "$28",
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    tags: ['Table-side Theater', 'Award-Winning'],
    sommelierPairing: "Taylor Fladgate 40 Year Old Tawny Port",
    ingredients: ['Valrhona Onyx Chocolate', 'Salted Mountain Caramel', 'Tahitian Vanilla', 'Gold Leaf']
  },
  {
    id: 'gilded-smoke-cocktail',
    name: "The Gilded Bourbon Smoke",
    description: "25-year Kentucky bourbon infused with smoked cherrywood, maple syrup elixir, orange wood oils, presented in a smoke-filled crystal decanter.",
    price: "$32",
    category: 'cocktail',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    tags: ['House Specialty', 'Charred Accent'],
    sommelierPairing: "Served over a hand-carved, diamond-cut crystal ice sphere",
    ingredients: ['Aged Bourbon', 'Smoked Cherry Wood', 'Organic Maple Sap', 'Dehydrated Orange Ring']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Elena Rostova",
    role: "Lead Gastronomy Critic",
    quote: "L'Étoile captures the raw, sophisticated energy of Miami dining but strips away the noise to leave pure, unadulterated flavor artistry. The Wagyu makes time stand still.",
    rating: 5,
    source: "The Culinary Dispatch"
  },
  {
    id: '2',
    name: "Marcus Sterling",
    role: "Private Equity Executive",
    quote: "The Chef's Counter at L'Étoile is our organization's absolute go-to for sealing high-level acquisitions. The service is invisible yet perfect, and the cellar selection is second to none.",
    rating: 5,
    source: "Elite Lifestyle Magazine"
  },
  {
    id: '3',
    name: "Chef Jean-Luc Moreau",
    role: "3-Michelin Star Consultant",
    quote: "A masterclass in modern plating and temperature pacing. To experience the saffron-butter lobster here is to understand the absolute height of modern maritime poetry.",
    rating: 5,
    source: "L'Assiette d'Or"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    image: '/src/assets/images/restaurant_ambiance_1779372268969.png',
    caption: "The Grand Salon: Warm velvet lighting meets rich Brazilian stone.",
    category: 'interior'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800',
    caption: "Culinary precision: Dressings handled with obsessive care.",
    category: 'culinary'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
    caption: "Handcrafted mixology: Crafting our famous gold-dusted smoke cocktails.",
    category: 'bar'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    caption: "Private Cellar Vault: Over 1,200 curated vintage bottles.",
    category: 'interior'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    caption: "Savoring moments: The candlelit veranda facing the city skyline.",
    category: 'moments'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
    caption: "Chef de Cuisine meticulously placing A5 marbling.",
    category: 'culinary'
  }
];
