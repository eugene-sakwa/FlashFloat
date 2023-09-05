import React from "react";
import Modal from "react-modal";

interface UploadSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadSuccessModal: React.FC<UploadSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Upload Success"
      ariaHideApp={false} // Important to prevent accessibility issues
    >
      <div>
        <h2>Upload Successful!</h2>
      </div>
      <div>
        <p>Your file has been uploaded to Amazon S3.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default UploadSuccessModal;
