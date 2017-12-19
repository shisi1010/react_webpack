import React from "react"
import TodoItem from "./TodoItem"

class TodoMain extends React.Component {
    render() {
        if (this.props.todos.length == 0){
            return (
                <div className="todoEmpty">无所事事,为所欲为!</div>
            )
        }else{
            return (
                <ul className="todoMain">
                    {
                        this.props.todos.map((todo, index) => {

                             //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
                            return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props} key={index} />
                        })
                    }
                </ul>
            )
        }
    }
}

export default TodoMain