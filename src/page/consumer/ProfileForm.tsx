import { useEffect, useState } from "react";
import Heading from "../../components/common/Heading";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import { UserProfile } from "../../lib/type";
import PageLayout from "../../layout/PageLayout";
import FormLayout from "../../layout/FormLayout";
import { useParams } from "react-router-dom";

const initialData: UserProfile = {
  name: "",
  email: "",
  gender: "Male",
  user: "",
};

const ProfileForm = () => {
  const [createNew, setCreateNew] = useState<boolean>(true);
  const [form, setForm] = useState<UserProfile>(initialData);
  const params = useParams();

  useEffect(() => {
    if (params?.profileId) getProfileData();
  }, [params]);

  const getProfileData = async () => {
    setCreateNew(false);
  };

  const setFormData = (key: string, value: string) =>
    setForm({ ...form, [key]: value });

  return (
    <PageLayout>
      <FormLayout>
        <>
          <Heading>{createNew ? "Create your profile" : "Edit profile"}</Heading>
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
        </>
      </FormLayout>
    </PageLayout>
  );
};

export default ProfileForm;
