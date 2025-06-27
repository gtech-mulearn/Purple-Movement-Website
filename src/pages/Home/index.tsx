import { useState } from "react";
import Form, { type PopupContentType } from "../../components/Form";
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
  const [totalCount, setTotalCount] = useState<number>();
  const onResult = (res: PopupContentType) => {
    console.log(res)
    if (res.count) setTotalCount(res.count)
    onClose()
  }
  return (
    <>
      <Navbar onJoinUs={onJoinUs} />
      <div className="px-4 sm:px-6">
        <Form
          onResult={onResult}
          isOpen={viewJoinModal} onClose={onClose} />
        <Section1 value={totalCount}
          update={setTotalCount}
          endDate={endDate} onJoinUs={onJoinUs} />
        <Manifesto />
      </div>
      <Footer />
    </>
  );
};

export default Home;
