import React, { useState, useCallback } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { DateInput } from "./components/DateInput";
import { UserRegistrationForm } from "./components/UserRegistrationForm";
import { ServiceLocationForm } from "./components/ServiceLocationForm";
import { CodeEscalafonarioForm } from "./components/CodeEscalafonarioForm";
import { RevistaPresupuestariamenteForm } from "./components/RevistaPresupuestariamenteForm";
import { NivelInstruccionForm } from "./components/NivelInstruccionForm";
import { AntiguedadForm } from "./components/AntiguedadForm";
import { SumariosAdministrativosForm } from "./components/SumariosAdministrativosForm";
import { ObservacionesForm } from "./components/ObservacionesForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ButtonSave } from "./components/ButtonSave";
import { ButtonPreviewPDF } from "./components/ButtonPreviewPDF";
import PDFPreviewModal from "./components/PDFPreviewModal";

const FormularioPDF = () => {
  // console.log("FormularioPDF renderizado");
  const [previewURL, setPreviewURL] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const captureCanvas = useCallback(() => {
    const input = document.getElementById("formulario");

    return html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.7);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const leftMargin = 1;
      const imgWidth = pdfWidth - leftMargin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;

      if (imgHeight > pdfHeight) {
        const totalPages = Math.ceil(imgHeight / pdfHeight);
        for (let i = 0; i < totalPages; i++) {
          const startY = -(pdfHeight * i);
          pdf.addImage(
            imgData,
            "JPEG",
            leftMargin,
            startY + position,
            imgWidth,
            imgHeight
          );
          if (i < totalPages - 1) {
            pdf.addPage();
          }
        }
      } else {
        pdf.addImage(
          imgData,
          "JPEG",
          leftMargin,
          position,
          imgWidth,
          imgHeight
        );
      }

      const pdfBlob = pdf.output("blob");
      setPdfBlob(pdfBlob);
      setPreviewURL(URL.createObjectURL(pdfBlob));

      return { pdfBlob, previewURL };
    });
  }, []);

  const handlePreviewPDF = () => {
    captureCanvas().then(() => {
      setIsPreviewOpen(true);
    });
  };

  const handleSavePDF = () => {
    if (pdfBlob) {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.save("formulario.pdf");
    } else {
      captureCanvas().then(({ pdfBlob }) => {
        // Aquí deberías utilizar directamente el pdfBlob generado
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "formulario.pdf";
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container mx-auto py-8 px-4 justify-center items-center border-8 border-blue-600 bg-blue-600 rounded-xl">
        <div id="formulario" className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-center">
            SITUACIÓN DE REVISTA
          </h1>
          <DateInput onChange={handleChange} />
          <UserRegistrationForm onChange={handleChange} />
          <ServiceLocationForm onChange={handleChange} />
          <CodeEscalafonarioForm onChange={handleChange} />
          <RevistaPresupuestariamenteForm onChange={handleChange} />
          <NivelInstruccionForm onChange={handleChange} />
          <AntiguedadForm onChange={handleChange} />
          <SumariosAdministrativosForm onChange={handleChange} />
          <ObservacionesForm onChange={handleChange} />
        </div>
        <ButtonPreviewPDF handlePreviewPDF={handlePreviewPDF} />
        <ButtonSave handleSavePDF={handleSavePDF} />
        <PDFPreviewModal
          isOpen={isPreviewOpen}
          onRequestClose={() => setIsPreviewOpen(false)}
          pdfURL={previewURL}
        />
      </div>
    </LocalizationProvider>
  );
};

export default FormularioPDF;
