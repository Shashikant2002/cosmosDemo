import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./productCategory.css";

const ProductCategory = ({ categoryes }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // console.log(categoryes?.all_category_for_filter);
  return (
    <>
      <div className="productCategory common-section">
        <div className="container">
          {categoryes ? (
            <Carousel infinite={true} responsive={responsive}>
              {categoryes &&
                // categoryes.categoryForFilter.map((ele, i) => {
                categoryes?.all_category_for_filter.map((ele, i) => {
                  return (
                    <Link
                      to={`/category/${ele._id}`}
                      key={i}
                      className="card flex flex-column justify-center align-center"
                    >
                      <figure className="catImage">
                        {ele?.main_category_image?.image_url ? (
                          <img
                            src={ele?.main_category_image?.image_url}
                            alt=""
                          />
                        ) : (
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/kozmo-cloud.appspot.com/o/kozmocloud%2Fproducts%2FChiken%20Tendor%2FWed%2C%2003%20May%202023%2006%3A21%3A01%20GMT--Chiken%20Tendor.webp?alt=media&token=0fd13362-3577-477e-8db8-0249af74dcf1"
                            alt=""
                          />
                        )}
                      </figure>
                      <p>
                        <b>{ele.main_category_name}</b>
                      </p>
                    </Link>
                  );
                })}
            </Carousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
