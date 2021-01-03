import React from "react";
import "./about.scss";
import Footer from "../components/footer/footer";

import vet from "../Landing/landingAssets/vet.png";
import licenced from "../Landing/landingAssets/licenced.png";
import established from "../Landing/landingAssets/established.png";
import budget from "../Landing/landingAssets/budget.png";
import satisfaction from "../Landing/landingAssets/satisfaction.png";
import environment from "../Landing/landingAssets/environment.png";

function About() {
  return (
    <>
      <section className="about__us">
        <div className="about__us__container">
          <div className="about__us__container-image"></div>
          <div className="about__us__container-text">
            <h1>Our promise to You</h1>
            <p>
              We here at LandCare offer residential, commercial, and
              subcontracting services to fit your need.
            </p>
            <p>
              We are licensed and insured with trustworthy professionals,
              working to fulfill all your maintenance needs. With over 6 years
              of experience, our goal is to provide quality work and the best
              rates in all central Mass.
            </p>
            <p>
              We stand behind our work and strive towards 100% satisfaction.
            </p>
          </div>
          <h3>What Makes us Unique</h3>
          <div className="section__two__container">
            <div className="section__two__container-group">
              <div>
                <img src={established} alt="established" name="established" />
              </div>

              <p>established in 2014</p>
            </div>
            <div className="section__two__container-group">
              <div>
                <img src={environment} alt="environment" name="environment" />
              </div>

              <p>environment friendly</p>
            </div>
            <div className="section__two__container-group">
              <div>
                <img src={licenced} alt="established" name="established" />
              </div>

              <p>Licenced professionals</p>
            </div>
            <div className="section__two__container-group">
              <div>
                <img src={vet} alt="veterans" name="veterans" />
              </div>

              <p>Veterans owned</p>
            </div>
            <div className="section__two__container-group">
              <div>
                <img
                  src={satisfaction}
                  alt="satisfaction"
                  name="satisfaction guarantee"
                />
              </div>
              <p>Satisfaction Guarantee</p>
            </div>
            <div className="section__two__container-group">
              <div>
                <img src={budget} alt="budget" name="budget friendly" />
              </div>

              <p>Budget friendly</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about__questions">
        <h4>Frequently asked Questions!</h4>
        <div className="about_questions__container">
          <div className="about__questions-group">
            <p className="about__question-question">
              What Areas Do You Serve?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>Landc@re serves all central Mass</p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              Are You Licensed?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>Yes our professionals are licenced and insured!</p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              What Is Your 100% Satisfaction Guarentee?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>
              We want you to love the results. However, if you're not completely
              happy, give us a call within 24 hours and we'll come back to fix
              any errors absolutely free.
            </p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              What Do You Do With The Grass Clippings?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>
              Once the grass is cut, we immediately turn them into mulch. This
              will help to keep your grass healthy, cut down the cost of buying
              mulch from the store, and is less expensive than to bag and
              dispose of them.
            </p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              Are The Chemicals From LandC@re Dangerous To My Kids Or Pets?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>
              If your lawn has been treated with chemicals within the last 24
              hours, it's recommended to keep pets and people off the grass. 24
              hours is usually enough time to be safe, but always ask your
              professional how long you should stay off your lawn each time
              chemicals are applied.
            </p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              Will You Always Send The Same Professional?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>
              There is value in having the same professional working on your
              property due to the trust that is built and them knowing the
              specific needs of your lawn. While we'll try to send the same
              professionals to your property each time, there are times in which
              that isn't possible.
            </p>
          </div>
          <div className="about__questions-group">
            <p className="about__question-question">
              Do I Have To Be At Home During My Service?
              <span className="about__question-icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </p>
            <p>
              You don't need to be at home while your lawn is being serviced.
              However, we do ask that we have access to the area you need
              serviced, and that any pets are kept either indoors or in a
              contained area.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export { About };
