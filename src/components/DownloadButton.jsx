import React from "react";
import resumePDF from "../assets/Resume_Sandra2025.pdf"; 
import "./DownloadButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Resume_Sandra2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      <span className="download-text">DownloadMyResume</span>
      <div className="download-icon">
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 16L12 4M12 16L8 12M12 16L16 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M4 20H20" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default DownloadButton;