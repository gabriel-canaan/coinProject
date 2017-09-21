import React from 'react'
import ReactDOM from 'react-dom'
import Fetch from 'node-fetch'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coinType: ''
    }
    this.submitCoin = this.submitCoin.bind(this)
  }
  submitCoin(e) {
    e.preventDefault()
    e.target.reset()
    this.props.submit(this.state.coinType)
  }
  updateInputDetails(e) {
    this.setState({coinType: e.target.value})
  }
  render() {
    return (
      <div className='searchBar'>
        <form onSubmit={this.submitCoin}>
          <input name='coinType' value={this.state.coingraph}
            placeholder='Show me the money'
            onChange={this.updateInputDetails.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
