function Card1({ cardTitle, rightContent }) {
  return (
    <>
      <div className="card pb-5">
        <div className="card-body m-0 p-0">
          <div className="d-flex align-items-baseline justify-content-between">
            <h4 className="card-title">{cardTitle}</h4>
            {rightContent}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
