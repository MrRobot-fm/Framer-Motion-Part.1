import { NavLink } from 'react-router-dom';
import { LinkProps } from './../types/Props';

const Link = ({ path, active, name }: LinkProps) => {
  return (
    <>
      <NavLink to={path} className={active}>
        {name}
      </NavLink>
    </>
  );
};

export default Link;
