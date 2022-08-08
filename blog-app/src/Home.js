import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(49);
    const handleClick = () =>{
        setName('Joffery');
        setAge(17);
    }
  return (
    <div className="homePage">
      <h2>Home Page</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
