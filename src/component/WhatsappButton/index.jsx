import { isMobile } from "react-device-detect";
import WhatsappIcon from "../WhatsappIcon";

const WhatsappButton = () => {
  return (
    <>
      <div className="fixed bottom-16 md:bottom-8 right-4 md:right-16 z-999">
        <a href="https://wa.me/5511996800593" target="_blank" rel="noreferrer">
          <WhatsappIcon width={isMobile ? 42 : 64} height={isMobile ? 42 : 64} />
        </a>
      </div>
    </>
  );
}

export default WhatsappButton;