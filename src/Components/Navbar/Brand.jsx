import brandImage from "../../assets/logo.png";
const Brand = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={brandImage} alt="logo.MaiLanguageLab.1" className="iconImage" />
    </a>
  );
};
export default Brand;
