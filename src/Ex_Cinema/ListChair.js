import React, { Component } from 'react'
import ItemChair from './ItemChair'
import { connect } from 'react-redux'

class ListChair extends Component {
  renderListChair = () => {
    return this.props.chairArr.map((item, index) => {
      return <ItemChair handleAddChair={this.props.handleAddChair} item={item} key={index}/>
    })
  }
  render() {
    console.log("renderLIsst HCaiisi",this.props.chooseList);
    return (
      <div className='col-8'>
        <h3 className='bookingMovie mt-3 text-3xl' style={{color: "orange"}}>ĐẶT VÉ XEM PHIM CYPERLEARN.VN</h3>
        <div className="screen ml-2">Màn hình</div>
        <div>
            <table className='ml-4'>
                <tbody>
                <tr>
                    <td />
                    <td className='rowNumber'>1</td>
                    <td className='rowNumber'>2</td>
                    <td className='rowNumber'>3</td>
                    <td className='rowNumber'>4</td>
                    <td className='rowNumber'>5</td>
                    <td className='rowNumber'>6</td>
                    <td className='rowNumber'>7</td>
                    <td className='rowNumber'>8</td>
                    <td className='rowNumber'>9</td>
                    <td className='rowNumber'>10</td>
                    <td className='rowNumber'>11</td>
                    <td className='rowNumber'>12</td>
                </tr>
                {this.renderListChair()}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    chairArr: state.chairReducer.chairArr
  }
}

export default connect(mapStateToProps)(ListChair)