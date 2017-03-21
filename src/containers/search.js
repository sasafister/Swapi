import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getSwapi } from '../actions/index'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onInputChange(event) {
   this.setState({ term: event.target.value }) 
  }

  onSubmitForm(event) {
    event.preventDefault()
    this.props.getSwapi(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return(
      <form onSubmit={this.onSubmitForm} className="input-group top col-md-8 col-md-offset-2">
        <input
          placeholder="Search Swapi"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    ) 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSwapi }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)
