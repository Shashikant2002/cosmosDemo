import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./productCategory.css";

const ProductCategory = ({ categoryes }) => {
  // const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  // const [loading, setLoading] = useState(false);
  // const [category, setCategory] = useState();

  // const fetchBannerData = async () => {
  //   setLoading(true);
  //   try {
  //     // const { data } = await axios.get(`https://kozmo.onrender.com/api/all/products`);
  //     const { data } = await axios.get(`${baseUrl}/api/all/products`);
  //     console.log(data);
  //     setCategory(data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log("Error " + err);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchBannerData();
  // }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <>
      <div className="productCategory common-section">
        <div className="container">
          {categoryes ? (
            <Carousel infinite={true} responsive={responsive}>
              {categoryes &&
                categoryes.categoryForFilter.map((ele, i) => {
                  return (
                    <div key={i} className="card ">
                      <figure className="catImage">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/kozmo-cloud.appspot.com/o/kozmocloud%2Fproducts%2F234568s%2FSun%2C%2005%20Mar%202023%2013%3A12%3A01%20GMT--197987b7ebcd1ee08f8c25ea4e77e20f1634731334%20(1).webp?alt=media&token=f8d0c7cb-ca0b-4943-888b-639116b3f7b1"
                          alt=""
                        />
                      </figure>
                      <p>
                        <b>{ele._id}</b>
                      </p>
                    </div>
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
