function Settings() {
  return (
    <>
      <div className="container-fluid">
        {/*Card 01*/}
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title mb-5">AI Preferences</h5>

            <h6 className="card-title">Auto-enable Violetis Write</h6>
            <small>Automatically suggest AI writing assistance</small>

            <hr />

            <h6 className="card-title">Echo Search Voice Activation</h6>
            <small>Enable "Hey Violet" voice wake word</small>

            <hr />

            <h6 className="card-title">Tone Lens Auto-Analysis</h6>
            <small>Analyze tone of incoming emails automatically</small>

            <hr />

            <h6 className="card-title">Pulse Inbox Priority Learning</h6>
            <small>Adapt to your reading patterns over time</small>
          </div>
        </div>

        {/*Card 02*/}
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title mb-5">AI Model Settings</h5>

            <h6 className="card-title m-0 p-0 ">Response Creativity</h6>
            <span className="d-flex justify-content-between mb-4">
              <small>Conservative</small>
              <small>Creative</small>
            </span>

            <h6 className="card-title">Writing Style</h6>
            <select name="" id="" className="form-select mb-4">
              <option value="">Professional</option>
            </select>

            <h6 className="card-title">Language Model</h6>
            <select name="" id="" className="form-select">
              <option value="">GPT-4 Turbo (Recommended)</option>
            </select>
          </div>
        </div>

        {/*Card 03*/}
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title mb-5">Privacy & Data</h5>

            <h6 className="card-title">Store AI Training Data</h6>
            <small>Help improve AI models (anonymous)</small>

            <hr />

            <h6 className="card-title">Local Processing Mode</h6>
            <small>Process sensitive data on device only</small>

            <button className="btn w-100 mt-3" type="button">Clear AI Learning Data</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
