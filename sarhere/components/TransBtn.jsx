import React from "react";
import { Button } from "react-bootstrap";

const TransBtn = ({ text }) => {
  return (
    <>
      <style>
        {`
            .langBtn {
                background-color: transparent;
                color:#fff;
                border:none;
                font-weight:700;
                
            }
            .langBtn:hover{
                background-color:transparent;
            }
            .langBtn:focus{
                background-color:transparent;
                box-shadow:none;
            }
        `}
      </style>
      <Button className="langBtn p-0">{text}</Button>
    </>
  );
};

export default TransBtn;
