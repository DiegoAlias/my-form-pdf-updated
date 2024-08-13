export const AntiguedadForm = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-4">Antigüedad:</h2>

      <div className="grid grid-cols-3 gap-x-2">
        <div className="flex ">
          <label className="form-group-antiquity-label" htmlFor="anos">
            Años:
          </label>
          <input
            type="number"
            id="anos"
            name="anos"
            placeholder="Años"
            className="form-group-antiquity-input placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="flex">
          <label className="form-group-antiquity-label" htmlFor="meses">
            Meses:
          </label>
          <input
            type="number"
            id="meses"
            name="meses"
            placeholder="Meses"
            className="form-group-antiquity-input placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="flex">
          <label className="form-group-antiquity-label" htmlFor="dias">
            Días:
          </label>
          <input
            type="number"
            id="dias"
            name="dias"
            placeholder="Días"
            className="form-group-antiquity-input placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 my-4">
        <div className="flex">
          <label className="form-group-antiquity-label" htmlFor="carga-horaria">
            Carga horaria:
          </label>
          <input
            type="text"
            id="carga-horaria"
            name="carga-horaria"
            placeholder="Carga horaria"
            className="form-group-antiquity-input placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="flex">
          <label className="form-group-antiquity-label" htmlFor="suplemento">
            Suplemento:
          </label>
          <input
            type="text"
            id="suplemento"
            name="suplemento"
            placeholder="Suplemento"
            className="form-group-antiquity-input placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
