import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

function App() {

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <div>
      <h1>Smurfs!</h1>
      <SmurfForm />
      <h3>Smurf List!</h3>
      <SmurfList />
    </div>
  )
}

export default App;