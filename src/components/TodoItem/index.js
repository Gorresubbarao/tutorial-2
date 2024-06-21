// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetailes, deleteTodo} = props
  const {title, id} = todoDetailes

  const ondelete = () => deleteTodo(id)

  return (
    <li className="todo-container">
      <p className="todo-title">{title}</p>
      <div>
        <button className="button" type="button" onClick={ondelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
