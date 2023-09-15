const PageTitle = ({ title = "Welcome" }) => {
  return (
    <div className="container pageTitle">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
