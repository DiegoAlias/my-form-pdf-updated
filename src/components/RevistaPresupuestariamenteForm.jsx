export const RevistaPresupuestariamenteForm = () => {
  return (
    <div className="my-6">
      <h2 className="text-lg font-bold mb-4">Revista Presupuestariamente:</h2>

      <div className="grid grid-cols-2 gap-x-2">
        <div className="form-group-revista">
          <label className="form-group-revista-label" htmlFor="caracter">
            Carácter:
          </label>
          <input
            type="text"
            id="caracter"
            name="caracter"
            value="1"
            placeholder="Caracter"
            className="form-group-revista-input placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group-revista">
          <label className="form-group-revista-label" htmlFor="jurisdiccion">
            Jurisdicción:
          </label>
          <input
            type="text"
            id="jurisdiccion"
            name="jurisdiccion"
            value="08"
            placeholder="Jurisdicción"
            className="form-group-revista-input placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group-revista">
          <label
            className="form-group-revista-label"
            htmlFor="unidad-organizativa"
          >
            Unidad Organizativa:
          </label>
          <input
            type="text"
            id="unidad-organizativa"
            name="unidad-organizativa"
            value="90"
            placeholder="Unidad Organizativa"
            className="form-group-revista-input placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
