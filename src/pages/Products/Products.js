import React from "react";
import Itemcard from "../../components/Itemcard";
import data from "../../data";

const Products = () => {
  return (
    <>
      <h1 className="text-center mt-3"> All products</h1>
      <section className="py-4 container">
        <div className="row justify-content-center"></div>
        {data.productData.map((item, index) => {
          return (
            <Itemcard
              img={item.logo}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default Products;
