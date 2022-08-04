import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  width: 250px;
  padding: 15px;
  background-color: red;
  height: 50px;
  margin: 20px auto 20px auto;
  text-align: center;
`;

const Categories = () => {
  return (
    <Container>
      <Category>
        Watch
        <img
          src="https://m.media-amazon.com/images/I/81VIPpakj2L._AC_SS450_.jpg"
          alt=""
          style={{width: "20%", height: "auto", justifyContent: "center", margin: "auto"}}
        />
      </Category>
      <Category>Bag</Category>
      <Category>Shoes</Category>
    </Container>
  );
};

export default Categories;
