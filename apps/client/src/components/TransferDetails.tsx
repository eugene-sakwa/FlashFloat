import { useLocation } from "react-router-dom";
import { dateFormatter, fileFormatter } from "@/lib/formatter";
import React from "react";

interface ITransferDetailsDownload {
  isSender: boolean;
}

const TransferDetailsDownload: React.FC<ITransferDetailsDownload> = ({
  isSender,
}) => {
  const location = useLocation();
  const {
    yourEmail,
    title,
    message,
    numberFiles,
    totalSize,
    expiresAt,
    emailTo,
  } = location.state || {};
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 border-b">Your Transfer Details</h1>

      {isSender ? (
        <div className="mb-4">
          <p className="font-bold">Sending to</p>
          <p>{emailTo}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p>Sent From</p>
          <p>{yourEmail}</p>
        </div>
      )}
      <div className="mb-4">
        <p className="font-bold">Title</p>
        <p>{title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Message</p>
        <p>{message}</p>
      </div>
      <div>
        <p>
          {" "}
          {fileFormatter(totalSize)} .
          {numberFiles === 1 ? `${numberFiles} File` : `${numberFiles} Files`}.
          Expires {dateFormatter(new Date(expiresAt))}
        </p>
      </div>
    </div>
  );
};
export default TransferDetailsDownload;