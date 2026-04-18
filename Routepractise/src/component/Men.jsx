const Men = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Men Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">T-Shirts</h2>
          <p className="text-gray-500">Stylish casual wear</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Jeans</h2>
          <p className="text-gray-500">Comfortable denim</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Shoes</h2>
          <p className="text-gray-500">Trendy footwear</p>
        </div>

      </div>
    </div>
  )
}

export default Men