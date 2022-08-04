import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  padding: 1rem 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  color: black;
  width: 16rem;
  height: auto;
  padding: 3rem;
  justify-content: space-between;
  box-shadow: 10px 10px 20px lightgrey;
  border-radius: 10px;
  text-align: center;
`;

const ProdCard = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PriceButton = styled.div`
  padding: 10px 5px;
  color: white;
  background-color: #d7172e;
  width: 50px;
  border-radius: 8px;
  margin: 10px auto;
`;

const AddToCart = styled.div`
  padding: 10px 5px;
  color: white;
  background-color: #288dbd;
  width: 150px;
  border-radius: 8px;
  margin: 10px auto;
`;

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    products();
  }, []);

  const products = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );
    // console.log(response);
    const jsonData = await response.json();
    setProduct(jsonData);
  };

  return (
    <Container>
      <h2>Products</h2>
      <ProdCard>
        {product.map((values) => {
          return (
            <>
              <ProductCard>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={values.image}
                  alt=""
                />
                <h5>{values.title}</h5>
                <PriceButton>{values.price}</PriceButton>
                <button
                  className="AddToCart"
                  style={{
                    border: "none",
                    padding: "10px 20px",
                    color: "black",
                    backgroundColor: "#288dbd",
                    fontWeight: "700",
                    borderRadius: "5px",
                    margin: "auto",
                  }}
                >
                  Add To Cart
                </button>
              </ProductCard>
            </>
          );
        })}
      </ProdCard>
    </Container>
  );
};

export default Products;
