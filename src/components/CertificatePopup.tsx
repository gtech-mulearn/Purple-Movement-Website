// CertificatePopup.tsx
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo_pm.png";
import styles from "./certificate.module.css";
// adjust path to your Button component

type CertificatePopupProps = {
  name: string | undefined;
  contribution: string | undefined;
  id: string | undefined;
  onClose: () => void;
  onDownload: () => void;
};

const CertificatePopup: React.FC<CertificatePopupProps> = ({
  name,
  contribution,
  id,
  onClose,
  onDownload,
}) => {


  const handleShare = (platform: string) => {
    const shareText = `🎉 I just received a certificate for contributing to the Purple Movement! 💜\n#PurpleMovement #CertificateOfAppreciation`;
    const url = window.location.href;

    let shareUrl = "";
    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          shareText + " " + url
        )}`;
        break;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all animate-fadeIn">
      <div className="bg-white flex flex-col items-center absolute p-5">
        {/* Certificate Content */}

        <div className={`${styles.container} relative  `}>
          <img src={logo} alt="Purple Movement Logo" className={styles.logo} />
          <h1 className={styles.title}>CERTIFICATE</h1>
          <p className={styles.subtitle}>of Appreciation</p>

          <div className={styles.name}>{name}</div>

          <p className={styles.description}>
            has officially joined as{" "}
            <span className="font-bold">{contribution}</span>--Contributor to{" "}
            <span className={styles.highlight}>The Purple Movement</span>,
            joining the mission to redefine norms, spark bold ideas, and connect
            the dots that drive real change.
          </p>

          <p className={styles.id}>
            Unique ID: <span className="font-thin">{id}</span>
          </p>
          <p className={styles.hashtag}>#ThePurpleMovement</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-6 w-full max-w-md mt-6">
          <button
            onClick={onDownload}
            className="w-fit px-4 mx-auto bg-[#8e5cb7] hover:bg-[#3d2d50] text-white rounded-4xl  transition-colors h-12 text-sm font-medium"
          >
            Download Certificate
          </button>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleShare("linkedin")}
              className="p-3 aspect-square rounded-full border-2  transition-colors"
            >
              <FaLinkedin className="w-5 h-5 text-[#4267B2]" />
            </button>

            <button
              onClick={() => handleShare("facebook")}
              className="p-3 aspect-square rounded-full border-2  transition-colors"
              title="Share on Facebook"
            >
              <FaFacebookF className="w-5 h-5 text-[#4267B2]" />
            </button>

            <button
              onClick={() => handleShare("whatsapp")}
              className="p-3 aspect-square rounded-full border-2   transition-colors"
              title="Share on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            </button>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="mt-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatePopup;
