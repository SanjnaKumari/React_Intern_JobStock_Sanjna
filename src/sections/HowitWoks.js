import React from "react";
import WorkCard from "../components/WorkCard";
/*import { Account_Data } from "../data/details";*/

function HowitWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-12">
               <div className="main-heading">
                    <p>Working Process</p>
                    <h2>How It <span>Works</span></h2>
                </div>
          </div>
        </div>
        <div className="row">
          
              {/*{Account_Data.map((data,index) => {
                const { icon, heading, description } = data;
                return (
                  <WorkCard
                  key={index}
                  span={index+1}
                    icon={icon}
                    heading={heading}
                    description={description}
                  />
                );
              })}*/}
           </div>
      </div>
    </section>
  );
}

export default HowitWorks;

// {Top.map((data) => {
//   const { toptitle, h01, h02 } = data;
//   return <WorkCard
//   toptitle={toptitle}
//   h01={h01}
// h02={h02} />
// ;
// })}

// {Account_Data.map((data) => {
//   const { pic, heading, description } = data;
//   return (
//     <WorkCard
//       pic={pic}
//       heading={heading}
//       description={description}
//     />
//   );
// })}
