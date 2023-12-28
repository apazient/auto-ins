import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { theme } from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
<<<<<<< Updated upstream
  <Provider store={store}>
    {/* <BrowserRouter basename="/"> */}
    <BrowserRouter basename="/auto-ins">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
=======
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename="/auto-ins">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>
>>>>>>> Stashed changes
  // </React.StrictMode>
);
