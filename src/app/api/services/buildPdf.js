import jsPDF from "jspdf";

export default function buildPdf({text, fileName}) {
    const doc = new jsPDF();
    const margin = 15;
    const widthPag = doc.internal.pageSize.getWidth() - margin * 2;
    const heightPag = doc.internal.pageSize.getHeight() - margin * 2;
    let y = margin;

    doc.setFontSize(18);
    doc.text("Resume for Lawyer-AI", margin, margin);

    doc.setFontSize(11);
    const lines = doc.splitTextToSize(text, widthPag);
    y += 20;
    lines.forEach((line, index) => {
        if (y > heightPag) {
          doc.addPage(); // Agregar nueva página si el contenido no cabe en la página actual
          y = margin;
        }
    
        doc.text(margin, y, line);
        y += 10; // Espacio entre líneas
      });

    return doc.output("arraybuffer", fileName);

}
