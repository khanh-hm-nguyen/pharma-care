const FooterBottom = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <div className="text-center md:text-left">
        <p>© {currentYear} PharmaCare System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterBottom;
