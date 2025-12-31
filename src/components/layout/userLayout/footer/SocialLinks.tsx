import { SOCIAL_LINKS } from "@/data/navigations.data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-row gap-2">
      {SOCIAL_LINKS.map((item) => (
        <Link key={item.href} href={item.href}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
