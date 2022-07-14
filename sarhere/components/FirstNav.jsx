import React from "react";
import { Stack, Image, InputGroup, FormControl, Button } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import avatar from "../assets/avatar.png";
import brand from "../assets/brand.png";
import TransBtn from "./TransBtn";
const FirstNav = () => {
  return (
    <>
      <style type="text/css">
        {`
            .calendar {
                direction: rtl;
                color:#51BFAD;
                font-weight:700;
            }
            .searchBox {
                direction: rtl;
                max-width:250px;
                display:flex !important;
                flex-flow:nowrap;
            }
            .searchField{

            }
            .searchField::placeholder { 
              color:#fff;
            }
            .searchField:focus{
              box-shadow:none;
              color:#fff;
              background-color:transparent;
              border-color:#fff;
            }
            .searchBoxBorder{
              background-color: transparent;
              border: none;
              border-bottom: 1px solid #fff;
              border-radius: 0;
              color:#fff;
              font-weight:700;
            }

            .firstNav {
                position:relative;
            }

        `}
      </style>
      <Stack className="firstNav" direction="horizontal" gap={1}>
        <Image roundedCircle src={avatar} />
        <Stack direction="horizontal" gap={3} className="calendar mx-md-4">
          <IoCalendarOutline />
          <span>الاجندة</span>
        </Stack>
        <InputGroup className="searchBox me-md-4">
          <InputGroup.Text className="searchIcon searchBoxBorder">
            <FiSearch />
          </InputGroup.Text>
          <FormControl
            className="searchField searchBoxBorder pe-1"
            placeholder="بحث..."
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
        <TransBtn text={"EN"} />
        <Image className="ms-auto" src={brand} />
      </Stack>
    </>
  );
};

export default FirstNav;
