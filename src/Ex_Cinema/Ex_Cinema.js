import React, { Component } from 'react'
import ListChair from './ListChair'
import ChooseList from './ChooseList'

export default class Ex_Cinema extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(./resouce/bgmovie.jpg)"}}>
        <div className='row' style={{width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <ListChair/>
          <ChooseList/>
        </div>
      </div>
    )
  }
}
