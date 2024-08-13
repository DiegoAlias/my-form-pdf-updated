import React from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const newTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          borderWidth: "1px",
          border: "1px solid", // Estilos de la caja exterior
          margin: "20px 0px 20px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "10px", // Espaciado interno del campo de texto
          borderRadius: "10px", // Bordes redondeados internos
          fontSize: "20px", // Tamaño del texto
        },
      },
    },
  },
});

export const DateInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={newTheme}>
        <DatePicker
          defaultValue={dayjs("2022-04-17")}
          views={["year", "month", "day"]}
          format="DD/MM/YYYY"
          renderInput={(params) => <TextField {...params} />}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};
