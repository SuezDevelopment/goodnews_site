import RootLayout from "@/components/root";
import { seoMetaData } from "@/data/data";
export default function LandingPage() {
  const { title, description } = seoMetaData;
  return (
    <RootLayout title={title} description={description}>
      <h1>great grace!!!!!!!!!!!!!!</h1>
    </RootLayout>
  );
}
