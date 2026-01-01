// src/lib/db/mock-data.ts

// 1. MOCK USERS
export const MOCK_USERS = [
  {
    name: "System Admin",
    email: "admin@pharmacare.com",
    password: "Password@123", 
    role: "admin" as const, // Cast to literal type
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
  },
  {
    name: "Sarah Pharmacist",
    email: "sarah@pharmacare.com",
    password: "Password@123",
    role: "pharmacist" as const,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "John Customer",
    email: "john@example.com",
    password: "Password@123",
    role: "user" as const,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
];

// 2. MOCK PRODUCTS
export const MOCK_PRODUCTS = [
  {
    name: "Panadol Extra with Optizorb",
    description: "Panadol Extra with Optizorb Formulation is ideal for those who want the benefits of Panadol, plus a little more pain relieving power on tough pain like tension headaches, bad backache and period pain.",
    price: 45000,
    originalPrice: 50000,
    imageUrl: "/products/panadol-extra.jpg",
    category: "Pain Relief",
    stock: 100,
    isPrescription: false,
    rating: 4.8,
    reviews: 124,
  },
  {
    name: "Augmentin 625mg Tablets",
    description: "Augmentin is an antibiotic agent with a notably broad spectrum of activity against the commonly occurring bacterial pathogens in general practice and hospital.",
    price: 120000,
    imageUrl: "/products/augmentin.jpg",
    category: "Antibiotics",
    stock: 50,
    isPrescription: true, // Requires Rx
    rating: 4.5,
    reviews: 32,
  },
  {
    name: "La Roche-Posay Effaclar Duo+",
    description: "A dual-action daily gel moisturizer that reduces the appearance of blemishes and blackheads, controls shine, and helps protect the skin from the causes of red and brown colored marks.",
    price: 385000,
    originalPrice: 420000,
    imageUrl: "/products/effaclar.jpg",
    category: "Skincare",
    stock: 200,
    isPrescription: false,
    rating: 4.9,
    reviews: 850,
  },
  {
    name: "Omron HEM-7120 Blood Pressure Monitor",
    description: "The Omron HEM-7120 is a compact, fully automatic blood pressure monitor, operating on the oscillometric principle. It measures your blood pressure and pulse rate simply and quickly.",
    price: 850000,
    imageUrl: "/products/omron.jpg",
    category: "Medical Devices",
    stock: 15,
    isPrescription: false,
    rating: 4.7,
    reviews: 45,
  },
  {
    name: "Berocca Performance Mango",
    description: "Berocca Performance is a unique combination of B vitamins, vitamin C and essential minerals, like calcium, magnesium and zinc, which works to support your mental alertness and physical energy.",
    price: 180000,
    imageUrl: "/products/berocca.jpg",
    category: "Vitamins",
    stock: 80,
    isPrescription: false,
    rating: 4.6,
    reviews: 210,
  },
];