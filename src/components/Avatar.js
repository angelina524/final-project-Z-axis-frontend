import React, { memo } from 'react'
import Animal from 'react-animals'
import PropTypes from 'prop-types'

const Avatar = ({ size }) => {
  return <Animal size={size} />
}

Avatar.propTypes = {
  size: PropTypes.string
}

export default memo(Avatar)
