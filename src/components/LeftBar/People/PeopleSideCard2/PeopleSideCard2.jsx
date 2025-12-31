function PeopleRecentActivityCard() {
  return (
    <>
      <div className="card pb-4">
        <div className="card-body m-0 p-0">
          <h5 className="mb-5">Recent Activity</h5>

          <div className="mb-2">
            <span className="d-flex align-items-start">
              <h5 className="me-1 lh-1">Sara Chen</h5>
              <small className="lh-1">sent you an email</small>
            </span>
            <small className="lh-1">2 hours ago</small>
          </div>

           <div>
            <span className="d-flex align-items-start">
              <h5 className="me-1">Sara Chen</h5>
              <small className="lh-1">sent you an email</small>
            </span>
            <small className="lh-1">2 hours ago</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleRecentActivityCard;
