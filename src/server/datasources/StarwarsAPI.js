const {RESTDataSource} = require('apollo-datasource-rest');

class SWAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }
    //API CALLS
   
    //allPeople  
    async getAllPeople({page}) {
        const response = await this.get('people/?page='+page);
        let nxt = "1";
        let prv = "1";

      if(response.previous == null){
        response.previous = "1";
      }else{
        prv = response.previous.slice(35,36);
        response.previous = prv;
      }
      if(response.next == null){
        response.next = "1";
      }else{
        nxt = response.next.slice(35,36);
        response.next = nxt;
      }
      let personArr = [];
      for (let index = 0; index < response.results.length; index++) {
          personArr.push(this.peopleConnectionReducer(response.results[index],response.count,response.next,response.previous));
        }
        
      return(
          {personArr}
      )

    }  

     //getPersonName 
      async getPersonByName({name , page}) {
        const response = await this.get('people/?page=' + page);
        var returnPerson;

        for (let index = 0; index < response.results.length; index++) {
          if((response.results[index].name).toLowerCase().includes(name.toLowerCase())){
            returnPerson = response.results[index];
            return this.personReducer(returnPerson);
          }
          else{
            console.log("no person found");
          }
        }
      }

    
      async getPlanetById(planetID = {planetId}){
        const response = await this.get(`planets/`+ planetID.planetID);
        return this.planetReducer(response);
      }

    //allPlanets  
    async getAllPlanets() {
      const response = await this.get('planets');
      return Array.isArray(response.results)
        ? response.results.map(planet => this.planetReducer(planet))
        : [];
    }


//API CALLS--END

    //REDUCERS  
    planetReducer(planet){
      return {
          name : planet.name,
          terrain : planet.terrain,
          population : planet.population
      }
  }

    personReducer(person){
        return {
            name : person.name,
            height: person.height,
            mass: person.mass,
            hairColor: person.hair_color,
            skinColor: person.skin_color,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
            gender: person.gender,
            homeworld : person.homeworld
        }
    }

    peopleConnectionReducer(personDetails,countD,nextD,previousD){
      return{
          count: countD,
          next: nextD,
          previous: previousD,  
            name : personDetails.name,
            height: personDetails.height,
            mass: personDetails.mass,
            hairColor: personDetails.hair_color,
            skinColor: personDetails.skin_color,
            eyeColor: personDetails.eye_color,
            birthYear: personDetails.birth_year,
            gender: personDetails.gender,
            homeworld : personDetails.homeworld
      }
    }

    //REDUCERS--END
}

module.exports = SWAPI;

