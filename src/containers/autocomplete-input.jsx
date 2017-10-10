import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NamesActionCreators from '../actions/names-actions';

class AutoCompleteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterValue: "" };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.doNamesFilterUpdate("");
    this.props.doFetchFilteredNames("");
  }

  setOptions() {
    // Only show first 50 items in drop-down list
    //Chrome widget tends to hang or get sluggish for bigger list!
    if (this.props.names.length > 50) {
      const list = [];
      for (let i = 0; i < 50; ++i) {
        const name = this.props.names[i];
        list.push(<option key={name} value={name} />);
      }
      return list;
    }

    return this.props.names.map(name => {
      return <option key={name} value={name} />
    });
  }

  render() {
    return (
      <form >
        <input list="namelist" value={this.state.filterValue} onChange={this.handleUpdate} />
        { this.props.filter.length > 0 &&
         <datalist id="namelist">
           {this.setOptions()}
         </datalist>
        }
      </form>
    );
  }

  handleUpdate(event) {
    const { value } = event.target;
    this.setState({ filterValue: value });
    this.props.doNamesFilterUpdate(value);
    this.props.doFetchFilteredNames(value);
  }
}

function mapStateToProps(store) {
  return {
    names: store.names,
    filter: store.filter
  };
}
function mapsDispatchToProps(dispatch) {
  return bindActionCreators(NamesActionCreators, dispatch);
}

export default connect(mapStateToProps, mapsDispatchToProps)(AutoCompleteInput);
