import React from "react";
import Footer from "../sections/Footer"
import Navbar from "../components/Navbar";
import BlogPost from "../sections/BlogPost";
import Banner from "../components/Banner";
import banner from '../img/banner-10.jpg'

const Blog = ()=> {
  return(
    <>
      <div className="Loader"></div>
		  <div className="wrapper"> 
        <Banner
          cname = "inner-header-title"
          cname2 = "container"
          bgImg = {banner}
          title= "Blog Page"
        />
      </div>
    {/* 
     <Navbar/>
    <BlogPost />
    <Footer /> */}  
    </>
  )
}
export default Blog