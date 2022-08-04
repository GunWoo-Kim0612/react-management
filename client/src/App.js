import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';


//Mui
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '20220101',
    'gender': '남자',
    'job': '대학생',
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김길동',
    'birthday': '20220102',
    'gender': '남자',
    'job': '개발자',
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
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
        <Table>
          <TableHead>
            <TableBody>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableBody>
          </TableHead>
        </Table>


        {
          //loop
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
