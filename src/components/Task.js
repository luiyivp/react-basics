import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    styleWhenCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecorator: this.props.task.done ? 'line-through' : 'none'
        };
    }

    render() {
        const { id, title, description } = this.props.task;
        return (
            <p style={this.styleWhenCompleted()}>
                {id} - {title} - {description}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, id)} />
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, id)}>
                    x
                </button>
            </p>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
};

const btnDelete = {
    fontSize: '18px',
    background: '#EA2027',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
};

export default Task;
