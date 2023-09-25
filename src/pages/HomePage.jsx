import { Link } from "react-router-dom";
import { BlueButton, WhiteButton, YellowButton } from "../style/Global.styled";
import { Button, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <BlueButton component={Link} display={{ xs: "none", sm: "block" }}>
        Hallo
      </BlueButton>
      <Button variant="contained">New Button</Button>
      <WhiteButton> WhiteButton</WhiteButton>

      <YellowButton width={300}>HALLLLLLLLLL</YellowButton>

      <Typography variant="h1">Автоцивілка без зайвих рухів</Typography>
    </>
  );
};

export default HomePage;
