export const ServiceLocationForm = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <h2 className="text-lg font-bold mb-4">
          Lugar donde presta Servicios:
        </h2>
        <h3 className="text-lg font-semibold mb-6">Gobierno de Mendoza:</h3>
      </div>

      <div className="grid grid-cols-2 gap-x-2">
        <div className="form-group">
          <label htmlFor="ministerio-secretaria">Ministerio/Secretaría:</label>
          <input
            type="text"
            id="ministerio-secretaria"
            name="ministerio-secretaria"
            value="Ministerio de Salud y Deportes"
            placeholder="Ministerio de Salud y Deportes"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dependencia">Dependencia:</label>
          <input
            type="text"
            id="dependencia"
            name="dependencia"
            placeholder="Ingrese una dependencia"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reparticion">Repartición:</label>
          <input
            type="text"
            id="dependencia-reparticion"
            name="dependencia-reparticion"
            value="Subsecretaría de Deportes"
            placeholder="Ingrese una repartición"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Área:</label>
          <input
            type="text"
            id="area"
            name="area"
            placeholder="Ingrese una área"
            className="placeholder:text-red-300 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};
