"use client"
import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function sleep(time) {
  return new Promise((resolve) => {
      setTimeout(resolve, time || 1000);
  });
}

function Carousel({children = [], minGap = 50, carouselItems = [] }) {
  let carouselRef = useRef(null)
  let carouselMainRef = useRef(null)
  let [currentIndex, setCurrentIndex] = useState(0)
  let translateAmount = 0
  let maxIndex = 0

  useEffect(() => {
    const card = carouselRef.current.querySelector(':first-child')
    
    // card.addEventListener("load", () => {
      const refWidth = carouselMainRef.current.clientWidth
      const cardWidth = card.clientWidth
      
      const cardsInView = Math.floor(refWidth / cardWidth)
      const totalGap = refWidth - (cardsInView * cardWidth)
      const gap = (totalGap / cardsInView)
      translateAmount = gap / 2  + cardWidth
      maxIndex = children.length - cardsInView
      console.log("Card Width: " + cardWidth);
      console.log("Total Gap: " + totalGap);
      console.log("Cards in view: " + cardsInView);
  
      console.log("Gap: " + gap);
  
      carouselRef.current.style.gap = gap + "px"
      card.style.marginLeft = gap + "px"

    // });
  }, [])

  useEffect(() => {
    console.log(currentIndex, translateAmount);
    carouselRef.current.style.transform = `translateX(-${(currentIndex * translateAmount)}px)`
  });

  function moveLeft() {
    setCurrentIndex(currentIndex => Math.max(0, currentIndex - 1))
  }
  function moveRight() {
    setCurrentIndex(currentIndex => Math.min(maxIndex, currentIndex + 1))
  }

  return (

    <div  ref={carouselMainRef} className="carousel-main-div">
      <button onClick={moveLeft} className="button-left"  >
        <FontAwesomeIcon icon={faChevronLeft} size="lg"></FontAwesomeIcon>
      </button>
      <button onClick={moveRight} className="button-right"  >
        <FontAwesomeIcon icon={faChevronRight} size="lg"></FontAwesomeIcon>
      </button>
      <div ref={carouselRef} className="carousel-initialized-slides-div">
        {children}
      </div>
    </div>
  );
}

export default Carousel;
