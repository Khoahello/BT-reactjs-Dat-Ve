import React, { Component } from 'react'
import { REMOVE_CHAIR } from './constant/chairConstant'
import { connect } from 'react-redux'

class ChooseList extends Component {
  renderChooseList = () => {
    let {chooseList} = this.props
    return chooseList.map((item, index) => {
      let {soGhe, gia} = item
      return (
        <tr key={index}>
          <td className='text-lg' style={{color: "#fea500", fontFamily: "fontGame", fontWeight: "600", border: "1px solid white"}}>{soGhe}</td>
          <td className='text-lg' style={{color: "#fea500", fontFamily: "fontGame", fontWeight: "600", border: "1px solid white"}}>{gia.toLocaleString('de-DE')}</td>
          <td
          style={{color: "red", fontFamily: "fontGame", fontWeight: "800", border: "1px solid white", cursor: "pointer"}}
          onClick={() => {
              this.props.handleRemove(item)
            }}
            >X</td>
          </tr>
        )
      })
    }
    render() {
      let tongGia = 0
      this.props.chooseList.map((item) => {
        tongGia = tongGia + item.gia
      })
    return (
      <div className='col-4'>
        <h3 className="bookingMovie mt-5">Danh sách ghế bạn chọn</h3>
        <div className="row py-1">
          <div style={{width: "30px", height: "30px", backgroundColor: "orange"}}></div>
          <h5 className='mx-2 bookingMovie'>Ghế đã đặt</h5>
        </div>
        <div className="row py-1">
          <div style={{width: "30px", height: "30px", backgroundColor: "#6dee6d"}}></div>
          <h5 className='mx-2 bookingMovie'>Ghế đang chọn</h5>
        </div>
        <div className="row py-1">
          <div style={{width: "30px", height: "30px", backgroundColor: "white", border: "2px solid orange"}}></div>
          <h5 className='mx-2 bookingMovie'>Ghế chưa đặt</h5>
        </div>
        <table style={{width: "100%"}}>
          <tr>
            <th className='bookingMovie text-lg' style={{border: "1px solid white"}}>Số ghế</th>
            <th className='bookingMovie text-lg' style={{border: "1px solid white"}}>Giá</th>
            <th className='bookingMovie text-lg' style={{border: "1px solid white"}}>Hủy</th>
          </tr>
          {this.renderChooseList()}
          <tr>
            <th className='bookingMovie text-lg' style={{border: "1px solid white"}}>Tổng</th>
            <td className='text-lg' style={{border: "1px solid white", color: "#fea500", fontFamily: "fontGame", fontWeight: "600", border: "1px solid white"}}>{tongGia.toLocaleString('de-DE')}</td>
            <td style={{border: "1px solid white"}}></td>
          </tr>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return { chooseList: state.chairReducer.chooseList };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (chair) => {
      let action = {
        type: REMOVE_CHAIR,
        payload: chair
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseList);