import React from "react" 

class TodoHeader extends React.Component {
    handlerKeyUp(e) {
        if (e.keyCode == 13) {
        let value = e.target.value
        if(!value){
            return false
        }
        let newItem = {
            text: value,
            isDone: false 
        }
        e.target.value = ''
            this.props.addTodo(newItem)
        }
    }
    render(){
        return (
            <div className="todoHeader">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}

export default TodoHeader 