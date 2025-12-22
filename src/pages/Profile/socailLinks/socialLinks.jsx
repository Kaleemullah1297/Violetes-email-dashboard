import "./SocialLinks.css";
import { useState } from "react";

function SocialLinks() {
  const [linkedIn, setlinkedIn] = useState(
    "https://linkedin.com/in/yourname or just yourname"
  );
  const [twitter, setTwitter] = useState("https://twitter.com/yourname");
  const [gitHub, setgitHub] = useState("https://github.com/yourname");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ linkedIn, twitter, gitHub });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="social-links px-5 pb-5 m-0 p-0 card me-1">
          {/*Social Links Alert*/}
          <div className="social-links-alert ps-4 pb-3 pt-3 mb-2 d-flex align-items-center">
            <i className="bi bi-globe fs-4 me-3"></i>
            <span>
              <h5 className="card-title fs-5 mb-0">Social Links</h5>
              <small>Connect your professional networks</small>
            </span>
          </div>

          {/*Social Links Header*/}
          <span className="social-links-header">
            <h5 className="card-title mb-4 fs-4">Social Links</h5>
            <small>
              Connect your social media profiles and professional networks
            </small>
          </span>

          {/*Social Links Main Body*/}
          <div className="social_links_card card mb-5 mt-4 ">
            <div className="card-body mb-5">
              {/*Main Body title*/}
              <span className="d-flex mb-5">
                <i className="bi bi-globe fs-5 me-3"></i>
                <h5 className="card-title">Professional Networks</h5>
              </span>

              {/*Body 1*/}
              <div className="card-body mb-3">
                {/*First Input Field*/}
                <div className="mb-3">
                  <div className="social-links align-items-center mb-2">
                    <i className="social-links-linkedIn fa-brands fa-linkedin text-primary fs-5 me-2"></i>
                    <label htmlFor="linkedIn" className="form-label">
                      LinkedIn
                    </label>
                  </div>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-plus me-3"></i>
                    <input
                      type="text"
                      value={linkedIn}
                      onChange={(event) => setlinkedIn(event.target.value)}
                      className="form-control"
                    />
                  </span>
                </div>

                {/*Second Input Field*/}
                <div className="mb-3">
                  <div className="social-links align-items-center mb-2">
                    <i className="social-links-linkedIn fa-brands fa-x text-primary fs-5 me-2"></i>
                    <label htmlFor="twitter" className="form-label">
                      Twitter / X
                    </label>
                  </div>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-plus me-3"></i>
                    <input
                      type="text"
                      value={twitter}
                      onChange={(event) => setTwitter(event.target.value)}
                      className="form-control"
                    />
                  </span>
                </div>

                {/*Third Input Field*/}
                <div className="mb-3">
                  <div className="social-links align-items-center mb-2">
                    <i className="social-links-linkedIn fa-brands fa-github text-primary fs-5 me-2"></i>
                    <label htmlFor="github" className="form-label">
                      GitHub
                    </label>
                  </div>
                  <span className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-plus me-3"></i>
                    <input
                      type="text"
                      value={gitHub}
                      onChange={(event) => setgitHub(event.target.value)}
                      className="form-control"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*Social Links Footer*/}
          <div className="social-links-footer ps-4 pb-3 pt-3 mb-2 d-flex">
            <i className="bi bi-globe fs-5 me-3"></i>
            <span>
              <p className="card-title fs-5 mb-0">Privacy Note</p>
              <small>
                Your social links will be visible to your contacts and in your
                email signature when enabled. You can control visibility in
                Display Settings.
              </small>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default SocialLinks;
