import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-lg md:text-xl font-bold tracking-tight text-teal-900">
        Pharma<span className="text-teal-600">Care</span>
      </div>
    </Link>
  );
};

export default Logo;
