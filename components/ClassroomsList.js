import React from 'react';
import { gql, graphql } from 'react-apollo'

const Index = ({ query }) => (
  <div>
    <h3>Classrooms {query._allClassroomsMeta.count}</h3>
    <ul>
      {query.allClassrooms.map(classroom => (
        <li>{classroom.id} - {classroom.name}</li>
      ))}
    </ul>
  </div>
)

Index.fragments = {
  query: gql`
    fragment ClassroomsListQuery on Query {
      _allClassroomsMeta {
        count
      }
      allClassrooms {
        id
        name
      }
    }
  `
}

export default Index;
