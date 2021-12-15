import { TextField, Button, Box } from "@mui/material";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function MiniProject() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <>
      {fields.map((item, index) => (
        <Box sx={{ pb: 4 }} key={item.id}>
          <Controller
            render={({ field }) => (
              <TextField
                id="project-name"
                label="Project Name"
                variant="outlined"
                placeholder="Enter Your Project Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            name={`projects.${index}.projectName`}
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                id="techStack"
                label="Tech Stack"
                multiline
                maxRows={4}
                fullWidth
                placeholder="Your tech stacks"
                margin="normal"
                {...field}
              />
            )}
            name={`projects.${index}.techStack`}
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                id="description"
                label="Decsription"
                multiline
                maxRows={4}
                fullWidth
                placeholder="Project Decsription"
                margin="normal"
                {...field}
              />
            )}
            name={`projects.${index}.description`}
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
              projectName: "",
              techStack: "",
              description: "",
            })
          }
          variant="outlined"
        >
          Add Projects
        </Button>
      </Box>
    </>
  );
}
