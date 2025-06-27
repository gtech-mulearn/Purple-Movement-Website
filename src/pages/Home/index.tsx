import { useState } from "react";
import Form, { type PopupContentType } from "../../components/Form";
import Navbar from "../../components/Navbar";
import { Section1 } from "./Section1";
import Footer from "../../components/Footer";
import Manifesto from "./Manifesto";
import CertificatePopup from "../../components/CertificatePopup";
import { useCertificate } from "../../hooks/useCertificate";

const Home = () => {
  const endDate = new Date("2025-06-28T15:00:00");
  const [viewJoinModal, setViewJoinModal] = useState(false);
  const onJoinUs = () => {
    setViewJoinModal(true);
  };
  const onClose = () => {
    setViewJoinModal(false);
  };
  const [certificateData, setCertificateData] = useState<PopupContentType>();

  const [totalCount, setTotalCount] = useState<number>();
  const onResult = (res: PopupContentType) => {
    generateCertificate({
      name: res.name || "",
      certificateId: res.id || "",
    });
    setCertificateData(res);
    if (res.count) setTotalCount(res.count);
    onClose();
  };
  const { canvasRef, generateCertificate, downloadCertificate } = useCertificate()
  return (
    <>
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto shadow-lg rounded-lg hidden"
        width="1080"
        height="1080"
      />
      <Navbar onJoinUs={onJoinUs} />
      <div className="px-4 sm:px-6">
        <Form onResult={onResult} isOpen={viewJoinModal} onClose={onClose} />
        <Section1
          value={totalCount}
          update={setTotalCount}
          endDate={endDate}
          onJoinUs={onJoinUs}
        />
        <Manifesto />
        {!!certificateData && (
          <CertificatePopup
            name={certificateData.name}
            contribution={certificateData.contribution}
            id={certificateData.id}
            onClose={() => setCertificateData(undefined)}
            onDownload={downloadCertificate}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
