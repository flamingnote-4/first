import React from 'react';

function List(table) {
  return table.map((table) => <li key={table.id}>{table.value}</li>)
}

class HobbyWithAList extends React.Component {
  render() {
    const { title, children, list } = this.props;
    return (
      <div className="center">
        <h2 className="title">{title}</h2>
        <p className="text">{children}</p>
        <br />
        {List(list)}
        <br />
      </div>
    );
  }
}

export default HobbyWithAList;
