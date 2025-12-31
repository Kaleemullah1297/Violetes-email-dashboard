function PeopleContactStatsCard() {
  return (
    <>
      <div className="card pb-4">
        <div className="card-body m-0 p-0">
          <h5 className="card-title mb-5">Contact Stats</h5>

          <span className="d-flex justify-content-between align-items-center">
            <p >Total Contacts</p>
            <h6>127</h6>
          </span>

          <span className="d-flex justify-content-between align-items-center">
            <p >Frequent</p>
            <h6>42</h6>
          </span>

          <span className="d-flex justify-content-between align-items-center">
            <p >Groups</p>
            <h6>8</h6>
          </span>
        </div>
      </div>
    </>
  );
}

export default PeopleContactStatsCard;
