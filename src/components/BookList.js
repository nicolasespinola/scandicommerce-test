import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getQuery = gql`
  {
    categories {
      name
      products {
        id
        name
      }
    }
  }
`;

class BookList extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getQuery)(BookList);
