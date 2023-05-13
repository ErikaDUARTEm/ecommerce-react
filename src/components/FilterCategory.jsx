import PropTypes from 'prop-types';
export default function FilterCategory({categories, handleClick}) {
  return (
    <section className="section-filter-categories">
      {categories && categories.products &&
        categories.products.map((product) => (
          <article className="product" key={product.id}>
            <div className="container-image-product">
              <img src={product.images[0]} className="image-product" />
            </div>
            <div className="title-product">
              <p>{product.title}</p>
              <p>{product.description.slice(0, 16)}</p>
              <div className="price">
                <p>${product.price}</p>
                <button onClick={handleClick} className="car-button">
                  <img
                    src="https://img.icons8.com/material/24/000000/add-shopping-cart--v1.png"
                    id={product.id}
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}
FilterCategory.propTypes = {
    categories: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  
