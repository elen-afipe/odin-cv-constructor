import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function exportToPDF() {
  const element = document.querySelector(".cv-wrapper"); // The div to export
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 0;
  const pdfWidth = pageWidth - 2 * margin;
  const pdfHeight = (pdfWidth * element.offsetHeight) / element.offsetWidth;

  html2canvas(element, {
    scale: 2,
    useCORS: true,
    scrollX: 0,
    scrollY: -window.scrollY,
    logging: false,
    allowTaint: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF("p", "mm", "a4");

    pdf.addImage(imgData, "JPEG", margin, margin, pdfWidth, pdfHeight);

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
