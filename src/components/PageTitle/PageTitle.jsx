const PageTitle = (props) => {
  return (
    <h1 className="mt-5 fw-bold text-primary">
      {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
    </h1>
  );
};

export default PageTitle;
