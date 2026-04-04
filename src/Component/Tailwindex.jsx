import React from "react";
function Tailwindex () {
 return (
  <div className="bg-amber-50">
 <h1 className="text-center pt-10 text-3xl font-bold">
  Tailwind Test
</h1>
  <div className="min-h-screen flex justify-center items-center">
   <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white">
     <img
       className="w-full h-48 object-cover"
       src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ef8f5f101007887.5f159d183e23b.jpg"
       alt="Profile"
     />
     <div className="px-6 py-4 text-center">
       <h3 className="font-bold text-xl">PrinceCodes</h3>
       <p className="text-gray-600">Software Developer</p>
     </div>
     <div className="flex justify-center gap-4 py-4">
       <a href="#" className="text-blue-500">LinkedIn</a>
       <a href="#" className="text-blue-500">GitHub</a>
     </div>
   </div>
   </div>
   </div>
 );
}



export default Tailwindex;