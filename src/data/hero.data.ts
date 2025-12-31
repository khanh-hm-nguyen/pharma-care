import {
  LocalShippingOutlined,
  VerifiedUserOutlined,
  HeadsetMicOutlined,
  CachedOutlined,
} from "@mui/icons-material";

export interface IBanner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
}

export interface IServiceHighlight {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const MAIN_SLIDES: IBanner[] = [
  {
    id: "1",
    title: "New Season Vaccines",
    subtitle: "Protect your family with 20% off flu shots",
    imageUrl: "/banners/vaccine.jpg",
    ctaText: "Book Appointment",
    ctaLink: "/services/vaccine",
    bgColor: "bg-blue-600",
  },
  {
    id: "2",
    title: "Vitamin & Supplements",
    subtitle: "Buy 2 Get 1 Free on all imported brands",
    imageUrl: "/banners/vitamins.jpg",
    ctaText: "Shop Now",
    ctaLink: "/products/supplements",
    bgColor: "bg-teal-600",
  },
];

export const SIDE_BANNERS: IBanner[] = [
  {
    id: "side-1",
    title: "First Aid Kits",
    subtitle: "Essential for every home",
    imageUrl: "/banners/kit.jpg",
    ctaText: "View Kit",
    ctaLink: "/products/first-aid",
    bgColor: "bg-orange-100",
  },
  {
    id: "side-2",
    title: "Skin Care Week",
    subtitle: "Up to 50% off Derma products",
    imageUrl: "/banners/skin.jpg",
    ctaText: "Explore",
    ctaLink: "/products/skincare",
    bgColor: "bg-pink-100",
  },
];

export const SERVICE_HIGHLIGHTS: IServiceHighlight[] = [
  {
    id: "1",
    title: "Free Shipping",
    description: "For orders over 300k",
    icon: LocalShippingOutlined,
  },
  {
    id: "2",
    title: "100% Genuine",
    description: "Certified by Ministry of Health",
    icon: VerifiedUserOutlined,
  },
  {
    id: "3",
    title: "24/7 Support",
    description: "Expert pharmacist advice",
    icon: HeadsetMicOutlined,
  },
  {
    id: "4",
    title: "Easy Returns",
    description: "Within 30 days",
    icon: CachedOutlined,
  },
];
