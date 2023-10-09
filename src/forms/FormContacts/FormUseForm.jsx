// import { useLocation } from "react-router-dom";
import { FormContainer, InputS } from "../../style/Global.styled";
import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import { BtnBoxS, InputBoxS } from "./FormContactsStyled";
import { Controller, useForm } from "react-hook-form";


const FormContacts = () => {
  // const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("sm")}`);

 

  // const HookForm = () = {
  //   const { register, handleSubmit, formState:{errors}, formState} = useForm()
  //   mode: "onSubmit",
  //   defaultValues: {
  //     email: '',
  //     phone: ''
  //   }
  // }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("FormData", data);
    
  };
  const inputStyle = {
    color: "blue", // Set the text color to blue
  };

  return (
    <FormContainer>
      <h2 style={{ color: "black" }}>FormContacts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBoxS>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
            //  <InputS></InputS> 
              <InputS
                {...field}
                 label="Email"
                 className="qweqwe"
                // variant="outlined"
                fullWidth
                // color="secondary"
                //  error={!!errors.email}
                //  helperText={errors.email?.message}
              />
              // <TextField
              //   {...field}
              //    label="Email"
              //   // variant="outlined"
              //   fullWidth
              //   // color="secondary"
              //   //  error={!!errors.email}
              //   //  helperText={errors.email?.message}
              //   InputProps={{ style: inputStyle }}
              // />
            )}
          />
          <p style={{ color: "black" }}>
            *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
            ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
          </p>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Phone is required",
              pattern: {
                // value: /^[0-9]{10}$/i,// 10 цифр без ввода плюса
                value: /^[+0-9()\s-]*$/, // Теперь валидация разрешит номера телефонов с разными символами, включая +, 0-9, (), -, и пробелы.
                message: "Invalid phone number",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                variant="outlined"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                InputProps={{ style: inputStyle }}
              />
            )}
          />
        </InputBoxS>
        <BtnBoxS>
          {isLargeScreen ? (
            <>
              <BtnBack />
              <BtnSubmit />
            </>
          ) : (
            <>
              <BtnSubmit />
              <BtnBack />
            </>
          )}
        </BtnBoxS>
      </form>
    </FormContainer>
  );
};

export default FormContacts;
