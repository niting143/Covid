import React from 'react'
import './sidedrawer.css';
import { Link } from 'react-router-dom';




const SideDrawer = props => {

  let classnames = 'side_drawer';
  if (props.show) {
    classnames = 'side_drawer open';
  }

  return (
    <nav className={classnames}>
      <div>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li><Link to={"/covidUpdates"}>COVID UPDATES</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default SideDrawer
