import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';


//Mui
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

//기존데이터 서버 -> DB로 받아올것이므로 삭제...

class App extends Component {

  //서버로부터 받는 데이터 처리
  state = {
    customers: ""
  }

  //리액트 라이프사일클에 대한 내장 메소드   가장 마지막에 실행됨
  componentDidMount() {
    //메소드 chaining 방식 .then()
    this.callApi()
      .then(res => this.setState({ customers: res }))      //state에 넘기는거 setStat();      customers? customer?
      .catch(error => console.log(error));                 //예외처리  그냥 에러보여주는거임
  }

  //메소드선언
  //api값을 통해서 setupProxy의 경로와 동일하게 해 뭐?    async/await 키워드를 통한 비동기 코딩
  callApi = async () => {
    const response = await fetch('/api/customers')
    const body = await response.json();
    return body;
  }

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
          //비동기식 처리...  서버에서 데이터 넘겨주기 이전에 클라가 돌아가면 에러발생... 기다리는 코드 임시해결

          this.state.customers ? this.state.customers.map(c => {
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
          }) : ""
        }

      </div>
    );
  }
}



export default App;
