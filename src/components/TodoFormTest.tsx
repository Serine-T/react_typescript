import React, { useState } from "react";

export const TodoFormTest: React.FC = () =>{
  const [title, setTitle] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) =>{
    if(event.key === 'Enter') {
      console.log(title);
      setTitle('');
    }
  }


  return <div className="input-field">
    <label className="active">
      <input 
        type="text"  
        id="title" 
        value={title}
        onChange={handleChange}
        onKeyPress={keyPressHandler}
      />
    </label>
  </div>
}