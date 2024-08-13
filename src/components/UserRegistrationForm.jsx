export const UserRegistrationForm = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-x-2">
        <div className="form-group">
          <label htmlFor="apellidos-nombres">Apellidos y Nombres:</label>
          <input
            type="text"
            id="apellidos-nombres"
            name="apellidos-nombres"
            placeholder="Ingrese apellido y nombre"
            className="uppercase placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dni">D.N.I. Nº:</label>
          <input
            type="number"
            id="dni"
            name="dni"
            placeholder="DNI"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuil">C.U.I.L. Nº:</label>
          <input
            type="text"
            id="cuil"
            name="cuil"
            placeholder="CUIL"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="legajo">Legajo Nº:</label>
          <input
            type="text"
            id="legajo"
            name="legajo"
            placeholder="Ingrese número de legajo"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group-date-user mt-2">
          <label htmlFor="fecha-ingreso">Fecha de Ingreso:</label>
          <input
            type="text"
            id="fecha-ingreso"
            name="fecha-ingreso"
            placeholder="Fecha de ingreso"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="acto-nombramiento">
            Acto Administrativo de Nombramiento:
          </label>
          <select
            id="acto-nombramiento"
            name="acto-nombramiento"
            className="form-group-date-user-select"
          >
            <option value="DTO">Dto</option>
            <option value="Res">Res</option>
          </select>
          <input
            type="text"
            id="acto-nombramiento"
            name="acto-nombramiento"
            placeholder="Acto administrativo"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
