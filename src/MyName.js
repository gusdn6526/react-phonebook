import React , {Component} from 'react'

class MyName extends Component {
  render() {
    return (
      <div>
        Hello, My name is <b>{this.props.name}</b>.
      </div>
    );
  }
}

//자신이 받아온 props 값은 this. 키워드를 통하여 조회 할 수 있습니다.
export default MyName;
