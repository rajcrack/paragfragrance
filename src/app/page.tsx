import HomeHeaderCorousel from "@/components/home/HomeHeaderCorousel";
import Section2Card from "@/components/home/Section2Card";
import Section3Card from "@/components/home/Section3Card";
import Section4Card from "@/components/home/Section4Card";
import { FaCanadianMapleLeaf } from "react-icons/fa";


export default function page() {

  return (

    <>
      {/* carousel slider start */}
      <HomeHeaderCorousel />
      {/* carousel slider end */}
      {/* section 2 start here */}
      <section>
        <div className="py-10 text-[#353333] items-center flex flex-col">
          <h1 className="text-[28px] font-semibold ">Our World Wide Products</h1>
          <p>Parag Fragrances World Wide Top Most Selling Products Attars, Perfumes, Dhoop Sticks & Essential Oils</p>
          <br />
          <div className="flex flex-row items-center gap-3">
            <div className="w-[140px] h-[2px] bg-[#c1b17e]"></div>
            {/* <div className=""></div> */}
            <FaCanadianMapleLeaf className="text-[22px] text-[#c1b17e]" />
            <div className="w-[140px] h-[2px] bg-[#c1b17e]"></div>
          </div>
        </div>
        <div className="w-full lg:max-w-[65%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <Section2Card link="#" title="Attar" image="/home/sectiontwo_attar.jpg" />
          <Section2Card link="#" title="Dhoop Sticks" image="/home/sectiontwo_stick.jpg" />
          <Section2Card link="#" title="Perfumes" image="/home/sectiontwo_perfumes.jpg" />
          <Section2Card link="#" title="Essential Oils" image="/home/sectiontwo_oils.jpg" />
          <Section2Card link="#" title="Pure Sandalwoods" image="/home/sectiontwo_pure.jpg" />
          <Section2Card link="#" title="Hawan & Dhoops" image="/home/sectiontwo_hawan.jpg" />

        </div>
      </section>
      {/* section 2 ends here */}
      {/* section 3 starts here */}
      <section className="w-full lg:max-w-[65%] mx-auto">
        <Section3Card />
      </section>
      {/* section 3 ends here */}
      {/* section 4 starts here */}
      <section className="w-full">
        <Section4Card />
      </section>
      {/* section 4 ends here */}
    </>
  )
}
