import { Facebook, Instagram, YouTube } from "@mui/icons-material";

export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterSection {
  title: string;
  links: IFooterLink[];
}

export interface ISocialLink {
  platform: string;
  href: string;
  icon: React.ElementType;
}

export const FOOTER_SECTIONS: IFooterSection[] = [
  {
    title: "Về PharmaCare",
    links: [
      { label: "Giới thiệu", href: "/about" },
      { label: "Hệ thống nhà thuốc", href: "/locations" },
      { label: "Giấy phép kinh doanh", href: "/licenses" },
      { label: "Tuyển dụng", href: "/careers" },
    ],
  },
  {
    title: "Danh Mục Chính",
    links: [
      { label: "Thuốc kê đơn", href: "/products/medicines" },
      { label: "Thực phẩm chức năng", href: "/products/supplements" },
      { label: "Dược mỹ phẩm", href: "/products/cosmetics" },
      { label: "Chăm sóc cá nhân", href: "/products/personal-care" },
    ],
  },
  {
    title: "Hỗ Trợ Khách Hàng",
    links: [
      { label: "Hướng dẫn mua hàng", href: "/help/buying-guide" },
      { label: "Chính sách đổi trả", href: "/help/returns" },
      { label: "Chính sách bảo mật", href: "/help/privacy" },
      { label: "Giải quyết khiếu nại", href: "/help/complaints" },
    ],
  },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  { platform: "Facebook", href: "https://facebook.com", icon: Facebook },
  { platform: "Instagram", href: "https://instagram.com", icon: Instagram },
  { platform: "Youtube", href: "https://youtube.com", icon: YouTube },
];

export const CONTACT_INFO = {
  address: "123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh",
  hotline: "1900 1234",
  email: "support@pharmacare.vn",
};
