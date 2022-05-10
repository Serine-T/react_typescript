import React, { useRef} from "react";

interface TodoFormProps {
  onAdd(title:string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) =>{
  const ref = useRef<HTMLInputElement>(null);


  const keyPressHandler = (event: React.KeyboardEvent) =>{
    if(event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value ="";
      // console.log(title);
      // setTitle('');
    }
  }


  return <div className="row">
    <div className="col s12">
      <div className="input-field">
        {/* <label className="active"> */}
          <input 
          className="autocomplete"
            type="text"  
            id="title" 
            ref= {ref}
            onKeyPress={keyPressHandler}
          />
        {/* </label> */}
      </div>
    </div>
  </div>
}
export default TodoForm;