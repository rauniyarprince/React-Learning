import React from "react";
function Cards({ username = "Default Props", Designation = "Default Props" }) {
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="rounded overflow-hidden shadow-lg bg-white" >
        <img
          className="w-full h-30 object-cover"
          src="https://tse1.mm.bing.net/th/id/OIP.-887uQEHHyjrUfd0dOtqcwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Profile"
        />
        <div className="px-6 py-4 text-center">
          <h3 className="font-bold text-xl">{username}</h3>
          <p className="text-gray-600">{Designation}</p>
        </div>
        <div className="flex justify-center gap-4 py-4">
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">GitHub</a>
        </div>
      </div>
    </div>
  );
}



export default Cards;