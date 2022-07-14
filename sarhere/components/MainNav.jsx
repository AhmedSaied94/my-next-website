import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const MainNav = () => {
  const sections = [
    "الرئيسية",
    "من نحن",
    "الخدمات",
    "الفعاليات",
    "الكورسات",
    "الندوات",
    "الورشات",
    "الاخبار",
    "الابحاث",
    "فريق العمل",
    "العضوية",
    "اتصل بنا",
  ];
  return (
    <>
      <style>
        {`
            .mainNav{
                direction:rtl;
                border-radius:10px;
            }
            .mainNav .nav-link{
                color:#303A6C !important;
                font-weight:600;

            }
            .mainNav .active{
                color: #51BFAD !important;
            }
            @media (max-width:990px){
              .mainNav{
                background-color:transparent !important;
              }
              .mainNav .nav-link{
                margin:0 1rem;
              }
              .mainNav .navbar-nav{
                flex-flow:wrap;
                background-color: #fff;
                margin-top: 1rem;
                border-radius: 10px;
              }
              .mainNav .navbar-toggler{
                width:100%;
              }
            }
        `}
      </style>
      <Navbar className="my-3 mainNav" bg="light" expand="lg">
        <Container className="mx-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {sections.map((section, inx) => {
                return (
                  <Nav.Link key={inx} href={`#${section}`}>
                    {section}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
