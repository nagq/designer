import { Button as AntdButton } from 'antd';
import type { IButton } from './types';

const Button: React.FC<IButton> = (props) => {
  const { children } = props;

  return (
    <AntdButton>{ children }</AntdButton>
  );
};

export default Button;
