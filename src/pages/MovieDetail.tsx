import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail : React.FC =  () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Movie Detail</h1>
      <p>Movie ID: {id}</p>
    </div>
  )
}

export default MovieDetail;