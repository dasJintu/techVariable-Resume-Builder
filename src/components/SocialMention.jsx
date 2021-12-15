import { TextField, Button, Box } from "@mui/material";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function SocialMention() {
  const { control } = useFormContext();

  const { fields, append } = useFieldArray({
    control,
    name: "socials",
  });

  return (
    <>
      {fields.map((item, index) => (
        <Box sx={{ pb: 4 }} key={item.id}>
          <Controller
            render={({ field }) => (
              <TextField
                id="social"
                label="Social Media"
                variant="outlined"
                placeholder="Social Medial Link"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            name={`socials.${index}.social`}
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
          onClick={() => append({ social: "" })}
          variant="outlined"
        >
          Add Social Mention links
        </Button>
      </Box>
    </>
  );
}
