# react-otp-input-fields

Developed a customizable one-time password (OTP) component built with React. The component allows users to enter OTPs and can be customized to match the look and feel of the website, and it can also be added features such as auto-focus and auto-fill.

## Installation

```
$ npm install --save react-otp-input-fields
```

### Basic Usage:

```jsx
import React, { useState } from "react";
import OtpInput from "react-otp-input-fields";

export default function App() {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      otpFields={4}
      onCodeFilled={setOtp}
      placeholder={"-"}
    />
  );
}
```

## API

### OTP input

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>otpFields</td>
    <td>number</td>
    <td>true</td>
    <td>5</td>
    <td>Number of OTP inputs to be rendered</td>
  </tr>
  <tr>
    <td>onCodeFilled</td>
    <td>function</td>
    <td>true</td>
    <td>-</td>
    <td>Returns OTP code typed in inputs</td>
  </tr>
  <tr>
    <td>autoFocus</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>auto focuses input first field on page load</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Disable otp input fields</td>
  </tr>
  <tr>
    <td>value</td>
    <td>string</td>
    <td>true</td>
    <td>""</td>
    <td>value of the OTP passed into the component</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>false</td>
    <td>"-"</td>
    <td>placeholder character which will be filled for each inputs</td>
  </tr>
</table>
