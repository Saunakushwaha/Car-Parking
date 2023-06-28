import { DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import React from "react";
import"./Parkin_Table.css";
class Parkin_Table extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'A1','A2','A3',
          'B1','B2','B3',
          'C1','C2','C3'
        ],
        seatAvailable: [
            'A1','A2','A3',
            'B1','B2','B3',
            'C1','C2','C3',
            
        ],
        seatReserved: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      }
    }
    
    render() {
      return (
        <div>
          
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
  
  class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'RE': 'AL'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  class AvailableList extends React.Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left-box">
          <h4>Available Parking:<br></br> ({seatCount == 0? 'No Parking available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends React.Component {
    render() {
      return(
        <div className="right-box">
          <h4>Reserved Parking:<br></br> ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
      )
    }
  }
  
  export default Parkin_Table;
  