const Women = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Women Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Dresses</h2>
          <p className="text-gray-500">Elegant outfits</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Handbags</h2>
          <p className="text-gray-500">Stylish bags</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Heels</h2>
          <p className="text-gray-500">Fashion footwear</p>
        </div>

      </div>
    </div>
  )
}

export default Women