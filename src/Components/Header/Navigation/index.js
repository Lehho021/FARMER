import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiSeedlingLine } from "react-icons/ri";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSideBarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSideBarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>
                        Jawa Pride <FaAngleRight className="ml-auto" />
                      </Button>
                      <div className="submenu">
                        <Link to="/">
                          <Button>Pride 1</Button>
                        </Link>
                        <Link to="/">
                          <Button>Pride 2</Button>
                        </Link>
                        <Link to="/">
                          <Button>Pride 3</Button>
                        </Link>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Jawa 1</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Jawa 2</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>Jawa Pride</Button>
                    </Link>
                    <Link to="/">
                      <Button>Rayap Besi</Button>
                    </Link>
                    <Link to="/">
                      <Button>Maduro</Button>
                    </Link>
                  </div>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Tools</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Link to="/">
                    <Button>
                      <RiSeedlingLine />
                      Seed
                    </Button>
                  </Link>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home1</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home2</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home3</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
