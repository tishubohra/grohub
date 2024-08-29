import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./exper.css"; // Assuming you have your styles in a file named "exper.css"

const categories = [
  { id: 1, name: "Herbs", imageUrl: "https://3.imimg.com/data3/FG/EO/MY-10774892/parsley-plant-500x500.jpg" },
  { id: 2, name: "Flowers", imageUrl: "https://www.syngentaflowers.com/sites/g/files/kgtney851/files/styles/brand_logo/public/image/import/field_full_resolution_image/syngenta-flowers-pim/image/upload/t_d7_highres/v1648844222/70086714/eu/70086714-flower.jpg?itok=PP8oXSlU" },
  { id: 3, name: "Indoor", imageUrl: "https://i.pinimg.com/736x/7b/2e/21/7b2e216d3b2efa5f4b5550a71074f5b5.jpg" },
  { id: 4, name: "Succulents", imageUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680809897-pl2000034473-card2-lg-642f1f9c89648.jpg?crop=1xw:1xh;center,top&resize=980:*" },
  { id: 5, name: "Edible", imageUrl: "https://images.ctfassets.net/ucgi79tscdcj/5QvAV8HvkYi8vD7bq2Bt1Y/6993ad8d53e1c2db66a3b9510aa065e0/Lemon-Tree.png?w=1080&h=1080&fm=webp&q=75" },
];

const CarouselCategory = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isInfoBoxOpen, setInfoBoxOpen] = useState(false);
  const containerRef = useRef(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleExplore = () => {
    // Navigate to the product page
    navigate("/product");
  };

  return (
    <div className="custom-main">
      <div className="custom-carousel-container">
        <div className="custom-category-heading">Shop by Category!</div>
        <div className="custom-categories-container" ref={containerRef}>
          {categories.map((category) => (
            <div
              key={category.id}
              className="custom-category-card"
              onMouseLeave={closeModal}
            >
              <div className="custom-category-content">
                <img src={category.imageUrl} alt={category.name} className="custom-category-image" />
                <div className="custom-category-name">{category.name}</div>
              </div>
              <div className="custom-button-container">
                <button className="custom-button" onClick={handleExplore}>
                  Explore!
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

export default CarouselCategory;
