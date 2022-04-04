import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}

// useActions Hooks는 액션 생성 함수를 액션을 디스패치하는 함수로 변환해 준다. 액션 생성 함수를 사용해 
// 액션 객체를 만들고 이를 스토어에 디스패치하는 작업을 해주는 함수를 자동으로 만들어 주는 것이다. 
// useActions는 두가지의 파라미터가 필요하다. 첫번째 파라미터는 액션 생섬 함수로 이루어진 배열이다. 
// 두번째 파라미터는 deps 배열이며 이 배열안에 들어있는 원소가 바뀌면 행션을 디스패치 하는 함수로 새로 만들게 된다.