import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import CountryDropDrown from "../CountryDropDown";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-grey">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Get 50% Off in Selected Product - Shop Now
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo"></img>
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDropDrown />}
                <SearchBox />
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span class="price">$69</span>
                    <div className="position-relative">
                      <Button className="circle ml-2">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
