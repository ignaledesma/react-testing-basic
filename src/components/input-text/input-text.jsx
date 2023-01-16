export default function InputText({ id, label, placeholder, value }) {
  return (
    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg">
      {label && <label className="text-lg" htmlFor={id}>{label}</label>}
      <input
        className="px-2 py-3 rounded-md"
        name={id}
        id={id}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  );
}
      