import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  Box,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import FormButtons from "../components/FormButtons";

export default function Profile() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(isValid);
  return (
    <Stack>
      <Grid
        container
        gap={3}
        justifyContent={"space-between"}
        sx={{ backgroundColor: "#80808026", borderRadius: 10, m: 2, p: 5 }}
      >
        <Grid item xs={5.5}>
          <FormControl>
            <FormLabel sx={{ color: "white", ["&.Mui-focused"]: { color: "white" } }}>
              Genre
            </FormLabel>
            <RadioGroup row defaultValue="male" name="radio-buttons-group">
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: "white",
                    }}
                    {...register("gender")}
                  />
                }
                label="Homme"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "white",
                    }}
                    {...register("gender")}
                  />
                }
                label="Femme"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
          <FormControl fullWidth>
            <FormLabel sx={{ color: "white", pb: 1, ["&.Mui-focused"]: { color: "white" } }}>
              Date de naissance
            </FormLabel>
            <Controller
              control={control}
              name="birthDate"
              render={({ field }) => (
                <DatePicker
                  onChange={(date) => field.onChange(date.toISOString())}
                  value={field.value}
                  slotProps={{ textField: { size: "small" } }}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            color="primary"
            fullWidth
            variant="filled"
            size="small"
            label="Prénom"
            {...register("firstname")}
          />
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Nom de famille"
            {...register("name")}
          />
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Adresse e-mail"
            {...register("email")}
          />
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Code postal"
            {...register("postalCode")}
          />
        </Grid>
      </Grid>
      <Box alignSelf="end">
        <FormButtons disabledNextStep={!isValid} onSubmit={handleSubmit(onSubmit)} />
      </Box>
    </Stack>
  );
}
