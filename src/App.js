import React from 'react';
// import ReactPlayer from 'react-player';
// import Counter from './components/Counter'
import { listItems, MoviesList } from "./components/ListDemo";
import DynamicMoviesList from "./components/dynamicListsDemo/DynamicMoviesList.js";
import './App.css';



// function GreetingMessage() {
//   const message = 'Hello Andru!';
//   return (
//     <div>
//       <u>{message}</u>
//     </div>
//   );
// }

// function WelcomeBlock() {
//   return (
//     <div>
//       <GreetingMessage />
//       <em>Welcome to our cool page. It is pleasure to have you here!</em>
//     </div>
//   );
// }

// function User(props) {
//   console.log(props);
//   return <div>User is: {props.firstName}</div>;
// }

// function UsersList(props) {
//   return <div> {props.children} </div>;
// }
 
// class Color extends React.Component {
//   render() {
//     return <div>{this.props.favColor}</div>;
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//       <GreetingMessage />
//       <hr />
//       <WelcomeBlock />
//       <hr />
//       <User firstName="Fervull" />
//       <hr />
//       <UsersList>
//         <User firstName="Harper" />
//         <User firstName="Mike" />
//         <User firstName="Alvaro" />
//         <User firstName="Andrea" />
//       </UsersList>
//       <hr />
//       <Color favColor="blue" />
//       <hr />
//       <ReactPlayer 
//         url="https://vimeo.com/channels/top/22439234" 
//         playing
//         controls
//         volume="0.5" 
//         />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>{listItems}</ul>
        <div>
          <MoviesList />
        </div>
        <hr />
        <DynamicMoviesList /> {/* <= instantiate the component */}
      </div>
    );
  }
}

export default App;
