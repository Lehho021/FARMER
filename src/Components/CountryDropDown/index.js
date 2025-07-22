import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";

const CountryDropDrown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Indonesia</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default CountryDropDrown;
