import { TextField, Button, Box } from "@mui/material";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function SkillsSection() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <>
      {fields.map((item, index) => (
        <Box sx={{ pb: 4 }} key={item.id}>
          <Controller
            render={({ field }) => (
              <TextField
                id="skill"
                label="Skills"
                variant="outlined"
                placeholder=" Your Skills"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            name={`skills.${index}.skill`}
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
          onClick={() => append({ skill: "" })}
          variant="outlined"
        >
          Add Skills
        </Button>
      </Box>
    </>
  );
}
