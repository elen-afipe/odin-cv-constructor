import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function exportToPDF() {
  const element = document.querySelector(".cv-wrapper"); // The div to export
  const pageWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const margin = 10; // margin in mm
  const pdfWidth = pageWidth - 2 * margin;
  const pdfHeight = (pdfWidth * element.offsetHeight) / element.offsetWidth;

  html2canvas(element, {
    scale: 4, // Higher scale for better quality
    useCORS: true,
    logging: false,
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    // Portrait orientation
    const pdf = new jsPDF("p", "mm", "a4");

    // Add image to PDF
    pdf.addImage(imgData, "JPEG", margin, margin, pdfWidth, pdfHeight);

    // If content overflows a page
    if (pdfHeight > pageHeight - 2 * margin) {
      let remainingHeight = pdfHeight;
      let position = 0;
      const pageContentHeight = pageHeight - 2 * margin;

      pdf.addPage();

      while (remainingHeight > 0) {
        position += pageContentHeight;
        remainingHeight -= pageContentHeight;

        if (remainingHeight > 0) {
          pdf.addImage(
            imgData,
            "JPEG",
            margin,
            margin - position,
            pdfWidth,
            pdfHeight
          );
          pdf.addPage();
        }
      }
    }

    pdf.save("resume.pdf");
  });
}
