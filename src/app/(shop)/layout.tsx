import { ShopHeader, Footer } from "@/components/layout/userLayout";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
