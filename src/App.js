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

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',      //dummy image site 64/64 사이즈
    'name': '홍길동',
    'birthday': '20220101',
    'gender': '남자',
    'job': '대학생',
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',      //dummy image site 64/64 사이즈
    'name': '김길동',
    'birthday': '20220102',
    'gender': '남자',
    'job': '개발자',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',      //dummy image site 64/64 사이즈
    'name': '이길동',
    'birthday': '20220103',
    'gender': '여자',
    'job': '소프트웨어 엔지니어',
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">{

        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}>
            </Customer>
          );
        })
      }
      </div>
    );
  }
}



export default App;
