import CheckModal from "@/components/shared/CheckModal";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Portfolio1 from "@/components/shared/PortFolio1";
import PortFolio2 from "@/components/shared/PortFolio2";
import PortFolio3 from "@/components/shared/PortFolio3";
import PortFolio4 from "@/components/shared/PortFolio4";
import Footer from "@/components/shared/Footer";
import EnterButton from "@/components/shared/EnterButton";

export default function Home() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto p-5 flex flex-wrap md:flex-row items-center">
          <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">BaatCheet</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}

            <EnterButton />
          </nav>
          <div className=" flex gap-5">
            <ModeToggle />
          </div>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col justify-center items-center w-full mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium text-gray-900 mb-4">
              Discover Your Community....
            </h1>
            <p className="lg:pl-6 lg:w-2/3 leading-relaxed text-base">
              Discover and connect with like-minded individuals effortlessly
              with ConnectHub. Our app is your gateway to meeting people who
              share your interests, hobbies, or goals. Whether it's art,
              fitness, or travel, ConnectHub helps you find your tribe. Download
              now and start connecting!.
            </p>
          </div>
        </div>
      </section>
      <CheckModal />
      <Portfolio1 />
      <PortFolio2 />
      <PortFolio3 />
      <PortFolio4 />
      <Footer />
    </div>
  );
}
