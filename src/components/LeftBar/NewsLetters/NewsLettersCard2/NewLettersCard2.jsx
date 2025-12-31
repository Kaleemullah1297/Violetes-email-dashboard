function NewLetterCard2() {
  return (
    <>
      <div className="card pb-4">
        <div className="card-body m-0 p-0">
          <h5 className="card-title mb-5">Quick Actions</h5>

          <button className="btn btn-primary w-100 text-start mb-3">
            Mark All Read
          </button>
          <button className="btn btn-outline-primary w-100 text-start">
            Bulk Unsubscribe
          </button>
        </div>
      </div>

      <div className="card mt-5 p-4">
        <div className="card-body p-0 m-0">
          <h6>Ai Tip</h6>
          <small>
            Use Pulse Inbox to <br />
            automatically categorize and
            <br /> prioritize your newsletters.
          </small>
        </div>
      </div>
    </>
  );
}

export default NewLetterCard2;
