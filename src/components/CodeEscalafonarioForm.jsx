export const CodeEscalafonarioForm = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-4">Código Escalafonario:</h2>

      <div className="grid grid-cols-2 gap-x-2">
        <div className="form-group">
          <label htmlFor="id-empleado">ID Tipo de Empleado:</label>
          <input
            type="number"
            id="id-empleado"
            name="id-empleado"
            placeholder="Ingrese un ID del empleado"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="regimen-salarial">Régimen Salarial:</label>
          <input
            type="text"
            id="regimen-salarial"
            name="regimen-salarial"
            placeholder="Ingrese régimen salarial"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="agrupamiento">Agrupamiento:</label>
          <input
            type="text"
            id="agrupamiento"
            name="agrupamiento"
            placeholder="Ingrese agrupamiento"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tramo">Tramo:</label>
          <input
            type="text"
            id="tramo"
            name="tramo"
            placeholder="Ingrese tramo"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subtramo">Subtramo:</label>
          <input
            type="text"
            id="subtramo"
            name="subtramo"
            placeholder="Ingrese subtramo"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="clase">Clase:</label>
          <input
            type="number"
            id="clase"
            name="clase"
            placeholder="Ingrese clase del empleado"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>
      <div className="form-group-cargo-label">
        <label htmlFor="cargo">Cargo:</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          placeholder="Ingrese cargo del empleado"
          className="form-group-cargo-input placeholder:text-red-300 font-semibold"
        />
      </div>
    </div>
  );
};
