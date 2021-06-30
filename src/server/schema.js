const {gql} = require('apollo-server');

const typeDefs = gql `
type Query{
    people(pageSize: Int, after: String, page : Int) : peopleConnection!
    personByName(name: String , page: Int) : Person
    allPlanets: [Planet]!
}

type peopleConnection{
  cursor: String!
  hasMore: Boolean!
  people : [Person]!
}

type allPeople{
  people: [Person]!
}

type allPlanets{
  planets: [Planet]!
}

type Planet{
  name : String
  terrain : String
  population : String
}

type Person{
    name: String
    height: String
    mass: String
    hairColor: String
    skinColor: String
    eyeColor: String
    birthYear: String
    gender: String
    homeworld: Planet
}
`;

module.exports = typeDefs;

