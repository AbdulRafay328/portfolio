"use client";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Skills from "@/components/Skills";
import Card from "@/components/Expcard";
import Projectcard from "@/components/project";
import Testimonials from "@/components/Testimonials";
import Contactme from "@/components/Contact";
import Footer from "@/components/footer";
import About from "@/components/About";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero text-white flex xs:w-[768px] md:w-full md:px-20 md:py-24 xs:px-0 xs:py-[60px] py-24 px-20">
        <Intro />
      </section>

      <section className="hero2 md:w-full xs:w-[768px] xs:px-0 xs:py-[60px] bg-slate-900 pt-14 text-white ">
        <Heading showParagraph={false}  heading="ABOUT ME" />
        <About/>
      </section>

      <section className="hero3 md:w-full xs:w-[768px] xs:py-[60px] xs:px-0 pt-14 text-white ">
        <Heading heading="SKILLS" />
        <Skills />
      </section>

      <section className="hero4 md:w-full xs:w-[768px] xs:py-[60px] xs:px-0 pt-14 pb-20 bg-slate-900">
        <Heading heading="EXPERIENCE" headline="Here is a quick summary of my most recent experiences:"/>
        <Card src="/images/upwork-icon.png" alt={"upwork"} head="Jr. Frontend developer" />
        <Card src="/images/fiverr-icon.png" alt={"fiverr"} head="Jr. Frontend developer" />
        <Card src="/images/freelancer-icon.png" alt={"freelancer"} head="Jr. Frontend developer" />
      </section>

      <section className="hero5 xs:w-[768px] xs:py-[60px] xs:px-0 pt-14">
        <Heading heading="WORK" headline="Some of the noteworthy projects i have built:"/>
        <Projectcard src="/images/resume.png" alt={"resume"} />
        <Projectcard src="/images/Game.png" alt={"game"} />
        <Projectcard src="/images/tictactoe.png" alt={"game2"}/>
      </section>

      <section className="hero6  xs:w-[768px] xs:py-[60px] xs:px-0 bg-slate-900 pt-14 pb-14">
        <Heading heading="TESTIMONIALS" headline="Nice things people have said about me:" />
        <div className="peoples gap-10 p-10 xs:flex-col xs:m-0 flex justify-center items-center ml-10 mr-10">
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </section>

      <section className="hero7 xs:w-[768px] xs:py-[60px] xs:px-14 pt-14 pb-14 bg-slate-950">
        <Heading heading="GET IN TOUCH" headline="What's next? Feel free to reach out to me if you are loooking for a developer, have a query, or simlpy want to connect" />
        <Contactme />
      </section>

      <Footer />
    </div>
  );
}
