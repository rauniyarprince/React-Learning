function PropsDestruct({ name, role }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center hover:scale-105 transition duration-300  gap-2 ">
      
      <img
        className="w-20 h-20 mx-auto rounded-full mb-4"
        src="https://i.pravatar.cc/150"
        alt="profile"
      />

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
}

export default PropsDestruct;