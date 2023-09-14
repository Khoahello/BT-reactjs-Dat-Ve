import React, { Component } from 'react'
import ListChair from './ListChair'
import ChooseList from './ChooseList'

export default class Ex_Cinema extends Component {
  render() {
    return (
      <div className='row' style={{backgroundImage: "url(./resouce/bgmovie.jpg)"}}>
        <ListChair/>
        <ChooseList/>
      </div>
    )
  }
}
