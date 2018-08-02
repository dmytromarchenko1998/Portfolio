import React from 'react';

const ContactLinks = ({ selected, toggle, unToggle }) => {
  return (
    <div className="contact-info">
      <div onClick={() => {this.toggle('linkedin', 'click')}} onPointerLeave={() => {this.unToggle('linkedin', 'hover')}} onPointerEnter={() => {this.toggle('linkedin', 'hover')}} className="linkedin link"></div>
      <div onClick={() => {this.toggle('github', 'click')}} onPointerLeave={() => {this.unToggle('github', 'hover')}} onPointerEnter={() => {this.toggle('github', 'hover')}} className="github link"></div>
      <div onClick={() => {this.toggle('mail', 'click')}} onPointerLeave={() => {this.unToggle('mail', 'hover')}} onPointerEnter={() => {this.toggle('mail', 'hover')}} className="mail link"></div>
      <div onClick={() => {this.toggle('phone', 'click')}} onPointerLeave={() => {this.unToggle('phone', 'hover')}} onPointerEnter={() => {this.toggle('phone', 'hover')}} className="phone link"></div>
    </div>
  )
}

module.exports = ContactLinks;