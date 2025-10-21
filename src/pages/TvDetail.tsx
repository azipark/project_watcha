import React from 'react';
import { useParams } from 'react-router-dom';

const TvDetail : React.FC =  () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>TV Detail</h1>
      <p>TV ID: {id}</p>
    </div>
  )
}

export default TvDetail;