import React from "react";
import person1 from "../assets/img/feel-1.jpg";
import person2 from "../assets/img/feel-2.jpg";
import person3 from "../assets/img/feel-3.jpg";

export default function Seeding() {
  return (
    <section className="seeding">
      <h3 className="title">User Comment</h3>
      <div
        id="carouselReviewers"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-indicators">
          <div
            data-target="#carouselReviewers"
            data-slide-to={0}
            className="img-info active"
          >
            <img src={person1} alt="img-info" />
            <div className="overflow"></div>
          </div>
          <div
            data-target="#carouselReviewers"
            data-slide-to={1}
            className="img-info"
          >
            <img src={person2} alt="img-info" />
            <div className="overflow"></div>
          </div>

          <div
            data-target="#carouselReviewers"
            data-slide-to={2}
            className="img-info"
          >
            <img src={person3} alt="img-info" />
            <div className="overflow"></div>
          </div>
        </div>
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <q className="content">
              <i>
                E-learning means learning system that we can obtain through the
                internet using an electronic device. E-learning system allows
                you to create e-learning content, organize it into courses,
                deliver the content etc. E-learning has many benefits -
                Flexibility - People can learn from it whenever they want, Good
                virtual communication and collaboration, Easily tracks learner
                progress and performance. Can easily go back and review
                lectures. Better time management, Learning system allows
                educational institute to create multimedia learning features and
                so on.
              </i>
            </q>
            <div className="info-user">
              <span className="name">_Vo Hoang Vu</span>, FE Developer
            </div>
          </div>
          <div className="carousel-item ">
            <q className="content">
              <i>
                Less is more applies to eLearning too. More content, more flashy
                technology, and more ideas stuffed into a single presentation is
                a sure recipe for disaster. Instead of drowning students in a
                sea of content, why not keep stick to one idea and help them
                understand it deeply?
              </i>
            </q>
            <div className="info-user">
              <span className="name">_Long Black</span>, UI-UX Designer
            </div>
          </div>
          <div className="carousel-item">
            <q className="content">
              <i>
                E-learning platforms can be adapted by institutions to enhance
                teaching learning process. One major footstep in this area is
                MOOC which provide quality e-learning from eminent experts
                without any cost.
              </i>
            </q>
            <div className="info-user">
              <span className="name">_Jenny Kita</span>, CEO
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselReviewers"
          role="button"
          data-slide="prev"
        >
          <span className="prev">{"<"}</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselReviewers"
          role="button"
          data-slide="next"
        >
          <span className="next">{">"}</span>
        </a>
      </div>
    </section>
  );
}
