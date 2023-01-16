export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className="h-10 w-10 bg-blue-500 hover:bg-blue-700 rounded-md text-2xl shadow-sm text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}