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
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import FormButtons from "../components/FormButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForms } from "../context/FormsContext";

const schema = yup.object({
  gender: yup.string().required(),
  birthDate: yup.string().required(),
  firstname: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  postalCode: yup
    .number()
    .typeError("Postal Code must be a number")
    .test("len", "Must not exceed 5 digits", (val) => (val ? val.toString()?.length <= 5 : true))
    .required(),
});

export type ProfileFields = yup.InferType<typeof schema>;

export default function Profile() {
  const { setProfile, setCurrentStep } = useForms();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<ProfileFields>({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit = async (data: ProfileFields) => {
    setProfile(data);
    setCurrentStep(2);
  };

  return (
    <Stack>
      <Typography variant="h2" fontSize={24} fontWeight="600">
        Vos informations personnelles
      </Typography>
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
                  format="DD/MM/YYYY"
                  onChange={(date: Date | null) => field.onChange(date?.toISOString())}
                  slotProps={{ textField: { size: "small" } }}
                />
              )}
            />
            {errors.birthDate && (
              <Typography color="#f44336">{errors.birthDate.message}</Typography>
            )}
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
          {errors.firstname && <Typography color="#f44336">{errors.firstname.message}</Typography>}
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Nom de famille"
            {...register("name")}
          />
          {errors.name && <Typography color="#f44336">{errors.name.message}</Typography>}
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Adresse e-mail"
            {...register("email")}
          />
          {errors.email && <Typography color="#f44336">{errors.email.message}</Typography>}
        </Grid>
        <Grid item xs={5.5}>
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="Code postal"
            type="number"
            {...register("postalCode")}
          />
          {errors.postalCode && (
            <Typography color="#f44336">{errors.postalCode.message}</Typography>
          )}
        </Grid>
      </Grid>
      <Box alignSelf="end">
        <FormButtons disabledNextStep={!isValid} onSubmit={handleSubmit(onSubmit)} />
      </Box>
    </Stack>
  );
}
