import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSlider({ location }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos?query=${location}&client_id=ZxlkZf05QeNsiLkFTJEjiQVenewla17zcX-XE5dMpsI");
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    if (location){
      fetchImages();
    };
  }, [location]);

  return (
    <div className="image-slider">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.urls.small} alt={img.alt_description || "Location-based"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;