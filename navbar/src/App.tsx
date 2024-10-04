import { NavLinks } from "./components/NavLinks";
import Search from "./assets/search.svg";
import Menu from "./assets/menu.svg";

function App() {
  return (
    <>
      <nav className="flex items-center gap-8 p-4 border-b-2 min-h-20 relative">
        <p>AEON</p>
        <ul className="items-center gap-4 hidden md:flex">
          <NavLinks />
        </ul>
        <div className="flex-1"></div>
        <label htmlFor="search" className="md:hidden">
          <img src={Search} alt="magnifying glass icon" />
        </label>
        <input type="checkbox" id="search" className="hidden peer/search" />
        <input
          type="text"
          placeholder="Search documentation..."
          className="rounded-md bg-zinc-200 px-2 py-1 hidden md:inline peer-checked/search:inline"
        />
        <label htmlFor="menu" className="md:hidden">
          <img src={Menu} alt="menu icon" />
        </label>
        <input type="checkbox" id="menu" className="hidden peer/menu" />
        <ul className="hidden absolute left-0 peer-checked/menu:flex flex-col top-20 p-6 gap-6">
          <NavLinks />
        </ul>
      </nav>
    </>
  );
}

export default App;
