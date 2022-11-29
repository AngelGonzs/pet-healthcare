import React from 'react';
import style from "../style.css"
import addAPetButton from "../Images/petButton.jpeg"
import dog from "../Images/dog.jpg"
import cat from "../Images/cat.jpg"
import horse from "../Images/horse.jpg"
import bunny from "../Images/bunny.jpg"
import bird from "../Images/bird.jpg"
  
export default function RegPets() {
  return (
    <div>
      <h1>Here are your registered pets!</h1>
        
      {/* Displaying Images!! */}
      <ul className='eventsUL'>

        {/* Dog Image */}
        <li>
          <div className='imageDiv'>

            <img className='eventImage' src={dog} width={225} height={370}></img>
            
            <div className='overlay'>

              <div className='image_title'>
                Chloe
              </div>

              <p className='imageDesc'>
                <strong> Breed: </strong> Yellow Labrador <br></br>
                <strong> Age: </strong> 6 <br></br>
              </p>
            </div>
          </div>
        </li>


        {/* Cat Image */}
        <li>
          <div className='imageDiv'>

            <img className='eventImage' src={cat} width={225} height={370}></img>
            
            <div className='overlay'>

              <div className='image_title'>
                Sonny
              </div>

              <p className='imageDesc'>
                <strong> Breed: </strong> British Shorthair <br></br>
                <strong> Age: </strong> 3 <br></br>
              </p>
            </div>
          </div>
        </li>


        {/* Horse Image */}
        <li>
          <div className='imageDiv'>

            <img className='eventImage' src={horse} width={225} height={370}></img>
            
            <div className='overlay'>

              <div className='image_title'>
                Ollie
              </div>

              <p className='imageDesc'>
                <strong> Breed: </strong> Gypsy Vanner <br></br>
                <strong> Age: </strong> 4 <br></br>
              </p>
            </div>
          </div>
        </li>


        {/* Bunny Image */}
        <li>
          <div className='imageDiv'>

            <img className='eventImage' src={bunny} width={225} height={370}></img>
            
            <div className='overlay'>

              <div className='image_title'>
                Snuffles
              </div>

              <p className='imageDesc'>
                <strong> Breed: </strong> English Angora <br></br>
                <strong> Age: </strong> 2 <br></br>
              </p>
            </div>
          </div>
        </li>


        {/* Bird Image */}
        <li>
          <div className='imageDiv'>

            <img className='eventImage' src={bird} width={225} height={370}></img>
            
            <div className='overlay'>

              <div className='image_title'>
                Rio
              </div>

              <p className='imageDesc'>
                <strong> Breed: </strong> Green Parrot <br></br>
                <strong> Age: </strong> 2.5 <br></br>
              </p>
            </div>
          </div>
        </li>

      </ul>

      {/* Adding the "Add A Pet!" button */}
      <td><a href="/AddAPet"><img src={addAPetButton} align="center" width={370} height={170}/></a></td>

    </div>
  );
};