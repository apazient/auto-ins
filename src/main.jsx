// import { CssBaseline, ThemeProvider } from "@mui/material";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { theme } from "./theme.js";
// import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// import HomePage from "./pages/HomePage.jsx";
// import PricesPage from "./pages/PricesPage.jsx";
// import FormPage from "./pages/FormPage.jsx";

// const router = createBrowserRouter([
//   {
//   path: "/auto-ins/",
//   element: <App/>,
//   children: [{
//     path: "/auto-ins/",
//     element: <HomePage/>,
//   },
//   {
//     path: "/auto-ins/prices",
//     element: <PricesPage/>,
//   },
//   {
//     path: "/auto-ins/form",
//     element: <FormPage/>,
//   }]
// }
// ])

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <RouterProvider router={router}/>
//       {/* <App /> */}
//     </ThemeProvider>
//   // </React.StrictMode>
// );

import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter basename="/auto-ins">
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
