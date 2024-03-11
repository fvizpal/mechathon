import CheckModal from "@/components/shared/CheckModal";
import Footer from "@/components/shared/Footer";
import GenIntro from "@/components/shared/GenIntro";
import Header from "@/components/shared/Header";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Portfolio1 from "@/components/shared/PortFolio1";
import PortFolio2 from "@/components/shared/PortFolio2";
import PortFolio3 from "@/components/shared/PortFolio3";
import PortFolio4 from "@/components/shared/PortFolio4";

export default function Home() {

  return (
    <div>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ModeToggle />
        <br />
        Hello!
        <CheckModal/>
      </div>
    </main>
    <GenIntro/>
    <Portfolio1/>
    <PortFolio2/>
    <PortFolio3/>
    <PortFolio4/>
    <Footer/>
    </div>
  );
}
