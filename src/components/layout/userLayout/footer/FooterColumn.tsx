import Link from "next/link";
import { IFooterSection } from "@/data/navigations.data";

interface FooterColumnProps {
  section: IFooterSection;
}

const FooterColumn = ({ section }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold tracking-wider text-gray-900">
        {section.title}
      </h3>
      <ul className="flex flex-col gap-2">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-gray-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
