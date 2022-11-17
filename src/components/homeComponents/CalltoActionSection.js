import React from "react";
import Button from "react-bootstrap/Button";
const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Get all your food stuffs here</h2>
              <Button variant="warning" className="">
                Order Now
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
