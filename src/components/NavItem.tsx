import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  link: string,
  text?: string
}

function NavItem(props: Props){
  return (
    <Link to={props.link}>
        <li>{props.text}</li>
    </Link>
  );
}

export default NavItem;
