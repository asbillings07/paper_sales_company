import PropTypes from 'prop-types'
import React from 'react'
import { StyledHeader, StyledHeading } from './style'

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      {title}
    </StyledHeader>
  );
}

export const Heading = ({title}) => {
  return (
    <StyledHeading>
      <h1>{title}</h1>
    </StyledHeading>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

Heading.propTypes = {
  title: PropTypes.string,
};