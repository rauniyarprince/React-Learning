const Kids = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Kids Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Toys</h2>
          <p className="text-gray-500">Fun & learning</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Clothes</h2>
          <p className="text-gray-500">Cute outfits</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Shoes</h2>
          <p className="text-gray-500">Comfort wear</p>
        </div>

      </div>
    </div>
  )
}

export default Kids