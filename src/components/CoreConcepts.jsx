import { CORE_CONCEPTS } from '../data-with-examples.js';
import CoreConcept from './CoreConcept.jsx';
// import componentImg from "./assets/components.png";

const core_concept = [
  {
  title : "ABC",
  description : " abc are the alphabets"
  },

  {
    title : "Numbers",
    description : " 1,2,3 are the nuumbers"
  }
];

export  default function CoreConcepts(){
    return(
        <section id="core-concepts">
                <h2>Core Conceppts</h2>
                <ul>
                 {CORE_CONCEPTS.map((conceptItem) => (
                  <CoreConcept key={conceptItem.title} {...conceptItem} />
                 ))}
                </ul>
                </section>
    );
}




//old method 

//  {/* in below components props i have passed data by manuaaly iserting here*/}
//  <CoreConcept
//  title="Components" 
//  description="The Core UI Building Block"
//  image={componentImg}
// />
// <CoreConcept 
//  title="Props" 
//  description="It is similar to HTML attributes"
//  image={componentImg}
// />

// {/* in below components props i have passed data from already organized object "core_concept" */}
// <CoreConcept 
//  title={core_concept[0].title}
//  description={core_concept[0].description} 
//  image={componentImg}
// />
// <CoreConcept
//  title={core_concept[1].title}
//  description={core_concept[1].description} 
//  image={componentImg}
// />