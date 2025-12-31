import { FooterColumn, NewsLetter, SocialLinks, FooterBottom } from ".";
import { Logo } from "../header";
import {
  FOOTER_SECTIONS,
  CONTACT_INFO,
} from "@/data";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo />
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-2">
                <strong>Địa chỉ:</strong> {CONTACT_INFO.address}
              </p>
              <p className="mb-2">
                <strong>Hotline:</strong> {CONTACT_INFO.hotline}
              </p>
              <p>
                <strong>Email:</strong> {CONTACT_INFO.email}
              </p>
            </div>


              <SocialLinks  />

          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <FooterColumn key={section.title} section={section} />
            ))}
          </div>

          <div className="lg:col-span-3">
            <NewsLetter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
