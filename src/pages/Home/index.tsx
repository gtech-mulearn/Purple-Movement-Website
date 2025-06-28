import { useState } from "react";
import Form, { type PopupContentType } from "../../components/Form";
import Navbar from "../../components/Navbar";
import { Section1 } from "./Section1";
import Footer from "../../components/Footer";
import Manifesto from "./Manifesto";
import CertificatePopup from "../../components/CertificatePopup";

const Home = () => {

  const endDate = new Date("2025-06-28T16:00:00");

  const [viewJoinModal, setViewJoinModal] = useState(false);
  const [showLaunch, setShowLaunch] = useState(false);
  const [certificateData, setCertificateData] = useState<PopupContentType>();
  const [totalCount, setTotalCount] = useState<number>();

  const onJoinUs = () => setViewJoinModal(true);
  const onClose = () => setViewJoinModal(false);
  const onResult = (res: PopupContentType) => {
    setCertificateData(res);
    if (res.count) setTotalCount(res.count);
    onClose();
  };

  return (
    <>
      <canvas
        className="max-w-full h-auto shadow-lg rounded-lg hidden"
        width="1120"
        height="850"
      />
      <Navbar onJoinUs={onJoinUs} />
      <div className="px-4 sm:px-6">
        <Form onResult={onResult} isOpen={viewJoinModal} onClose={onClose} />
        <Section1
          value={totalCount}
          update={setTotalCount}
          endDate={endDate}
          onJoinUs={onJoinUs}
          onTimerEnd={() => setShowLaunch(true)}
          isLaunched={showLaunch}
        />
        <Manifesto />
        {!!certificateData && (
          <CertificatePopup
            name={certificateData.name}
            contribution={certificateData.contribution}
            id={certificateData.id}
            onClose={() => setCertificateData(undefined)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
