import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function ProfileSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
        name="firstName"
        control={control}
        rules={{ required: "First name is required" }}
        defaultValue=""
      />

      <Controller
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
        name="lastName"
        control={control}
        rules={{ required: "Last name is required" }}
        defaultValue=""
      />

      <Controller
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            placeholder="Phone Number"
            fullWidth
            type="number"
            margin="normal"
            {...field}
          />
        )}
        name="phoneNumber"
        control={control}
        rules={{
          required: "Phone number is required",
        }}
        defaultValue=""
      />

      <Controller
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            multiline
            maxRows={4}
            fullWidth
            placeholder="Your Address"
            margin="normal"
            {...field}
          />
        )}
        name="address"
        control={control}
        defaultValue=""
      />

      <Controller
        render={({ field }) => (
          <TextField
            id="image"
            variant="outlined"
            fullWidth
            // error={!!errors.image}
            // helperText={errors.image?.message}
            type="file"
            margin="normal"
            name="image"
            {...field}
          />
        )}
        name="image"
        // rules={{ required: "Profile Photo is required" }}
        control={control}
        defaultValue=""
      />
    </>
  );
}
