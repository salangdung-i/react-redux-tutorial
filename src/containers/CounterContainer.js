import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);

// connect 함수를 사용할 떄는 일반적으로 위 코드와 같이 mapStateToProps와 mapDispatchToProps를 미리 선언해 놓고 사용한다. 하지만 connect 함수 내부에 익명 함수 
// 형태로 선언해도 문제가 되지 않는다. 
// 취향에 따라 아래처럼 작성하기도 한다. 

/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(CounterContainer);
*/

// 컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고 dispatch로 감싸는 작업이 조금 번거로울수 도 있다. 특히 액션 행성 함수의 갯수가 많아진다면 더더욱 그럴것이다. 
// 이와 같은 경우에는 리덕스에서 제공하는 bindActionCreators 유틸 함수를 사용하면 간편하다. 

/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);
*/

// 위의 코드보다 좀더 편한 버전 
// 바로 mapDispacthToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어주는 것 
// 이렇게 두번째 파라미터를 아예 객체 형태로 넣어주면 Connect함수가 내부적으로 bindActionCreators 작업을 대신해준다. 
/*
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
*/