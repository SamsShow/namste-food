import React, { useState } from 'react';


const user = ({name}) => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-2 m-2 border">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: India</h3>
      <h4>Conatct: sakshamtyagi2008@gmail.com</h4>
    </div>
  );
};

export default user;
