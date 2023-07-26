import React, { useCallback, useEffect, useRef, useState } from "react";
import "./otp.css";

const OtpInput = ({
  otpFields = 5,
  onCodeFilled,
  autoFocus = false,
  disabled = false,
  value = "",
  placeholder = "-",
}) => {
  const [activeInput, setActiveInput] = useState(0);
  const [otp, setOtp] = useState(value);
  const inputRef = useRef(new Array(otpFields).fill(""));

  const handleChange = (e) => {
    if (/\d/.test(e.target.value) && e.target.value !== "") {
      const updateOtp = [...otp];
      updateOtp[activeInput] = e.target.value;
      setOtp(updateOtp.join(""));
      if (updateOtp.length < otpFields) {
        setActiveInput((prev) => prev + 1);
      }
    }
  };

  const handleFocus = useCallback(
    (e) => {
      inputRef[activeInput].focus();
    },
    [activeInput]
  );

  const handleOTPDeletion = (e) => {
    if (e.key === "Backspace" && otp.length > 0) {
      const updateOtp = [...otp];
      updateOtp[activeInput] = "";
      setOtp(updateOtp.join(""));
      if (activeInput > 0) {
        setActiveInput((prev) => prev - 1);
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("text/plain")
      .trim()
      .slice(0, otpFields)
      .split("");
    setOtp(pasteData);
    setActiveInput(pasteData.length - 1);
  };

  useEffect(() => {
    if (activeInput >= 0 && activeInput < otpFields) {
      handleFocus();
    }
  }, [activeInput]);

  useEffect(() => {
    if (otp.length === otpFields) {
      onCodeFilled(otp);
    }
  }, [otp]);

  return (
    <div>
      {new Array(otpFields).fill("").map((i, index) => (
        <input
          type="text"
          placeholder={placeholder}
          value={otp[index] || ""}
          onChange={handleChange}
          onKeyDown={handleOTPDeletion}
          maxLength="1"
          key={index}
          autoFocus={autoFocus}
          ref={(ref) => (inputRef[index] = ref)}
          disabled={disabled}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OtpInput;
