# Carousel React components created using `create-react-app` by SW49GO

## Presentation :
This is a reusable React component that allows you to display a customizable Carousel in your application.

The component is TypeScript compatible and includes a type definition file (CarouselReact.d.ts) for an improved development experience. In a TypeScript project, the TypeScript compiler will automatically use this definition file.

### Examples Custom style :
<img src="https://raw.githubusercontent.com/SW49GO/React-Carousel/master/public/assets/example.jpg" alt="carousel"/>

## Installing the package in your project:
```bash
npm i carousel-react-sw49go
```
## Prerequisites :
- Node.js v18.16.0

## Dependencies to install :
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "prop-types": "^15.8.1"
- "react-icons": "^5.0.1"

## Imported the component into your project:
```
import {CarouselReact } from 'react-carousel-sw49go'

function App() {
    // Resource list in an array:
        const pictures =  [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"
        ]

  return (
    <div className='yourStyleContainer'>
      <CarouselReact 
            photo={pictures} 
            outside={true} 
            heightContainer={'10rem'} 
            widthContainer={'85%'} 
            styleContainer={{border:'3px solid #000', paddingBottom:'1rem', backgroundColor:'#5f99dc'}} 
            styleNavIcon={{color:'#fff', fontSize:'1rem'}} 
            stylePaging={{color:'#fff'}}  
            reactIconRight={'FaArrowAltCircleRight'} 
            reactIconLeft={'FaArrowAltCircleLeft'}/>
    </div>
  )
}

export default App
```

# Using the different component options (Props):
| Props| Type| Description |
|:--- |:---: |------|
||||
| `photo`    | array | *List of resource pictures*| 
| `outside`  | boolean| *Position of Icons & Pagination*<br/><sub>default : false</sub>| 
| `heigthContainer`| string | *Heigth of the container display*|
|`widthContainer`| string| *Width of the container display*|
|`styleContainer`| object| *CSS Properties for the container*|
|`styleNavIcon`|object|*CSS Properties for the icons style*|
|`stylePaging`|object|*CSS Properties for the paging number style*|
|`reactIconRight`|string| *Name of Right icon from React Icons (Font Awesome 5)*<br/><sub>default icon : 'FaAngleRight'</sub>|
|`reactIconLeft`|string| *Name of Left icon from React Icons (Font Awesome 5)*<br/><sub>default icon : 'FaAngleLeft'</sub>|


