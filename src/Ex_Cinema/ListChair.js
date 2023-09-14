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
    return (
      <div className='col-7'>
        <h3 className='bookingMovie'>Đặt vé xem phim</h3>
        <div className="screen">Màn hình</div>
        <div>
            <table>
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
                {/* <tr>
                    <td className='firstChar'>A</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                    <td className="ghe">1</td>
                </tr> */}
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