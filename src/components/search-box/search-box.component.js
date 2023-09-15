import React from 'react';
import './search-box.styles.css';
export default function SearchBox({ className,onChangeHandler,placeHolder }) {
  return (
    <input
          className = {`search-box ${className}`}
          type = "search"
          placeholder = {placeHolder}
          onChange = {onChangeHandler}
        />
  )
}

