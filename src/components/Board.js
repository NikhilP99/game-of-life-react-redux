import React, {Component} from 'react'
import {connect} from "react-redux"

import {toggleStatus} from '../actions'

import Cell from './Cell'

class Board extends Component {
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
        toggleStatus: (x,y) => dispatch(toggleStatus(x,y))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)