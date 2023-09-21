import React, { useCallback, useEffect, useRef, useState } from "react";

interface OtpInputProps {
  otpFields: number;
  onCodeFilled: any;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  value: string;
  placeholder?: string | undefined;
}

const OtpInput = ({
  otpFields=5,
  onCodeFilled,
  autoFocus = false,
  disabled = false,
  value,
  placeholder = "-",
}: OtpInputProps) => {
  const [activeInput, setActiveInput] = useState(0);
  const [otp, setOtp] = useState(value);
  const inputRef = useRef(new Array(otpFields).fill(""));

  const handleChange = (e) => {
    if (/\d/.test(e.target.value) && e.target.value !== "") {
      const updateOtp = Array.from(otp);
      updateOtp[activeInput] = e.target.value;
      setOtp(updateOtp.join(""));
      if (updateOtp.length < otpFields) {
        setActiveInput((prev) => prev + 1);
      }
    }
  };

  const handleFocus = useCallback(
    () => {
      inputRef[activeInput].focus();
    },
    [activeInput]
  );

  const handleOTPDeletion = (e) => {
    if (e.key === "Backspace" && otp.length > 0) {
      const updateOtp = Array.from(otp);
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
          maxLength={1}
          key={index}
          autoFocus={autoFocus}
          ref={(ref) => (inputRef[index] = ref)}
          disabled={disabled}
          onPaste={handlePaste}
          style={{
            width: "56px",
            height: "56px",
            marginRight: "10px",
            border: "1px solid #d9d9d9",
            boxSizing: "border-box",
            boxShadow: "0px 0.5px 2px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
