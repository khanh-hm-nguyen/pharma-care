export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  isPrescription: boolean;
}

export const BEST_SELLERS: IProduct[] = [
  {
    id: "1",
    name: "Panadol Extra with Optizorb",
    category: "Pain Relief",
    price: 45000,
    imageUrl: "/products/panadol.png",
    rating: 4.8,
    reviews: 1240,
    isPrescription: false,
  },
  {
    id: "2",
    name: "La Roche-Posay Effaclar Duo+",
    category: "Skincare",
    price: 385000,
    imageUrl: "/products/laroche.png",
    rating: 4.9,
    reviews: 856,
    isPrescription: false,
  },
  {
    id: "3",
    name: "Augmentin 625mg Tablets",
    category: "Antibiotics",
    price: 120000,
    imageUrl: "/products/augmentin.png",
    rating: 4.5,
    reviews: 320,
    isPrescription: true,
  },
  {
    id: "4",
    name: "Berocca Performance Mango",
    category: "Vitamins",
    price: 180000,
    imageUrl: "/products/berocca.png",
    rating: 4.7,
    reviews: 540,
    isPrescription: false,
  },
  {
    id: "5",
    name: "Omron Hem-8712 Monitor",
    category: "Medical Devices",
    price: 850000,
    imageUrl: "/products/omron.png",
    rating: 4.6,
    reviews: 120,
    isPrescription: false,
  },
];
