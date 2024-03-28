import React, { useState } from "react"
import * as Fa from 'react-icons/fa'
import * as parms from './parameters'

function CarouselReact ({photo ,outside, heigthContainer, widthContainer, styleContainer, styleNavIcon, stylePaging, reactIconRight, reactIconLeft}){

    const IconRight = Fa[reactIconRight] ?? Fa.FaAngleRight
    const IconLeft = Fa[reactIconLeft] ?? Fa.FaAngleLeft
    const lengthphoto = photo.length
        // Using the useState hook to manage the current state index of the picture
    const [currentIndex, setCurrentIndex] = useState(0)

    // Function to handle the click on the back button
    const handlePrevClick = () => {
        // Using the update state function to decrement the current index
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lengthphoto - 1))
    }

    // Function to manage the click on the next button
    const handleNextClick = () => {
        // Using the update state function to increment the current index
        setCurrentIndex((prevIndex) => (prevIndex < lengthphoto - 1 ? prevIndex + 1 : 0))
    }

    // Style for outside navigation
    const container = outside ? {...parms.styleCarousel.container,...{margin:'0 2rem 0 2rem'}} : {...parms.styleCarousel.container}
    const mergedHeight = heigthContainer ?? parms.styleCarousel.container.height
    const mergedContainer = {
        ...container,
        height : mergedHeight
    }
    const navStyle = outside ? {...parms.styleCarousel.navigation,...{width:'100%'}} : {...parms.styleCarousel.navigation}
    const numberStyle = outside ? {...parms.styleCarousel.number,...{top:'0.rem'}} : {...parms.styleCarousel.number}
    const mergedParentContainer ={
        ...parms.styleCarousel.parentContainer,
        width: widthContainer ?? parms.styleCarousel.parentContainer.width,
        ...styleContainer
    }
    const mergedNavIcon = {
        ...parms.styleCarousel.navIcon,
        top: outside ? (parseInt(mergedHeight)/2)+'rem': (parseInt(mergedHeight)/2+1)+'rem',
        ...styleNavIcon
    }
    const mergedStylePaging = {
        ...parms.styleCarousel.number,
        ...numberStyle,
        ...stylePaging
    }

    if (lengthphoto > 1) {
        return (
            <div style={mergedParentContainer}>
                    <div style={navStyle}>
                        {/*Added previous and next navigation buttons*/}
                        <div onClick={handlePrevClick} style={mergedNavIcon}><IconLeft/></div>
                        <div onClick={handleNextClick} style={mergedNavIcon}><IconRight/></div>
                    </div>
                <div style={mergedContainer}>
                    {/*Mapping through the array of images to display them based on the current index*/}
                    {photo.map((value, index) => {
                        // Condition to determine if this image should be shown or hidden
                        const setClass = index === currentIndex ? parms.styleCarousel.show :parms.styleCarousel.hidden 
                        return (
                            <img style={{...parms.styleCarousel.image,...parms.styleCarousel.position,...setClass}} src={value} alt="photos" key={index} />
                        )
                    })}
                </div>
                <div style={mergedStylePaging}>
                    {/*Displaying the current frame number in relation to the total number of frames*/}
                    {currentIndex + 1} / {lengthphoto}
                    </div>
            </div>
        )
    } else {
        // If only one image is present, return only this image
        return  (
            <div style={mergedParentContainer}>
                <div style={mergedContainer}>
                    <img style={{...parms.styleCarousel.image,...parms.styleCarousel.position,...parms.styleCarousel.show}} src={photo} alt="photos" key={0} />
                </div>
            </div>
            )
    }
}
export default CarouselReact