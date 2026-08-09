import { Header } from "@/componentes/header/header";
import { Hero } from "@/componentes/hero/hero";
import { About } from "@/componentes/about/about";
import { HowItWorks } from "@/componentes/howitworks/how-it-works";
import { Stories } from "@/componentes/stories/stories";
import { Safety } from "@/componentes/safety/safety";
import { Features } from "@/componentes/features/features";
import { Preview } from "@/componentes/preview/preview";
import { Faq } from "@/componentes/faq/faq";
import { Download } from "@/componentes/download/download";
import { Footer } from "@/componentes/footer/footer";

export default function Home (){
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Stories />
      <Preview />
      <Safety />
      <Faq />
      <Download />
      <Footer />
    </main>
  )
}