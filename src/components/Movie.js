import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 340px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  border-radius: 7px;
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export default ({ id, bg, isLiked }) => {
  const [toggoleMovie] = useMutation(LIKE_MOVIE, { variables: { id: parseInt(id), isLiked } });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggoleMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};
