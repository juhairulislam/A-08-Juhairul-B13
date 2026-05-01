import BannerPage from "@/components/Banner";
import CareTips from "@/components/ExtraSection/CareTips";
import PopularProducts from "@/components/products/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
   <div className="md:w-[85%] mx-auto">
    <BannerPage></BannerPage>
    <PopularProducts></PopularProducts>
    <CareTips></CareTips>
   </div>
  );
}
