export const NivelInstruccionForm = () => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 text-center">
        Nivel de Instrucción:
      </h2>

      <div className="flex mb-3 justify-center mt-6">
        <div className="flex items-center justify-center space-x-2 mr-12">
          <input
            type="radio"
            id="primaria"
            name="nivel-instruccion"
            value="primaria"
            className="w-5 h-5 hover:scale-125 mr-5 justify-center items-center mt-3"
          />
          <label htmlFor="primaria" className="">
            Primaria
          </label>
        </div>

        <div className="flex items-center justify-center space-x-2 mr-12">
          <input
            type="radio"
            id="secundario"
            name="nivel-instruccion"
            value="secundario"
            className="w-5 h-5 hover:scale-125 mr-5 justify-center items-center mt-3"
          />
          <label htmlFor="secundario" className="">
            Secundario
          </label>
        </div>

        <div className="flex items-center justify-center space-x-2 mr-12">
          <input
            type="radio"
            id="terciario"
            name="nivel-instruccion"
            value="terciario"
            className="w-5 h-5 hover:scale-125 mr-5 justify-center items-center mt-3"
          />
          <label htmlFor="terciario" className="">
            Terciario
          </label>
        </div>

        <div className="flex items-center justify-center space-x-2 mr-12">
          <input
            type="radio"
            id="universitario"
            name="nivel-instruccion"
            value="universitario"
            className="w-5 h-5 hover:scale-125 mr-5 justify-center items-center mt-3"
          />
          <label htmlFor="universitario" className="">
            Universitario
          </label>
        </div>
      </div>
    </div>
  );
};
