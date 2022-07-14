import React from "react";
import { BsQuestionLg } from "react-icons/bs";
import { Stack, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import MainBtn from "./MainBtn";

const SendQue = () => {
  return (
    <>
      <style>
        {`
            .sendStack{
                direction:rtl;
            }
            .form-floating>.form-control{
                direction:rtl;
                color:#5260AB;
            }
            .form-floating>label{
                color:#51BFAD;
                font-weight:700;
                right:0;
                left:auto;
            }
            .form-floating>.form-control:focus~label, .form-floating>.form-control:not(:placeholder-shown)~label, .form-floating>.form-select~label{
                opacity: .65;
                transform: scale(.75) translateY(-1.8rem) translateX(2rem);
            }
            .form-floating>.form-control:focus, .form-floating>.form-control:not(:placeholder-shown){
                clip-path: polygon(0 0, 85% 0%, 300% 100%, 100% 100%, 100% 100%, 0 100%);
                
            }
            @media (max-width:990px){
                .form-floating>.form-control:focus, .form-floating>.form-control:not(:placeholder-shown){
                    clip-path: polygon(0 0, 86% 0%, 300% 100%, 100% 100%, 100% 100%, 0 100%);
                }
            }
            .form-floating>.form-control{
                direction:rtl;

            }
            .form-control:focus{
                box-shadow:none;
                border-color:#ced4da;
            }

            .input-group{
                display:block
            }
            .invalid-feedback{
                display:block;
                direction:rtl
            }
            .sendParent .mainBtn{
                width: fit-content;
                background-color: #5260AB;
                margin-left:auto;
            }
            .sendTypo h5{
              color:#5260AB;
              font-weight:600
            }
            .sendTypo p{
              opacity:0.8;
            }
            @media (min-width:800px){
              .sendParent{
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1000;
                background-color: white;
              }
            }
        `}
      </style>
      <Stack className="sendParent p-md-5 ps-md-0" gap={3}>
        <Stack className="sendStack" direction="horizontal" gap={2}>
          <BsQuestionLg
            style={{ color: "#51BFAD", width: "35px", height: "60px" }}
          />
          <div className="sendTypo">
            <h5>ارسل سؤالك للمحاضر</h5>
            <p>يجب عليك التسجيل و حضور الندوة</p>
          </div>
        </Stack>
        <InputGroup hasValidation>
          <FloatingLabel
            controlId="floatingInput"
            label="السؤال"
            className="mt-3"
          >
            <Form.Control
              type="text"
              placeholder="السؤال"
              defaultValue="احمد محمد"
            />
            <Form.Control.Feedback className="mt-3" type="invalid">
              لابد من حجز الندوة اولا حتي تتمكن من ترك سؤالك
            </Form.Control.Feedback>
          </FloatingLabel>
        </InputGroup>
        <MainBtn text={"ارسل"} disabled={true} />
      </Stack>
    </>
  );
};

export default SendQue;
