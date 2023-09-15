import brandImage from "../../assets/logo.png";
const Brand = (props) => {
  return (
    <div>
      <a className="navbar-brand" href="#">
        <img
          src={brandImage}
          alt="logo.MaiLanguageLab.1"
          className="iconImage"
        />
      </a>
      <p>{props.BrandName}</p>
    </div>
  );
};
export default Brand;
