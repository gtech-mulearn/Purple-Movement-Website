import { useState } from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import { Section1 } from "./Section1";
import Footer from "../../components/Footer";
import Manifesto from "./Manifesto";

const Home = () => {
  const endDate = new Date("2025-06-28T15:00:00");
  const [viewJoinModal, setViewJoinModal] = useState(false);
  const onJoinUs = () => {
    setViewJoinModal(true);
  };
  const onClose = () => {
    setViewJoinModal(false);
  };
  return (
    <>
      <Navbar onJoinUs={onJoinUs} />
      <div className="px-4 sm:px-6">
        <Form isOpen={viewJoinModal} onClose={onClose} />
        <Section1 endDate={endDate} onJoinUs={onJoinUs} />
        <Manifesto />
      </div>
      <Footer />
    </>
  );
};

export default Home;
