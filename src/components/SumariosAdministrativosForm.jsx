export const SumariosAdministrativosForm = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lgform-group-summary font-bold mb-4">
        Sumarios Administrativos:
      </h2>

      <div className="grid grid-cols-3 gap-x-2">
        <div className="flex">
          <label htmlFor="no" className="form-group-summary-label-checkbox">
            No se encuentra:
          </label>
          <input
            type="checkbox"
            id="no"
            name="no"
            placeholder="Suplemento"
            className="form-group-summary-input-checkbox placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="flex">
          <label htmlFor="aperc" className="form-group-summary-label">
            Aperc:
          </label>
          <input
            type="text"
            id="aperc"
            name="aperc"
            placeholder="Apercibimiento"
            className="form-group-summary-input placeholder:text-red-300 font-semibold text-center"
          />
        </div>

        <div className="flex">
          <label htmlFor="susp" className="form-group-summary-label">
            Susp:
          </label>
          <input
            type="text"
            id="susp"
            name="susp"
            placeholder="Suspensión"
            className="form-group-summary-input placeholder:text-red-300 font-semibold text-center"
          />
        </div>

        <div className="flex mt-4">
          <label htmlFor="si" className="form-group-summary-label-checkbox">
            Si se encuentra:
          </label>
          <input
            type="checkbox"
            id="si"
            name="si"
            className="form-group-summary-input-checkbox"
          />
        </div>

        <div className="flex mt-4">
          <label htmlFor="nro-expte" className="form-group-summary-label">
            Nro. Expte:
          </label>
          <input
            type="text"
            id="nro-expte"
            name="nro-expte"
            placeholder="Nro. Expte"
            className="form-group-summary-input placeholder:text-red-300 font-semibold text-center"
          />
        </div>

        <div className="flex mt-4">
          <label htmlFor="nro-acto-admin" className="form-group-summary-label">
            Nro. Acto Admin.:
          </label>
          <input
            type="text"
            id="nro-acto-admin"
            name="nro-acto-admin"
            placeholder="Nro. Acto Admin"
            className="form-group-summary-input placeholder:text-red-300 font-semibold text-center"
          />
        </div>
      </div>

      <div className="flex gap-x-8 w-auto mt-8">
        <textarea
          id="motivo"
          name="motivo"
          value="No consta en legajo sumario administrativo actual"
          placeholder="Motivo"
          className="form-group-summary-textarea placeholder:text-red-300 font-semibold"
        ></textarea>

        <textarea
          id="resultado-sumario"
          name="resultado-sumario"
          placeholder="Resultado del Sumario:"
          className="form-group-summary-textarea placeholder:text-red-300 font-semibold"
        ></textarea>
      </div>
    </div>
  );
};
