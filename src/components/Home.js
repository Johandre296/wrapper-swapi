import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {Link} from 'react-router-dom';
import Button from "./button";


  const GET_ALL_PEOPLE = gql`
    query people($pageSize: Int, $page: Int){
      people(pageSize: $pageSize , page : $page){
        __typename
        hasMore
        people{
          name
          eyeColor
        }
         cursor
      }
    }
  `;

  function Home(){
    var currentPage = 1;
    var currentPageSize = 10;
    const { loading, error, data , refetch } = useQuery(GET_ALL_PEOPLE, {
      variables:{
        page: currentPage,
        pageSize: currentPageSize,
      },
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredName, setFilteredName] = useState("");
    const [routePageVal , setRoutePageVal] = useState("");

    if (loading) return 'Loading...';
    if (error){
      console.log(error);
      return `Error! ${error.message}`
    };
    if(!data) return 'No data found';

    
    const allThePeople = data.people.people.map((person) => {
            return (
              <div className="personDiv" key="key">
                <ul>
                  {person.name}
                </ul>
              </div>
            )
          }
        )
      
    function handleSearch(newSearchQuery){
      setSearchQuery(newSearchQuery);
      allThePeople.map((person) => {
        if((person.props.children.props.children).toLowerCase().includes(searchQuery.toLowerCase())){
         return  setFilteredName(person.props.children.props.children)
        }else{
         return  setSearchQuery(newSearchQuery);
        }
        
        // console.log(person.props.children[0].props.children);
      })
    }

    let pageVar = currentPage;
    function changePage(e){
      let cp = parseInt(e.target.value);
      setRoutePageVal(cp);
      refetch({
        page : cp
      })
    }


    if(routePageVal == ""){
      setRoutePageVal(pageVar) 
    }
 
      return (
        <div className="filteredPerson" style={{width:"15vw"}}>
          <table id="easyStyle" >
            <tr style={{float:"right"}}>
              <Search handleSearch={handleSearch}/>
              <article >
                <h3>Filtered By Name:</h3>
              </article>
            </tr>
            <tr>
              <ul style={{color: "red"}}>
                  <Link to={`/person/${routePageVal}/${filteredName}`}>
                    {filteredName} 
                  </Link>
              </ul>
            </tr>
            <tr style={{float:"right"}}>
              <article >
                <h3>Names Array:</h3>
              </article>
              <ol>
                  <article className="article2" style={{marginRight:"50px"}}>
                    {allThePeople}
                  </article>
              </ol>
            </tr>
            <tr >
              <span className="article2">
                PAGE:
              </span>
                <Button onClick={changePage} value="1">1</Button>
                <Button onClick={changePage} value="2">2</Button>
                <Button onClick={changePage} value="3">3</Button>
                <Button onClick={changePage} value="4">4</Button>
                <Button onClick={changePage} value="5">5</Button>
                <Button onClick={changePage} value="6">6</Button>
                <Button onClick={changePage} value="7">7</Button>
                <Button onClick={changePage} value="8">8</Button>
                <Button onClick={changePage} value="9">9</Button>  
            </tr>
          </table>
      </div>
    )

  }

  function Search({handleSearch}){
    function onChange(e){
      handleSearch(e.target.value)
    }
    return (
      <div>
        <article>
        <h3>Search by name</h3>
        </article>
        <input type="text" onChange={onChange} placeholder="eg. Luke Skywalker" />
        <br></br>
        <br>
        </br>
      </div>
    );
  }
  

  export default Home;