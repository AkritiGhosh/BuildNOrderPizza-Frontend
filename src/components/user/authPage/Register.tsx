import { useState } from "react";
import FloatingLabelInput from "../../common/FloatingLabelInput";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
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
        label="Enter your password"
        name="password"
        id="password"
        value={pwd}
        setValue={setPwd}
      />
      <FloatingLabelInput
        type="password"
        label="Confirm password"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPwd}
        setValue={setConfirmPwd}
      />
      <Button onClick={() => {nav('/1/edit-profile')}} type="filled" size="lg">
        Create profile
      </Button>
    </div>
  );
};

export default Register;
