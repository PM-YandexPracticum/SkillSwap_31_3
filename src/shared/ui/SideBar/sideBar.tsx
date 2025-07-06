import React from 'react';
import { Link } from 'react-router-dom';


export const SideBar = ({}) => {
  return (
    <ul>
      <li>
      <Link to='/'>
        <img
          // src={ApplicationsIcon}
          alt='Applications Icon'
          // className={styles.logo}
        />
      </Link>
      </li>
    </ul>
  )
}