import { useState } from "react";
import FloatingLabelInput from "../../common/FloatingLabelInput";
import Button from "../../common/button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <div className="w-full flex flex-col gap-6 mt-2">
      <FloatingLabelInput
        type="email"
        label="Enter your email"
        name="email"
        id="email"
        value={email}
        setValue={setEmail}
      />
      <FloatingLabelInput
        type="password"
        // pattern= regex for validation
        label="Enter your password"
        name="password"
        id="password"
        value={pwd}
        setValue={setPwd}
      />
      <Button onClick={() => {}} type="filled" size="lg">
        Log in 
      </Button>
    </div>
  );
};

export default Login;
