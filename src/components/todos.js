// react libraries
import React from 'react';

//data
import cuid from 'cuid';

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class Todos extends React.Component {

  state = {
    todos: [],
  };

  // method handles value changes in the input field.
  onInputChange = (event) => {
    const {value} = event.target;
    this.setState({value: value});
  };

  // This method handles creating a note.
  onSubmit = () => {
    alert('A name was submitted: ' + this.state.value);
  };

  // toggleComplete = id => {
  //   data.todos.map(todo => {
  //     if (todo.id === id) {
  //       // suppose to update
  //       return {
  //         ...todo,
  //         complete: !todo.complete
  //       };
  //     } else {
  //       return todo;
  //     }
  //   })
  // };

render()
{
  return (
    <div>
      <form>
        <input name="noteTitle"
               value={this.state.noteTitle}
               placeholder="Title..."
               onChange={this.onInputChange}
        />
        <button onClick={this.onSubmit}> Add todo</button>
      </form>
      <h6>Your Todo List</h6>
      {todos.map(todo =>
        {/*<div key={todo.id} onClick={this.toggleComplete(todo.id)}>*/}
          {/*{todo.title}*/}
        {/*</div>)}*/}
    </div>
  )
}
}

export default Todos;
