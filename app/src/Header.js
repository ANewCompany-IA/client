import { FaShoppingCart, FaUser, FaShoppingBag, FaSearch } from 'react-icons/fa';

function Header(props) {
  return (
    <nav className={`fixed bg-gray-950 text-white w-full flex flex-col justify-center py-4 ${props.className}`}>
      <div className="first-level-nav flex flex-row items-center justify-between">
        <span className="hidden md:block text-2xl">ANewCompany.IA</span>
        <input type="text" className="block rounded-md bg-gray-900 w-80 text-gray-500 px-2 py-1 ring-1 ring-gray-800 placeholder:text-gray-500" placeholder="Search" />
      </div>
      <div className="second-level-nav flex flex-row justify-between mt-3">
        <ul className="flex flex-row w-36 items-center justify-start">
          <li>About</li>
        </ul>
        <ul className="flex flex-row w-36 items-center justify-around">
          <li>Sign in</li>
          <li><FaShoppingCart /></li>
          <li><FaShoppingBag /></li>
          <li><FaUser /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
