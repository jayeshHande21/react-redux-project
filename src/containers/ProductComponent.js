import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four wide column" key={id}>
        <Link to={`/Product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  src={image}
                  alt={title}
                  style={{ height: "250px", objectFit: "contain" }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{category}</div>
                <div className="description">
                  <p>{`Price: $${price}`}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="ui four column grid">{renderList}</div>;
};

export default ProductComponent;
