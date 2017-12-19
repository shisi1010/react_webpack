import React from "react"
import ReactDOM from "react-dom"
import TodoHeader from "./TodoHeader"
import TodoMain from "./TodoMain"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }
    addTodo(item) {
        let list = this.state.todos
        list.push(item)
        this.setState({todos: list})
    }

    render() {
        return (
            <div className="todo-wrapper">
                <TodoHeader addTodo = {this.addTodo.bind(this)} />
                <TodoMain todos = {this.state.todos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))