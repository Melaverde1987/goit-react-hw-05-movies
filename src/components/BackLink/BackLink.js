import { BsArrowLeft } from 'react-icons/bs';
import { ArrowLink } from './BackLink.styled';

export const BackLink = ({ to = '/', children }) => {
  return (
    <ArrowLink to={to}>
      <BsArrowLeft />
      {children}
    </ArrowLink>
  );
};
