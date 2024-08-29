import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css";
import "./Carousel.css";

const categories = [
  { id: 1, name: "Herbs", imageUrl: "https://3.imimg.com/data3/FG/EO/MY-10774892/parsley-plant-500x500.jpg" },
  { id: 2, name: "Flowers", imageUrl: "https://www.syngentaflowers.com/sites/g/files/kgtney851/files/styles/brand_logo/public/image/import/field_full_resolution_image/syngenta-flowers-pim/image/upload/t_d7_highres/v1648844222/70086714/eu/70086714-flower.jpg?itok=PP8oXSlU" },
  { id: 3, name: "Indoor", imageUrl: "https://i.pinimg.com/736x/7b/2e/21/7b2e216d3b2efa5f4b5550a71074f5b5.jpg" },
  { id: 4, name: "Succulents", imageUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680809897-pl2000034473-card2-lg-642f1f9c89648.jpg?crop=1xw:1xh;center,top&resize=980:*" },
  { id: 5, name: "Edible", imageUrl: "https://images.ctfassets.net/ucgi79tscdcj/5QvAV8HvkYi8vD7bq2Bt1Y/6993ad8d53e1c2db66a3b9510aa065e0/Lemon-Tree.png?w=1080&h=1080&fm=webp&q=75" },
];

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className = "main"> 
    <div className="carousel-container">
      <div className="category-heading">Shop by Category</div>
      <Swiper slidesPerView={5} spaceBetween={10}>
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="swiper-slide">
            <div className="category-card" onClick={() => searchCategory(category.name)}>
              <img src={category.imageUrl} alt={category.name} className="category-image" />
              <div className="category-name">{category.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default CarouselCategory;
