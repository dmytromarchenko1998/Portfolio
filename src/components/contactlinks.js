import React from 'react';

const ContactLinks = ({ selected, toggle, unToggle }) => {
  return (
    <div className="contact-info">
      <div onClick={() => {toggle('linkedin', 'click')}} onMouseLeave={() => {unToggle('linkedin', 'hover')}} onMouseEnter={() => {toggle('linkedin', 'hover')}} className="linkedin link"></div>
      <div onClick={() => {toggle('github', 'click')}} onMouseLeave={() => {unToggle('github', 'hover')}} onMouseEnter={() => {toggle('github', 'hover')}} className="github link"></div>
      <div onClick={() => {toggle('mail', 'click')}} onMouseLeave={() => {unToggle('mail', 'hover')}} onMouseEnter={() => {toggle('mail', 'hover')}} className="mail link"></div>
      <div onClick={() => {toggle('phone', 'click')}} onMouseLeave={() => {unToggle('phone', 'hover')}} onMouseEnter={() => {toggle('phone', 'hover')}} className="phone link"></div>
    </div>
  )
}

module.exports = ContactLinks;