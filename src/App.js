import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import styled from "styled-components";

function App() {
  let [items, setItems] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Bora shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  <ITEM items={items}></ITEM>
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail items={items} />} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<h5>첫 주문시 양배추즙 서비스</h5>} />
          <Route path="two" element={<h5>생일 기념 쿠폰 받기</h5>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

const ITEM = ({ items }) => {
  return items.map((item, i) => (
    <Col className="item">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
        width="80%"
      />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <p>{item.price}</p>
    </Col>
  ));
};

export default App;
