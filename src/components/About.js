import reactLogo from '../styles/Images/reactLogo.png';
import apollo from '../styles/Images/apollo.png';
import github from '../styles/Images/github.png';
import heroku from '../styles/Images/heroku.png';
import postman from '../styles/Images/postman.png';

function About(){


    return (
      <div >
        <h2 className="article2" style={{ textAlign: "center" }}>About this project</h2>
        <h3 className="article2" style={{ textAlign: "center" }}>Technology used:</h3>
        <table style={{ width: "90vw" }}>
          <tr className="article2">
            <td id="leftData">
              <p>
                <ul>
                  
                  <li>
                    <h3>Github</h3>
                    <img
                      src={github}
                      alt="githubLogo"
                      style={{ height: "90px", width: "140px" }}
                    ></img>
                  </li>
                  <li>
                    <h3>Apollo Graphql</h3>
                    <img
                      src={apollo}
                      alt="apolloLogo"
                      style={{ height: "90px", width: "140px" }}
                    ></img>
                  </li>
                </ul>
              </p>
            </td>
            <td id="innerLeftData">
              <p>
                <ul>
                <li>
                    <h3>React</h3>
                    <img
                      src={reactLogo}
                      alt="reactLogo"
                      style={{ height: "140px", width: "250px" }}
                    ></img>
                  </li>
                </ul>
              </p>
            </td>
            <td id="rightData">
              <p>
                <ul>
                  <li>
                    <h3>Postman</h3>
                    <img
                      src={postman}
                      alt="postmanLogo"
                      style={{ height: "90px", width: "200px" }}
                    ></img>
                  </li>
                  <li>
                    <h3>Heroku</h3>
                    <img
                      src={heroku}
                      alt="herokuLogo"
                      style={{ height: "90px", width: "140px" }}
                    ></img>
                  </li>
                </ul>
              </p>
            </td>
          </tr>
          <tr>
              <td id="secondRowLeftData" style={{paddingTop:"100px"}}>
                <h3 style={{color:"white"}}>Github Link</h3>
                <a href=" https://github.com/Johandre296/wrapper-swapi.git" >
                   CLICK ON ME TO VISIT GITHUB
                </a>
              </td>
              <td id="secondRowInnerData">

              </td>
              <td id="secondRowRightData" style={{paddingTop:"100px" ,float:"right"}}>
                <h3 style={{color:"white"}}>Linkedin Link</h3>
                <a href="https://www.linkedin.com/in/johandre-swanepoel-a94a89ba" >
                   CLICK ON ME TO VISIT LINKEDIN
                </a>  

             
              </td>
          </tr>
        </table>
      </div>
    );
}


export default About;