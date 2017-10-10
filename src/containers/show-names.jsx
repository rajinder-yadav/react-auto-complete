import React from 'react';
import { connect } from 'react-redux';

class ShowName extends React.Component {

  generateNames() {
    return this.props.names.map(name => {
      const re = RegExp(`(.*)(${this.props.filter})(.*)`, 'i');
      const m = name.match(re);

      if (!m || this.props.filter === '') {
        return <li className="list-group-item list-group-item-info" key={name}>{name}</li>
      }

      return <li className="list-group-item list-group-item-info" key={name}>{m[1]}<b>{m[2]}</b>{m[3]}</li>
    });
  }

  render() {
    return <ul className="list-group">{this.generateNames()}</ul>;
  }
}

function mapStateToProps(store) {
  return {
    names: store.names,
    filter: store.filter
  };
}
export default connect(mapStateToProps)(ShowName);
