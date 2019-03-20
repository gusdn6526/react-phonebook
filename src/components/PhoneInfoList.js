import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined.'),
    onUpdate: () => console.warn('onUpdate not defined.')
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
          />
        )
      );
    return(
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;

//꼭 기억해야 할 점은 배열을 렌더링 하게 될 때에는 꼭 고유값을 key 로 사용해야 한다는 것 입니다.
