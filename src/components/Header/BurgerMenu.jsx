import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxIconHS } from "./HeaderStyled";

const BurgerMenu = () => {
    
    const handleOnBurgerClick = () =>{
        console.log('Burger clicked!');
    }
  return (
    <>
      <button onClick={handleOnBurgerClick} style={{backgroundColor: 'transparent', borderColor: 'transparent', cursor: 'pointer'}}>
        <BoxIconHS className="burgerMenuIcon">
          <SpriteSVG name={"icon-align-justify-tablet-mobile"} />
        </BoxIconHS>
      </button>
    </>
  );
};

export default BurgerMenu;
