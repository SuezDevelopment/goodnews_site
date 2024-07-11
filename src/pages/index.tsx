import HeroSection from "@/components/HeroSection";
import RootLayout from "@/components/root";
import { seoMetaData } from "@/data/data";
export default function LandingPage() {
  const { title, description } = seoMetaData;
  return (
    <RootLayout title={title} description={description}>
       <HeroSection />
    </RootLayout>
  );
}
