import {useParams} from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import "../styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import massIcon from '../styles/Images/massIcon.png';
import heightIcon from '../styles/Images/heightIcon.png';
import genderIcon from '../styles/Images/genderIcon.png';
import planetIcon from '../styles/Images/planetIcon.png';



function Person(){
    const { page , name } = useParams();
    var currentPage = parseInt(page);
    const GET_PERSON_BY_NAME = gql`
        query personByName{
            personByName(name : "${name}" , page : ${currentPage}) {
              name
              mass
              gender
              height
              homeworld{
                name
                population
                terrain
              }
           }
        }
    `;
    
    const { loading, error, data } = useQuery(GET_PERSON_BY_NAME, {
      variables:{
        page : parseInt(currentPage),
      }
    });

      if(loading){
        return "Loading.."
      }
      if(error){
        console.log(error.message);
        return "Error.." + error.message;
      }
      if(!data){
        return "No data found :(";
      }
      

          return (
            <div className="personDiv" key="key">
                  <span className="article2" style={{fontSize:"50px"}}>{data.personByName.name}</span><br></br>
                  <div className="article2" style={{width:"400px", display:"inline"}}>
                  <br></br>
                   Mass:<span style={{paddingLeft: "20px" , paddingRight: "30px"}}>{data.personByName.mass} kg </span> <span className="massIcon"> <img src={massIcon} alt="Icon" height="20px" style={{float:"right"}}></img> </span> <br></br>
                   Height:<span style={{paddingLeft: "20px" , paddingRight: "15px"}}>{data.personByName.height} cm </span> <span className="heightIcon"> <img src={heightIcon} alt="Icon" height="20px" style={{float:"right"}}></img> </span> <br></br>
                   Gender:<span style={{paddingLeft: "20px" , paddingRight: "25px"}}>{data.personByName.gender} </span> <span className="genderIcon"> <img src={genderIcon} alt="Icon" height="20px" style={{float:"right"}}></img> </span> <br></br>
                   Homeworld: <span style={{paddingRight:"50px"}}></span><img src={planetIcon} alt="Icon" height="20px"  style={{float:"right"}}></img><br></br>
                  </div>
                     <div>
                       <div className="article2">
                        Name:{data.personByName.homeworld.name}
                       </div>
                       <div className="article2">
                        Terrain:{data.personByName.homeworld.terrain} 
                       </div>
                       <div className="article2">
                        Population:{data.personByName.homeworld.population}
                       </div>
                     </div>
            </div>
          )
  }

    export default Person;