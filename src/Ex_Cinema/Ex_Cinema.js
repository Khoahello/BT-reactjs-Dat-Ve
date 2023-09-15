import React, { Component } from 'react'
import ListChair from './ListChair'
import ChooseList from './ChooseList'

export default class Ex_Cinema extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(./resouce/bgmovie.jpg)", width: ""}}>
        <div className='row' style={{width: "101%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <ListChair/>
          <ChooseList/>
        </div>
      </div>
    )
  }
}
