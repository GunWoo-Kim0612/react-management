import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';


//함수형태 -> 클래스형태

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',      //dummy image 
  'name': '홍길동',
  'birthday': '20220101',
  'gender': '남자',
  'job': '대학생',

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <Customer
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          ></Customer>
        </p>
      </div>
    );
  }
}



export default App;
