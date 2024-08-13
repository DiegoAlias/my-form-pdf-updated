export const ObservacionesForm = () => {
  return (
    <div className="mt-4 mb-2">
      <h2 className="text-lg font-bold mb-2">Observaciones:</h2>
      <textarea
        id="observaciones"
        name="observaciones"
        className="form-group-summary-textarea px-2 w-full h-20 p-2"
      ></textarea>
    </div>
  );
};
