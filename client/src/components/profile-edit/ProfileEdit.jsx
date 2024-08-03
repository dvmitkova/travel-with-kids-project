import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import UserCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm } from "../../hooks/useForm";
import { getUserDetails, updateProfile } from "../../api/auth-api"; // Adjust import if needed
import { countries } from "../../utils/countries";

const initialValues = {
  about: "",
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  profilePicture: "",
};

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(initialValues);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getUserDetails();
        setProfileData(data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchProfileData();
  }, []);

  const initialFormValues = useMemo(
    () => Object.assign({}, initialValues, profileData),
    [profileData]
  );

  const { changeHandler, submitHandler, values, setValues } = useForm(
    initialFormValues,
    async (values) => {
      const isConfirmed = confirm("Are you sure you want to update your profile?");
      if (isConfirmed) {
        try {
          await updateProfile(values);
          navigate("/user/profile"); // Redirect to profile page
        } catch (error) {
          console.error("Failed to update profile:", error);
        }
      }
    }
  );

  useEffect(() => {
    setValues(initialFormValues);
  }, [initialFormValues, setValues]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setValues((prevValues) => ({
        ...prevValues,
        profilePicture: fileUrl,
      }));
    }
  };

  return (
    <div className="flex flex-row justify-center items-start min-h-screen">
      <Card sx={{ width: "100%", maxWidth: 600, margin: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#083344" }}
          >
            Edit Your Profile
          </Typography>
          <form onSubmit={submitHandler} className="space-y-4 mt-8">
            <TextField
              label="About"
              name="about"
              value={values.about}
              onChange={changeHandler}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email Address"
              name="email"
              value={values.email}
              onChange={changeHandler}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Country"
              name="country"
              value={values.country}
              onChange={changeHandler}
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            >
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </TextField>
            <div className="flex items-center space-x-2">
              {values.profilePicture ? (
                <img
                  src={values.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
                />
              ) : (
                <UserCircleIcon sx={{ fontSize: 40, color: "#a8a29e" }} />
              )}
              <Button
                variant="contained"
                component="label"
                sx={{ backgroundColor: "#083344", color: "#fff" }}
              >
                Change Profile Picture
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                type="button"
                onClick={() => setValues(initialFormValues)}
                sx={{ color: "#083344" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#083344", color: "#fff" }}
              >
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}