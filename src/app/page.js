import Arrivals from "@/componenets/ui/Arrivals";
import Brand from "@/componenets/ui/Brand";
import Category from "@/componenets/ui/Category";
import Hero from "@/componenets/ui/Hero";
import Product from "@/componenets/ui/Product";
import Services from "@/componenets/ui/Services";
import Testimonial from "@/componenets/ui/Testimonial";
import BrandStory from "@/componenets/ui/BrandStory";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <Category />
      <Product />
      <Brand />
      <Testimonial />
      <Arrivals />
    </>
  );
}