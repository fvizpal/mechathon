import CheckModal from "@/components/shared/CheckModal";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Portfolio1 from "@/components/shared/PortFolio1";
import PortFolio2 from "@/components/shared/PortFolio2";
import PortFolio3 from "@/components/shared/PortFolio3";
import PortFolio4 from "@/components/shared/PortFolio4";
import Footer from "@/components/shared/Footer";
import EnterButton from "@/components/shared/EnterButton";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="text-gray-600 body-font flex">
        <div className=" flex flex-row container mx-auto p-5 gap-4 items-center">
          <Link href={"/"} className="font-medium text-gray-900">
            <span className="ml-3 text-xl dark:text-white">
              BaatCheet
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900 dark:text-white">Discover</Link>
            <Link href={"/blog"} className="mr-5 hover:text-gray-900 dark:text-white">Blog</Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900 dark:text-white">About</Link>
            <Link href={"/contact"} className="mr-5 hover:text-gray-900 dark:text-white">Contact Us</Link>
          </nav>
          <ModeToggle />
          <EnterButton />
        </div>
      </header>
      <section className="text-gray-600 container px-5 py-24 body-font mx-auto flex flex-wrap">
        <div className="flex flex-col justify-center items-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium text-gray-900 mb-4 dark:text-white">Discover Your Community....</h1>
          <p className="lg:pl-6 lg:w-2/3 leading-relaxed text-base dark:text-white">Discover
            and connect
            with like-minded individuals effortlessly with ConnectHub.
            Our app is your gateway to meeting people who share your
            interests, hobbies, or goals. Whether it's art, fitness, or
            travel, ConnectHub helps you find your tribe. Download now
            and start connecting!.</p>
        </div>
      </section>
      {/* <CheckModal /> */}
      <Portfolio1 />
      <PortFolio2 />
      <PortFolio3 />
      <PortFolio4 />
      <Footer />
    </div>
  );
}
