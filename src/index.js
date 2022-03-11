import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const items = [
    { name: 'Bread', price: 2.35 },
    { name: 'Milk', price: 2.0 },
    { name: 'Eggs', price: 3.15 },
    { name: 'Tea', price: 4.0 }
  ];

  return <List items={items} />;
};

const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index}>
      {item.name}: {item.price}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

ReactDOM.render(<App />, document.getElementById('root'));