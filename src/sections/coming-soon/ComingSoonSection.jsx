import CountDown from "./CountDown/CountDown";

const ComingSoonSection = () => {
  return (
    <>
      <section className="coming-soon-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="coming-soon_content-wrapper">
                {/* <CountDown /> */}

                <h2 className="heading-md text-black">
                  We're Curently Under Maintance!
                </h2>
                <div className="coming-soon_newsletter">
                  <div className="newsletter-form-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <button className="btn-hod rounded-pill">
                      Get Notified
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoonSection;
