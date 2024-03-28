import * as React from 'react'

// Declaration of the different typings of the Component for compatibility with Typescrypt users

interface CarouselReactProps {
photo: any[];
outside?:boolean;
heigthContainer?: string;
widthContainer?: string;
styleContainer?:React.CSSProperties;
styleNavIcon?:React.CSSProperties;
stylePaging?:React.CSSProperties;
reactIconRight?: string;
reactIconLeft?: string;
paging?:boolean
}

declare const CarouselReact: React.FunctionComponent<CarouselReactProps>

export default Carousel