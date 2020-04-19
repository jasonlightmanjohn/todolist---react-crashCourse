import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todos.title }</p>
            </div>
        )
    }
}


//prop-types
TodoItem.propTypes = { todos: PropTypes.object.isRequired}

export default TodoItem
