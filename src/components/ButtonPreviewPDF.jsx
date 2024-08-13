import React from "react";

export const ButtonPreviewPDF = ({ handlePreviewPDF }) => {
  return (
    <button
      onClick={handlePreviewPDF}
      className="flex mx-auto mt-4 p-2 bg-emerald-700 text-white text-lg font-bold hover:scale-105 hover:bg-emerald-600 rounded-lg"
    >
      Previsualizar PDF
    </button>
  );
};
