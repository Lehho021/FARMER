import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDrown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  const [selectedTab, setselectedTab] = useState(null);

  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, provinsi) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(provinsi);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.provinsi.toLowerCase().includes(keyword);
      });
      setcountryList(list);
    } else {
      setcountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        slots={{
          transition: Transition,
        }}
      >
        <h3 className="mb-0">Set Your Location</h3>
        <p>lorem ipsum</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <IoIosClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search Your Location..."
            onChange={filterList}
          />
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.provinsi)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.provinsi}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDrown;
