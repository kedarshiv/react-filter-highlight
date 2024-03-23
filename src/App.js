import React, { useState } from 'react';
import './style.css';

const array = ['tomato', 'broccoli', 'apple', 'potato'];

export default function App() {
  const [filterData, setFilterData] = useState(array);
  const [textD, setText] = useState('');
  const handleFilter = (e) => {
    const searchValue = e.target.value;
    setText(searchValue);
    setFilterData(() => {
      return array.filter((value) => value.includes(searchValue));
    });
  };

  const highlightMatch = (text) => {
    if (!textD) return text;
    // const regex = new RegExp(`(${textD})`, 'gi');

    // return text.split(regex).map((part, index) =>
    //   regex.test(part) ? (
    //     <span key={index} className="highlight">
    //       {part}
    //     </span>
    //   ) : (
    //     part
    //   )
    // );

    const indexOf = text.indexOf(textD);
    console.log(indexOf, indexOf + text.length);
    return text.split('').map((t, i) => {
      return i >= indexOf && i < indexOf + textD.length ? (
        <span className="highlight">{t}</span>
      ) : (
        t
      );
    });
  };

  return (
    <div>
      <input placeholder="search" onChange={handleFilter} type="text" />
      <ul>
        {filterData.map((veg, index) => (
          <li key={index}>{highlightMatch(veg)}</li>
        ))}
      </ul>
    </div>
  );
}
