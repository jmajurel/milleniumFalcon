import React from 'react';

const HomePage = props => ((
  <div>
    <h1>{props.title}</h1>
    <img alt='POD' src={props.url}/>
    <p>{props.explanation}</p>
  </div>
));

export default HomePage;
