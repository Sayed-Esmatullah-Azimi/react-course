import React from 'react'
import { useState } from 'react';
function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    function submit(){
        let Item = {name,lastName}
        console.log(Item);
    }
  return (
    <div>
      {/* <Button/> */}
      <div className="col-md-6 mx-auto">
      <h1>Submit Data To Console</h1>
        <label htmlFor="">Name:</label>
        <input placeholder='Enter the name' type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' className='form-control' /><br /><br />
        <label htmlFor="">LastName</label>
        <input placeholder='Enter the lastname' type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} name='lastname' className='form-control' /><br /><br />
            <button onClick={submit} className='btn btn-info'>Submit</button>
      </div>
    </div>
  )
}

export default Form


