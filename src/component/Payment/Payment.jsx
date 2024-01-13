import cards from "../../assets/picture/credit-cards-.jpg";
import paypal from "../../assets/picture/paypal.jpg";
import bank from "../../assets/picture/banktransfer.jpg";
import Crypto from "../../assets/picture/crypto.jpg";

const Payment = () => {
  return (
    <div className="container bg-body-tertiary mt-4 p-4">
      <h1 className="text-center fw-bold">Payment Methods</h1>
      <p className="text-center">
        Choose your preferred payment method for a seamless checkout experience.
      </p>
      <div className="container bg-white rounded ">
        <h4 className="fw-semibold my-3">Available Payment Options</h4>
        <div className=" d-flex  gap-2 py-3">
          <div className="d-flex  gap-2 col-6 border border-1 rounded  align-items-center ">
            <img
              src={cards}
              style={{ width: "50px", height: "50px" }}
              className="rounded m-lg-2 "
            />
            <div>
              <h5>Credit Card</h5>
              <p>Visa, MasterCard, American Express</p>
            </div>
          </div>
          <div className="d-flex  gap-2 col-6 border border-1 rounded  align-items-center ">
            <img
              src={paypal}
              style={{ width: "50px", height: "50px" }}
              className="rounded m-lg-2"
            />
            <div>
              <h5>PayPal</h5>
              <p>Secure and fast payment</p>
            </div>
          </div>
        </div>
        <div className=" d-flex  gap-2 py-3">
          <div className="d-flex  gap-2 col-6 border border-1 rounded  align-items-center ">
            <img
              src={bank}
              style={{ width: "50px", height: "50px" }}
              className="rounded m-lg-2 "
            />
            <div>
              <h5>Bank Transfer</h5>
              <p>Direct from your bank account</p>
            </div>
          </div>
          <div className="d-flex border-1 gap-2 col-6 border border-1 rounded  align-items-center ">
            <img
              src={Crypto}
              style={{ width: "50px", height: "50px" }}
              className="rounded m-lg-2"
            />
            <div>
              <h5>Crypto Currency</h5>
              <p>Bitcoin, Ethereum, and more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
