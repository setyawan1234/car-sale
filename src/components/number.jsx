import React from 'react'

export const Number = (props) => {
    const {number} = props;
    const formatNumber = new Intl.NumberFormat('en-US').format(number);
  return (
    <div>{formatNumber}</div>
  )
}
