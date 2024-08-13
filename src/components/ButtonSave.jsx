import React from "react";

export const ButtonSave = ({ handleSavePDF }) => {
  return (
    <button
      onClick={handleSavePDF}
      className="flex mx-auto mt-2 p-2 bg-purple-800 text-white text-lg font-bold hover:scale-105 hover:bg-purple-600 rounded-lg"
    >
      Guardar PDF
    </button>
  );
};
