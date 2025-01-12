import AboutUs from "@/components/aboutUs/AboutUs";
import Advertise from "@/components/advertise/Advertise";
import Banner from "@/components/banner/Banner";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Process from "@/components/process/Process";
import Section from "@/components/section/Section";
import Selection from "@/components/selection/Selection";
import TopRated from "@/components/topRated/TopRated";


export default function Home() {
  return (
    <div>
      <div className="lg:block hidden">
        <Header></Header>
      </div>
      <div >
        <Navbar></Navbar>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Section></Section>
      </div>
      <div>
        <Advertise></Advertise>
      </div>
      <div className="mt-16">
        <AboutUs></AboutUs>
      </div>
      <div className="mt-16">
        <TopRated></TopRated>
      </div>
      <div className="mt-16">
      <Process></Process>
      </div>
      <div className="mt-16">
        <Selection></Selection>
      </div>
      <div className="mt-16">
        <Gallery></Gallery>
      </div>
    </div>
  );
}
