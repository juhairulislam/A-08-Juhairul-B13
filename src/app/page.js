import BannerPage from "@/components/Banner";
import CareTips from "@/components/ExtraSection/CareTips";
import TopBrands from "@/components/ExtraSection/TopBrands";
import PopularProducts from "@/components/products/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
   <div className="md:w-[85%] mx-auto">
    <BannerPage></BannerPage>
    <PopularProducts></PopularProducts>
    <CareTips></CareTips>
    <TopBrands></TopBrands>
   </div>
  );
}
