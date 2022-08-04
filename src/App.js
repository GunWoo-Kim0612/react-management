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
      <div className="App">
        {/* ctrl + d로 인덱스 multiple 선택 가능 */}
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        ></Customer>
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        ></Customer>
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        ></Customer>
      </div>
    );
  }
}



export default App;
