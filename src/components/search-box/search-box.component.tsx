import React from 'react';
import { ChangeEvent} from 'react';
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event:ChangeEvent<HTMLInputElement>)=> void;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;

} 

export default function SearchBox({ className, placeholder, onChangeHandler }:SearchBoxProps) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler} />
  );
}
