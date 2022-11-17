import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="justify-content-center d-flex"> */}
      {/* <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div> */}
      {/* </div> */}
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className=" mx-auto py-5"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="/images/agriprice.png" width="100px" />
                <span className="ml-3 h5 font-weight-bold">Agri Price</span>
              </a>
            </CDBBox>
            <CDBBox
              display="flex"
              style={{ width: "50%" }}
              justifyContent="between"
            >
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Contact Agri Market
                </p>
                <CDBBox
                  flex="column"
                  display="flex"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink href="/">+233 0249107812</CDBFooterLink>
                  <CDBFooterLink href="/">Dumasua</CDBFooterLink>
                  <CDBFooterLink href="/">your email here</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Products
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink href="/">shop</CDBFooterLink>
                </CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox display="flex" className="mt-4" justifyContent="between">
            <small className="ml-2">
              &copy; Agri Market, 2022. All rights reserved.
            </small>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;
