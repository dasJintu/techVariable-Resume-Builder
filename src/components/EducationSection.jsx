import Button from "@mui/material/Button";
import { TextField, Box } from "@mui/material";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function EducationSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <>
      {fields.map((item, index) => (
        <Box sx={{ pb: 4 }} key={item.id}>
          <Controller
            render={({ field }) => (
              <TextField
                id="course-name"
                label="Name of Course"
                variant="outlined"
                placeholder="Enter Your Course Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            name={`education.${index}.courseName`}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                id="completion-year"
                label="Completion year"
                variant="outlined"
                placeholder="Course completion year"
                fullWidth
                type="number"
                margin="normal"
                {...field}
              />
            )}
            name={`education.${index}.completionYear`}
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                id="college-name"
                label="College Name"
                variant="outlined"
                placeholder="Enter Your College Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            name={`education.${index}.collegeName`}
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                id="percent"
                label="Total percentage"
                variant="outlined"
                placeholder="Total percentage"
                fullWidth
                type="number"
                margin="normal"
                {...field}
              />
            )}
            name={`education.${index}.percent`}
            control={control}
          />
          <Button startIcon={<DeleteIcon />} onClick={() => remove(index)}>
            Delete
          </Button>
        </Box>
      ))}

      <Box
        sx={{
          my: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          startIcon={<AddIcon />}
          onClick={() =>
            append({
              courseName: "",
              completionYear: "",
              collegeName: "",
              percent: "",
            })
          }
          variant="outlined"
        >
          Add Education
        </Button>
      </Box>
    </>
  );
}
