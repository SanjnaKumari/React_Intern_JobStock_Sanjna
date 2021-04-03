import React from "react"
 
const Banner = ({cname,cname2,bgImg,title})=> {
  return(
    <>
    <section
        className={cname}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={cname2}>
          <h1>{title}</h1>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  )
}
export default Banner