const {paginateResults} = require('./util');

module.exports = {
  Query: {
    // personByName: (_, {name , page = 1}, { dataSources }) => 
    //   dataSources.swapi.getPersonByName({ name: name , page : page}),
    personByName: async (_, { name, page= 1 }, { dataSources }) => {
      const foundPerson = await dataSources.swapi.getPersonByName({name: name, page: page});
      return {
        name: foundPerson.name,
        height : foundPerson.height,
        mass : foundPerson.mass,
        hairColor: foundPerson.hairColor,
        skinColor: foundPerson.skinColor,
        eyeColor: foundPerson.eyeColor,
        birthYear: foundPerson.birthYear,
        gender: foundPerson.gender,
        homeworld : foundPerson.homeworld
        
      };
    }, 
    people: async (_, { pageSize = 10, after, page= 1 }, { dataSources }) => {
      const allPeople = await dataSources.swapi.getAllPeople({page: page});
      allPeople.personArr.reverse();
      const people = paginateResults({
        after,
        pageSize,
        results: allPeople
      });
      // console.log(people.length ? people[people.length - 1].count !== allPeople.personArr[allPeople.personArr.length -1].count : false);
      return {
        people: people,
        cursor: people.length ? people[people.length - 1].count : null,
        hasMore: people.length
          ? people[people.length - 1].count !==
            allPeople.personArr[allPeople.personArr.length - 1].count
          : false
      };
    },
    
  },
  
  Person: {
    homeworld: (parent,__,{dataSources})=>
    parent.homeworld = dataSources.swapi.getPlanetById({ planetID: parent.homeworld.slice(30,31) })
  }
};


// people: async (_, { pageSize , after }, { dataSources }) => {
//   const allPeople = await dataSources.swapi.getAllPeople({pageSize : pageSize , after: after});
//   allPeople.reverse();
//   const people = paginateResults({
//     after,
//     pageSize,
//     results: allPeople
//   });

//   return{
//     people,
//     cursor: people[people.length - 1].cursor,
//     hasMore: people.length ? people[people.length - 1].cursor !== allPeople[allPeople.length - 1].cursor : false
//   };
// },  