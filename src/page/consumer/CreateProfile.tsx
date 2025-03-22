import { useState } from "react";
import Heading from "../../components/common/Heading";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import { UserProfile } from "../../lib/type";
import PageLayout from "../../components/common/PageLayout";

const initialData: UserProfile = {
  name: "",
  email: "",
  gender: "Male",
  user: "",
};

const CreateProfile = () => {
  const [form, setForm] = useState<UserProfile>(initialData);

  const setFormData = (key: string, value: string) =>
    setForm({ ...form, [key]: value });

  return (
    <PageLayout>
      <div className="w-full min-h-full sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto flex flex-col items-start justify-center gap-4 py-4 px-5">
        <Heading>Create your profile</Heading>
        <div className="w-full mb-3">
          <FloatingLabelInput
            type="text"
            label="Enter your name"
            id="name"
            name="name"
            value={form?.name}
            setValue={(val) => setFormData("name", String(val))}
          />
        </div>
        <div className="w-full mb-3 flex">
          <h2 className="w-full">Gender:</h2>
          <div className="w-full">
            <input
              type="radio"
              name="gender"
              id="Male"
              value={"Male"}
              checked={form?.gender == "Male"}
              onClick={() => setFormData("gender", "Male")}
              className="cursor-pointer accent-amber-600 dark:accent-slate-500 mr-3"
            />
            <label htmlFor="Male">Male</label>
          </div>
          <div className="w-full">
            <input
              type="radio"
              name="gender"
              id="Female"
              value={"Female"}
              checked={form?.gender == "Female"}
              onClick={() => setFormData("gender", "Female")}
              className="cursor-pointer accent-amber-600 dark:accent-slate-500 mr-3"
            />
            <label htmlFor="Female">Female</label>
          </div>
        </div>
        <div className="w-full mb-3">
          <FloatingLabelInput
            type="email"
            label="Enter your email"
            id="email"
            name="email"
            value={form?.email}
            setValue={(val) => setFormData("email", String(val))}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateProfile;
