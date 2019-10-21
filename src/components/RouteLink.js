import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import HeaderLinks from './HeaderLinks';

const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <HeaderLinks onClick={onClick} selected={selected}>
      {name}
    </HeaderLinks>
  </Box>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
