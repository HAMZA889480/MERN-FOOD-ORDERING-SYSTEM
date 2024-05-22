import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
function Layout({ child, heroRequired = false }) {
  return (
    <div className="flex  flex-col min-h-screen">
      <Header />
      {heroRequired && <Hero />}
      <div className="container mx-auto flex-1 py-10">{child}</div>
      <Footer />
    </div>
  );
}

export default Layout;
