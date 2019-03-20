import React, { Component } from 'react'; // JSX 를 사용하려면, 꼭 React 를 import 해주어야 합니다.
//import logo from './logo.svg';
import './App.css';
//import MyName from './MyName'
//import Counter from './Counter'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

//이렇게, import 를 하는 것은, 우리가 webpack 을 사용하기에 가능한 작업입니다.

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0
        , name: 'Shawn'
        , phone: '010-123-4567'
      },
      {
        id: 1
        , name: 'Sumin'
        , phone: '010-891-0123'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
      //배열에는 filter 라는 내장함수가 있는데, 이 함수는 특정 조건에
      //부합되는 원소들만 뽑아내서 새 배열을 만들어줍니다.
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
        : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate = {this.handleCreate}
        />
        <PhoneInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

/*
클래스형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 하구요,
그리고 그 내부에서는 JSX 를 return 해주어야 합니다.
위에 보이는 HTML 같은 코드가 바로, JSX 입니다.
*/

export default App; //우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줍니다.
