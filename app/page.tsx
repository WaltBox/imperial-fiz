import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TheIdea from "@/components/TheIdea";
import Restaurants from "@/components/Restaurants";
import InTheNews from "@/components/InTheNews";
import Pods from "@/components/Pods";
import PrivateEvents from "@/components/PrivateEvents";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheIdea />
        <Restaurants />
        <InTheNews />
        <Pods />
        <PrivateEvents />
        {/* Partners (Bond) — isolated + removable. Delete this line + the file to pull it. */}
        <Partners />
      </main>
      <Footer />
    </>
  );
}
