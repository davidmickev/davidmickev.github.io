import React from 'react'
import './index.css'

function randColor() {
  return String("#" + Math.floor(Math.random() * 16777215).toString(16));
}

export default randColor;