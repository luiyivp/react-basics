import React, { Component } from 'react';
import './App.css';
import tasks from './samples/tasks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import About from './components/About';

class App extends Component {
    state = {
        tasks
    };

    addTask = (title, description) => {
        const newTask = {
            id: this.state.tasks.length,
            title,
            description
        };
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    };

    checkDone = id => {
        const newTask = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({
            tasks: newTask
        });
    };

    deleteTask = id => {
        const newTask = this.state.tasks.filter(task => task.id !== id);
        this.setState({
            tasks: newTask
        });
    };

    render() {
        return (
            <Router>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            <div>
                                <TaskForm addTask={this.addTask} />
                                <Tasks
                                    tasks={this.state.tasks}
                                    checkDone={this.checkDone}
                                    deleteTask={this.deleteTask}
                                />
                            </div>
                        );
                    }}
                ></Route>
                <Route path="/about" component={About} />
            </Router>
        );
    }
}

export default App;
