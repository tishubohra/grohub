import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./exper.css"; // Assuming you have your styles in a file named "exper.css"

const categories = [
  { id: 1, name: "Herb Expert: Kokila Modi", imageUrl: "https://img.freepik.com/premium-photo/woman-indian-farmer-woman-happy-field-generate-ai_98402-34207.jpg", message: "" },
  { id: 2, name: "Indoor Plant Expert: Joshifa", imageUrl: "https://npr.brightspotcdn.com/dims4/default/a79a9c2/2147483647/strip/true/crop/6000x3695+0+0/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa9%2F41%2F4b677c534483ac4ee5d726f94bf8%2F9-5-sierra-water-houseplants.JPG", message: "" },
  { id: 3, name: "Edible Plant Expert: Ramesh", imageUrl: "https://media.licdn.com/dms/image/C5112AQHUDs9LHYMUiA/article-cover_image-shrink_600_2000/0/1564994416603?e=2147483647&v=beta&t=EIRiS7i8Czr50ok6RANE9BjgW-sk-uuXiwv-4sgY8k4", message: "" },
  { id: 4, name: "Flower Expert: Romen", imageUrl: "https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dwcfc59842/images/articles/cut-flowers/cool-flowers/lisa-mason-ziegler-header.jpg", message: "" },
  { id: 5, name: "Succulents Expert: Emario", imageUrl: "https://img.freepik.com/free-photo/middle-aged-asian-farmer-man_1150-53993.jpg", message: "" },
];

const Exper = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isInfoBoxOpen, setInfoBoxOpen] = useState(false);
  const containerRef = useRef(null);
  const [showpopover, setshowpopover] = useState(true);
  const [dontshowagain, setdontshowagain] = useState(false);

  const closePopover = () => {
    setdontshowagain(true);
    setshowpopover(false);
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKnowMe = (event) => {
    event.preventDefault(); // Prevent the default navigation behavior

    Swal.fire("Hey you, Meet our experts! They are here to Guide you!");

    // Optionally, you can open the info box here
    setInfoBoxOpen(true);
  };

  return (
    <div className="custom-main">
      <div className="custom-carousel-container">
        <div className="custom-category-heading">Meet Our Experts!</div>
        <div className="custom-categories-container" ref={containerRef}>
          {categories.map((category) => (
            <div
              key={category.id}
              className="custom-category-card"
              onMouseLeave={closeModal}
              onClick={() => navigate(`/contact?category=${category.name}`)}
            >
              <div className="custom-category-content">
                <img src={category.imageUrl} alt={category.name} className="custom-category-image" />
                <div className="custom-category-name">{category.name}</div>
              </div>
              <div className="custom-button-container">
                <button className="custom-button" onClick={handleKnowMe} disabled={!showpopover}>
                  Know me!
                </button>
                {isInfoBoxOpen && (
                  <div className="info-box">
                    {/* Placeholder text, you can replace this with your actual information */}
                    Additional information about {category.name}.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="custom-modal" onClick={closeModal}>
          <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="custom-close" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exper;
