import React from "react";
import { Button } from "react-bootstrap";

const MainBtn = ({ text, color, disabled }) => {
  return (
    <>
      <style>
        {`
            .mainBtn {
                background-color: ${color};
                color:#fff;
                border:none;
                font-weight:700;
                
            }
            .mainBtn:hover{
                background-color:${color};
            }
            .mainBtn:focus{
                background-color:${color};
                box-shadow:none;
            }
        `}
      </style>
      <Button className="mainBtn px-5 py-2" disabled={disabled}>
        {text}
      </Button>
    </>
  );
};

export default MainBtn;
