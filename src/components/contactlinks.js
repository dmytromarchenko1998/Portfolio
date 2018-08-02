import React from 'react';

const ContactLinks = ({ selected, toggle, unToggle }) => {
  return (
    <div className="contact-info">
      <div onClick={() => {toggle('linkedin', 'click')}} onPointerLeave={() => {unToggle('linkedin', 'hover')}} onPointerEnter={() => {toggle('linkedin', 'hover')}} className="linkedin link"></div>
      <div onClick={() => {toggle('github', 'click')}} onPointerLeave={() => {unToggle('github', 'hover')}} onPointerEnter={() => {toggle('github', 'hover')}} className="github link"></div>
      <div onClick={() => {toggle('mail', 'click')}} onPointerLeave={() => {unToggle('mail', 'hover')}} onPointerEnter={() => {toggle('mail', 'hover')}} className="mail link"></div>
      <div onClick={() => {toggle('phone', 'click')}} onPointerLeave={() => {unToggle('phone', 'hover')}} onPointerEnter={() => {toggle('phone', 'hover')}} className="phone link"></div>
    </div>
  )
}

module.exports = ContactLinks;