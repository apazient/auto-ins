import { Skeleton } from "@mui/material";

export const SkeletonStyled = () => {
  return (
    <Skeleton
      animation="wave"
      width={"100%"}
      hight={70}
      sx={{ bgcolor: "#6082F8", borderRadius: 16 }}
    />
  );
};

export default Skeleton;
