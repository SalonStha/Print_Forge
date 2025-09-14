import CategoryList from "@/components/category";
import HeroSection from "@/components/hero_section";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryList/>
    </>
  );
}