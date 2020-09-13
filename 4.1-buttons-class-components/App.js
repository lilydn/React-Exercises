import React from 'react';
import './App.css';
import Button from './Button';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button text="important" fontWeight="bold"/>
        <Button text="not important" />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Button text="important" fontWeight="bold"/>
//       <Button text="not important" />
//     </div>
//   );
// }

export default App;
