import { BlueButton, WhiteButton, YellowButton } from "./style/Global.styled";
import { Button, Link, Typography } from "@mui/material";

function App() {
  return (
    <>
      <BlueButton component={Link} display={{ xs: "none", sm: "block" }}>
        Hallo
      </BlueButton>
      <Button variant="contained">New Button</Button>
      <WhiteButton> WhiteButton</WhiteButton>

      <YellowButton width={300}>HALLLLLLLLLL</YellowButton>
      <Typography variant="h1">Автоцивілка без зайвих рухів</Typography>
    </>
  );
}

export default App;
