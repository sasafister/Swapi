import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwapiList extends Component {
  renderPeople(people) {
    return people.results.map(item => {
      return <li className="list-group-item">{item.name}</li>
    })
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 input-group top">
        <ul className="list-group">
          {this.props.swapi.map(this.renderPeople)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    swapi: state.swapi
  }
}

export default connect(mapStateToProps)(SwapiList)
