import React from "react"
 
const Banner = ({cname,bgImg,title})=> {
  return(
    <>
    <section
        className={cname}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  )
}
export default Banner