function TopCardComponent({cardTitle}) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body m-0 p-0">
          <h5 className="card-title">{cardTitle}</h5>
        </div>
      </div>
    </>
  );
}

export default TopCardComponent;
