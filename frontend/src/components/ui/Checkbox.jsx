import scissors from "/assets/icons/scissors.svg";

const Checkbox = ({ service, handleCheckboxChange }) => {
  return (
    <label
      htmlFor={service.id}
      className="flex justify-between items-center text-center"
    >
      <input
        id={service.id}
        type="checkbox"
        name={service.name}
        defaultChecked={false}
        value={service.name}
        className="mr-2"
        onChange={handleCheckboxChange}
      />
      {service.name}
      <img
        src={scissors}
        alt={`icono de ${service.name}`}
        className="w-6 ml-2 bg-white rounded"
      />
    </label>
  );
};

export default Checkbox;
