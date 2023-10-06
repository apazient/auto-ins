import { YellowButton } from "../../style/Global.styled";

const BtnSubmit = () => {
  const handleOnSubmitClick = () => {
    console.log("Pressed handleOnSubmitClick");
  };
  return (
    <>
      <YellowButton type="submit" onClick={handleOnSubmitClick}>
        Підтвердити
      </YellowButton>
    </>
  );
};

{/* <Link state={{from: location}} to="/form"  style={{ color: "lime" }}>
        FormPage
      </Link> */}
export default BtnSubmit;

