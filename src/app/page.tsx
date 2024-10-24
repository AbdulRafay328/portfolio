"use client";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Skills from "@/components/Skills";
import Card from "@/components/Expcard";
import Footer from "@/components/footer";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contactme from "@/components/Contact";
import Projectcard from "@/components/project";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero text-white flex flex-col md:flex-row md:justify-between xs:w-full md:px-20 md:py-24 xs:px-4 xs:py-16 py-24 px-6">
        <Intro />
      </section>

      <section className="hero2 bg-slate-900 pt-14 text-white px-4 md:px-20 xs:py-16 py-12">
        <Heading showParagraph={false} heading="ABOUT ME" />
        <About />
      </section>

      <section className="hero3 text-white px-4 md:px-20 xs:py-16 py-12">
        <Heading heading="SKILLS" />
        <Skills />
      </section>

      <section className="hero4 bg-slate-900 px-4 md:px-20 xs:py-16 py-12">
        <Heading heading="EXPERIENCE" headline="Here is a quick summary of my most recent experiences:" />
        <div className="grid grid-cols-1 md:grid-cols-none md:grid-flow-row gap-4">
          <Card src="/images/upwork-icon.png" alt={"upwork"} head="Jr. Frontend developer" />
          <Card src="/images/fiverr-icon.png" alt={"fiverr"} head="Jr. Frontend developer" />
          <Card src="/images/freelancer-icon.png" alt={"freelancer"} head="Jr. Frontend developer" />
        </div>
      </section>

      <section className="hero5 px-4 md:px-20 xs:py-16 py-12">
        <Heading heading="WORK" headline="Some of the noteworthy projects I have built:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-none md:grid-flow-row gap-4">
          <Projectcard src="/images/resume.png" alt={"resume"} address="https://vercel.com/api/toolbar/link/hackathon-4-tau.vercel.app?via=team-dashboard-project-entity&p=1&page=/" />
          <Projectcard src="/images/Game.png" alt={"game"} address="https://vercel.com/api/toolbar/link/number-guessing-game-olive.vercel.app?via=team-dashboard-project-entity&p=1&page=/" />
          <Projectcard src="/images/tictactoe.png" alt={"game2"} address="https://vercel.com/api/toolbar/link/tic-tac-toe-theta-dusky.vercel.app?via=team-dashboard-project-entity&p=1&page=/" />
        </div>
      </section>

      <section className="hero6 bg-slate-900 px-4 md:px-20 xs:py-16 py-12">
        <Heading heading="TESTIMONIALS" headline="Nice things people have said about me:" />
        <div className="flex flex-col gap-10 xs:m-0">
          <div className="flex justify-center gap-10 flex-wrap">
            <Testimonials />
            <Testimonials />
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="hero7 bg-slate-950 px-4 md:px-20 xs:py-16 py-12">
        <Heading heading="GET IN TOUCH" headline="What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect." />
        <Contactme />
      </section>

      <Footer />
    </div>
  );
}

