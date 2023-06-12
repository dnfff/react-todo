import "../../../src/App.css"
import delete2 from "../../images/delete.png"
import close2 from "../../images/close.png"
import board from "../../images/board.png"

function TodoList({ todo, setTodo }) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!==id);

        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    

    return (
      <div className="items">
        {
            todo.map( item => (
                <>
                    <div key={item.id} className="list">
                        <img className="boardl" src={board} alt="" />
                        <div className={ !item.status ? "close" : ''}>{ item.title }</div>
                    </div>
                    <div className="but">
                        <button className="btn2" onClick={ () => statusTodo(item.id) }><img src={delete2} alt="" /></button>
                        <button className="btn2" onClick={ () => deleteTodo(item.id) }><img src={close2} alt="" /></button>
                    </div>
                </>
            ))
        }
      </div>
    )
}

export default TodoList