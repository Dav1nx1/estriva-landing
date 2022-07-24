import CallToAction from "~/components/CallToAction";
import ContactUs from "~/components/ContactUs";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <CallToAction />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home;
