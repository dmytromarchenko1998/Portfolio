import React from 'react';

const Filler = ({name}) => {
  return (
    <div className="filler" id={`${name}filler`}>
    </div>
  )
}

module.exports = Filler;