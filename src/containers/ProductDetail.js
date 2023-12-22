import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProducts(response.data));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
      return () => {
        dispatch(removeSelectedProducts());
      };
    }
  }, [productId]);

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log("Product added to cart:", product);
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      ) : (
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <div className="ui medium image">
                <img src={image} alt={title} style={{ objectFit: "contain" }} />
              </div>
              <div className="description">
                <div className="header">{title}</div>
                <div className="meta">{category}</div>
                <p>{`Price: ${price} Rs`}</p>
                <p>{`Description: ${description}`}</p>
              </div>
            </div>
            <div className="extra content">
              <button className="ui button primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
