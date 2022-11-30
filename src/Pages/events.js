import React from 'react';
import Moca from "../Images/Moca.webp"
import Ponce from "../Images/crucetaPonce.jpeg"
import Maya from "../Images/portico.jpeg"
import SJ from "../Images/ElMorro.jpeg"
  
const Events = () => {
  return (
      <>
  
          <h1 className="Title"> Ongoing Events </h1>
  
          <ul className="eventsUL">
  
  
              <li>
  
                  <div className="imageDiv">
  
                      <img className="eventImage" src={Moca} width={273} height={370}></img>
  
                      <div className="overlayEv">
  
  
                          <div className="image__title">
                              Mascotas por Moca
                          </div>
  
                          <p className="imageDesc"> 
                              <strong> Date: </strong> December 13 2022 <br></br>
                              <strong> Location: </strong> Coliseo Dr. Juan Sanchez Acevedo info <br></br>
                          </p>
  
                      </div>
  
                  </div>
  
  
  
              </li>
  
              {/* Item No#2 */}
  
              <li>
  
                  <div className="imageDiv">
  
                  <img className="eventImage" src={Ponce} width={273} height={370}></img>
  
                      <div className="overlayEv">
  
  
                          <div className="image__title">
                              P(11) Pets
                          </div>
  
                          <p className="imageDesc"> 
                              <strong> Date: </strong> January 8 2023 <br></br>
                              <strong> Location: </strong> Auditorio Juan Pachín Vicéns <br></br>
                          </p>
  
                      </div>
  
                  </div>
  
              </li>
  
              {/* Item No#3 */}
  
              <li>
  
                  <div className="imageDiv">
  
                  <img className="eventImage" src={Maya} width={273} height={370}></img>
  
                      <div className="overlayEv">
  
  
                          <div className="image__title">
                              Perritos del Pórtico
                          </div>
  
                          <p className="imageDesc"> 
                              <strong> Date: </strong> Abril 14 2023 <br></br>
                              <strong> Location: </strong> Palacio de Recreación y Deportes <br></br>
                          </p>
  
                      </div>
  
                  </div>
  
              </li>
  
              {/* Item No#4 */}
  
              <li>
  
                  <div className="imageDiv">
  
                  <img className="eventImage" src={SJ} width={273} height={370}></img>
  
                      <div className="overlayEv">
  
  
                          <div className="image__title">
                              Save a Pet SJ
                          </div>
  
                          <p className="imageDesc"> 
                              <strong> Date: </strong> Mayo 18 2023 <br></br>
                              <strong> Location: </strong> Parque Luis Muñoz Marin <br></br>
                          </p>
  
                      </div>
  
                  </div>
  
              </li>
  
          </ul>
  
      </>
  
      )
};
  
export default Events;