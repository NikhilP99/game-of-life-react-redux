import React, {Component} from 'react'
import {connect} from "react-redux"

import {toggleStatus,randomBoard,next} from '../actions'

import Cell from './Cell'

class Board extends Component {

    getboard = async () => {
      await this.props.randomBoard();
    }


    render(){
        return(
            <div>
                <table>
                <tbody>
                    {this.props.board.map((row,i) =>
                    <tr key={i}> {row.map((cell,j) =>
                        <Cell
                            key={j}
                            alive={cell.status}
                            newBorn={cell.newBorn}
                            handleClick={() => this.props.toggleStatus(i,j)}
                            />)}
                    </tr> )}
                </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({board}) => {
    return {board}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus: (x,y) => dispatch(toggleStatus(x,y)),
        next: ()=>dispatch(next()),
        randomBoard: ()=>dispatch(randomBoard())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)
