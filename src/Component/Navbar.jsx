function Navbar() {
  return (
    <>
<nav className="bg-amber-300 h-20 flex items-center justify-between px-10 shadow-md">
      <h1 className="text-xl font-bold">
        PinceCodes
      </h1>
      <ul className="flex gap-6">
      <li>Home</li>
      <li>About</li>
      <li></li>
      <li>Contact</li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;