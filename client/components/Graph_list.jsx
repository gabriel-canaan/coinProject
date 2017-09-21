import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Graph from './Graph'

export default class GraphList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      graphs: [],
      selectedGraph: null
    }
  }
  render() {
    return (
      <div className='oneGraph col-sm-4'>
        <Graph data={this.props.data}/>
      </div>
    )
  }
}
