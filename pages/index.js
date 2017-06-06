import React from 'react';
import ClassroomsList from '../components/ClassroomsList';
import { gql } from 'react-apollo'
import withData from '../lib/withData';

const Index = ({ query }) => (
  <div>
    <ClassroomsList query={query} />

    <form>
      <input type='text' placeholder='Classroom name'/>
      <button type='submit'>Create Class</button>
    </form>
  </div>
)

Index.fragments = {
  query: gql`
    fragment PageQuery on Query {
      ...ClassroomsListQuery
    }
    ${ClassroomsList.fragments.query}
  `
}

export default withData(Index);
