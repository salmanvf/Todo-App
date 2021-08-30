const Spinner = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
