import React from 'react';
import Empty from './Empty';
import Loading from './Loading';

const LoadData = (Wrapper: any) => {
  return (props: any) =>
    props.data ? Object.keys(props.data).length > 0 ? <Wrapper {...props} /> : <Empty /> : <Loading />
}

export default LoadData;
