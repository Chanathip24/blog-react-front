import React from "react";
import "./Uncontent.css";
const Uncontent = () => {
  return (
    <>
      <div className="Unknown">
        <div className="un-text">
          <h1>So Sorry!</h1>
          <h3>The page you are looking for cannot be found</h3>
          <h5>Possible Reasons</h5>
          <ul>
            <li>The address may have been type incorrectly.</li>
            <li>It may be a broken or outdate link.</li>
          </ul>
        </div>

        <img
          src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-404-icon-graphic-design-template-vector-isolated-picture-image_7859514.png"
          width={300}
          height={300}
          alt=""
        />
      </div>
      
    </>
  );
};

export default Uncontent;
