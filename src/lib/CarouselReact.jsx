import React, { useState } from "react"
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import * as parms from './parameters'

function CarouselReact ({photo, lenghtPhoto, outside}){
         // Using the useState hook to manage the current state index of the picture
        const [currentIndex, setCurrentIndex] = useState(0)
    
        // Function to handle the click on the back button
        const handlePrevClick = () => {
            // Using the update state function to decrement the current index
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lenghtPhoto - 1))
        }
    
        // Function to manage the click on the next button
        const handleNextClick = () => {
            // Using the update state function to increment the current index
            setCurrentIndex((prevIndex) => (prevIndex < lenghtPhoto - 1 ? prevIndex + 1 : 0))
        }

        // Style for outside navigation
        const parentContainer = outside ? {padding:'2rem'}: {padding:'0'}
        const navStyle = outside ? {...parms.styleCarousel.navigation,...{width:'120%', left:'-10%'}} : {...parms.styleCarousel.navigation}
        const numberStyle = outside ? {...parms.styleCarousel.number,...{bottom:'-10%'}} : {...parms.styleCarousel.number}
    
        if (lenghtPhoto > 1) {
            return (
                <div style={parentContainer}>
                    <div style={parms.styleCarousel.container}>
                        {/*Mapping through the array of images to display them based on the current index*/}
                        {photo.map((value, index) => {
                            // Condition to determine if this image should be shown or hidden
                            const setClass = index === currentIndex ? parms.styleCarousel.show :parms.styleCarousel.hidden 
                            return (
                                <img style={{...parms.styleCarousel.image,...parms.styleCarousel.position,...setClass}} src={value} alt="photos logement" key={index} />
                            );
                        })}
                        <div style={navStyle}>
                            {/*Added previous and next navigation buttons*/}
                            <div onClick={handlePrevClick} style={parms.styleCarousel.navIcon}><FaAngleLeft/></div>
                            <div onClick={handleNextClick} style={parms.styleCarousel.navIcon}><FaAngleRight/></div>
                        </div>
                        <div style={numberStyle}>
                        {/*Displaying the current frame number in relation to the total number of frames*/}
                        {currentIndex + 1} / {lenghtPhoto}
                        </div>
                    </div>
                </div>
            )
        } else {
            // If only one image is present, return only this image
            return  (
                <div style={parentContainer}>
                    <div style={parms.styleCarousel.container}>
                        <img style={`${parms.styleCarousel.image} ${parms.styleCarousel.position} ${parms.styleCarousel.show}`} src={photo} alt="photos logement" key={0} />
                    </div>
                </div>
                )
        }
}
export default CarouselReact