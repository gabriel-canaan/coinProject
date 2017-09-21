import React from 'react'
import {Link} from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
    VictoryStack, VictoryLine} from 'victory'
import moment from 'moment'
import GraphTitle from './Graph_title'

export default function Graph(props) {
  let data = props.data
  return (
    <div>
      {Object.keys(data).map((coinType, i) => {
        console.log(data[coinType])
        return <div key={i} className='graph'>
          <Link to='/Graph_list/:id'>
            <GraphTitle coinType={coinType}/>
            <VictoryChart>
              <VictoryLine data={data[coinType]} x="time" y="open"/>
            </VictoryChart>
          </Link>
        </div>
      })}
    </div>
  )
}
