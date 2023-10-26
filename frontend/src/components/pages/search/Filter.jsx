import { useState } from "react";
import scissors from "/assets/icons/scissors.svg";
import foot from "/assets/icons/chicken-leg.svg";
import walkplus from "/assets/icons/image 59.svg";
import walk from "/assets/icons/image 61.svg";
import stick from "/assets/icons/wood-stick.svg";
import vet from "/assets/icons/map_veterinary-care.svg";

const Filter = ({ handleSearchTerm }) => {
  const [userFilter, setUserFilter] = useState({
    city: "",
    animalType: "",
    services: [],
  });

  const handleCheckboxChange = (e) => {
    if (e.target.checked && !userFilter.services.includes(e.target.value)) {
      setUserFilter((userFilter) => ({
        ...userFilter,
        services: [...userFilter.services, e.target.value],
      }));
    } else {
      setUserFilter((userFilter) => ({
        ...userFilter,
        services: userFilter.services.filter(
          (service) => service !== e.target.value
        ),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchTerm(userFilter);
  };

  return (
    <div className="container mx-auto p-8 bg-[white] shadow-lg sm:rounded-xl">
      <h2 className="my-8 text-xl text-center text-black font-bold">
        Filtro de búsqueda
      </h2>
      <form
        id="filter-form"
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full lg:w-[70%]">
          <h3 className="mb-4 text-md text-black font-bold">
            Servicios Disponibles
          </h3>
          <div className="mb-8 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:flex-row ">
            <label htmlFor="peluqueria" className="flex items-center">
              <input
                id="peluqueria"
                type="checkbox"
                defaultChecked={false}
                value="Peluqueria"
                name="peluqueria"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Peluquería
              <img src={scissors} alt="icono de tijeras" className="w-6 ml-2" />
            </label>
            <label htmlFor="dieta" className="flex items-center">
              <input
                id="dieta"
                type="checkbox"
                name="dieta"
                defaultChecked={false}
                value="Dieta"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Dietas especiales
              <img src={foot} alt="icono de comida" className="w-6 ml-2" />
            </label>
            <label htmlFor="actividades" className="flex items-center">
              <input
                id="actividades"
                type="checkbox"
                name="actividades"
                defaultChecked={false}
                value="Actividades"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Juegos y actividades
              <img src={stick} alt="icono de rama" className="w-6 ml-2" />
            </label>
            <label htmlFor="paseo-personal" className="flex items-center">
              <input
                id="paseo-personal"
                type="checkbox"
                name="paseo-personal"
                defaultChecked={false}
                value="Paseo personal"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Paseos personales
              <img src={walk} alt="icono de paseos" className="w-6 ml-2" />
            </label>
            <label htmlFor="paseo-manada" className="flex items-center">
              <input
                id="paseo-manada"
                type="checkbox"
                name="paseo-manada"
                defaultChecked={false}
                value="Paseos en manada"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Paseos en manada
              <img src={walkplus} alt="icono de paseos" className="w-6 ml-2" />
            </label>
            <label htmlFor="veterinaria" className="flex items-center">
              <input
                id="veterinaria"
                type="checkbox"
                name="veterinaria"
                defaultChecked={false}
                value="Veterinaria"
                className="mr-2"
                onChange={handleCheckboxChange}
              />
              Veterinaria
              <img src={vet} alt="icono de veterinaria" className="w-6 ml-2" />
            </label>
          </div>
        </div>
        <div className="w-full lg:w-[70%] mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-md text-black font-bold">
              Tipo de mascota
            </h3>
            <div>
              <select
                type="select"
                name="animalType"
                value={userFilter.animalType}
                className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
                onChange={(e) =>
                  setUserFilter((userFilter) => ({
                    ...userFilter,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="">Selecciona una mascota</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-md text-black font-bold">Ciudad</h3>
            <div>
              <select
                type="select"
                name="city"
                value={userFilter.city}
                className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
                onChange={(e) =>
                  setUserFilter((userFilter) => ({
                    ...userFilter,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="">Selecciona tu Ciudad</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Parana">Paraná</option>
                <option value="La Plata">La Plata</option>
                <option value="Montevideo">Montevideo</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full max-w-lg py-4 md:mx-auto text-xl text-white font-bold bg-primary rounded-md"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Filter;
