import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

  useEffect(() => {
    // Add your custom styles to hide the testing text
    const style = document.createElement("style");
    style.innerHTML = `
      .g-recaptcha div div iframe {
        display: block !important;
      }
      .g-recaptcha div div iframe[title="recaptcha challenge"] {
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-4">
      <form>
        <div className="mb-3" style={{ width: 500 }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!verfied}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReCaptach;