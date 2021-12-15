import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { Button } from "@mui/material";

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };

  return (
    <Button onClick={downloadPdfDocument} variant="outlined">
      Download Pdf
    </Button>
  );
};

export default GenericPdfDownloader;
