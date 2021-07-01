import githubData from "./gqlrequest.js";
import React from 'react';

//console.log(githubData.data.viewer.repositories.nodes);

function ListItem(props) {
  //There is no need to specify the key here:
  return <li>{props.value}</li>;
}


export function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}



const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// console.log(NumberList);