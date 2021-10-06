import Componenet from "./profile/Component"
import './App.css';

function App() {
  const handleName = (fullName) => alert(`Hi i am ${fullName}`);
  return (
    <div className="App">
   <Componenet
    fullName="mohamed wassim oueslati"
    bio="curently learning full stack js in gomycode"
    profession=" a student"
    handleName={handleName}
    >

<img src="/money heist.jpg" alt="money heist"/>
   </Componenet>
    

    </div>
  );
}

export default App;
