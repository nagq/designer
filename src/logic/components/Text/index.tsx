import type { IText } from './types';

const Button: React.FC<IText> = (props) => {
  const { children } = props;

  return (
    <span>{ children }</span>
  );
};

export default Button;
