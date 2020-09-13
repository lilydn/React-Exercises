import React from 'react';
import './App.css';
import Card from './Card';
import TextContents from './TextContents';

// class component
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Card imageUrl="https://picsum.photos/300/200?random=1">
          <TextContents 
            title="Some Title 💁‍♀️"
            description="Some description"
            firstLink="SHARE"
            secondLink="EXPLORE"
          />
        </Card>
        <Card imageUrl="https://picsum.photos/300/200?random=2">
          <TextContents 
            title="Cool Title 😎"
            description="Cool description"
            firstLink="JOIN"
            secondLink="DISCOVER"
          />
        </Card>
        <Card imageUrl="https://picsum.photos/300/200?random=3">
          <TextContents 
            title="Funny Title 😄"
            description="Funny description"
            firstLink="CONTACT"
            secondLink="LEARN MORE"
          />
        </Card>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Card imageUrl="https://picsum.photos/300/200?random=1">
//         <TextContents 
//           title="Some Title 💁‍♀️"
//           description="Some description"
//           firstLink="SHARE"
//           secondLink="EXPLORE"
//         />
//       </Card>
//       <Card imageUrl="https://picsum.photos/300/200?random=2">
//         <TextContents 
//           title="Cool Title 😎"
//           description="Cool description"
//           firstLink="JOIN"
//           secondLink="DISCOVER"
//         />
//       </Card>
//       <Card imageUrl="https://picsum.photos/300/200?random=3">
//         <TextContents 
//           title="Funny Title 😄"
//           description="Funny description"
//           firstLink="CONTACT"
//           secondLink="LEARN MORE"
//         />
//       </Card>
//     </div>
//   );
// }


export default App;
