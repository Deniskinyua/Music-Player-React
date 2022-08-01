import { searchIcon } from "../../assets";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo"></div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default Header;
