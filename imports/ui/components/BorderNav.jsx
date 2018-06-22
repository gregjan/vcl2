import React from 'react';
import PropTypes from 'prop-types';

import { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';

export default function BorderNav(props) {
  return (
    <Nav id={props.navId}>
      <NavIcon>
        <SvgIcon size={20} icon={ic_aspect_ratio} />
      </NavIcon>
      <NavText>
        <a
          href="#"
          style={{ color: 'white' }}
          onClick={props.funct}
        >
          {props.navText}
        </a>
      </NavText>
    </Nav>
  );
}

BorderNav.propTypes = {
  navId: PropTypes.string.isRequired,
  navText: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
};
