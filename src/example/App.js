import { CarouselReact } from "../lib"

function App() {
  const pictures =  [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
]
  return (
    <div style={{width:'20rem', margin:'5rem', display:'flex', justifyContent:'center'}}>
      <CarouselReact photo={pictures} outside={true} heigthContainer={'10rem'} widthContainer={'85%'} styleContainer={{borderRadius:'1rem',paddingBottom:'2rem', backgroundColor:'#db3636'}} styleNavIcon={{color:'#dbcc5e', fontSize:'1rem'}} stylePaging={{color:'white'}}  reactIconRight={'FaAngleDoubleRight'} reactIconLeft={'FaAngleDoubleLeft'} paging={false}/>
    </div>
  )
}

export default App
