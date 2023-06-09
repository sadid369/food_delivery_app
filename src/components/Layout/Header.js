import mealsImages from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} alt="A Table full of Food" />
      </div>
    </>
  );
}

export default Header;
