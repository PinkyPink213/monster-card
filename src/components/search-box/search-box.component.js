import React from 'react';
import './search-box.styles.css';
export default function SearchBox(props) {
    const { className,onChangeHandler,placeHolder }= props

  return (
    <input
          className = {`search-box ${className}`}
          type = "search"
          placeholder = {placeHolder}
          onChange = {onChangeHandler}
        />
  )
}

