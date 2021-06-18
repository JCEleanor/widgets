import React, { useState, useEffect } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.addEventListener(
      'click',
      () => {
        setOpen(false)
      },
      { capture: true }
    )
  }, [])
  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return (
        <div
          style={{ color: 'gray' }}
          key={option.value}
          className="item"
          onClick={() => {
            onSelectedChange(option)
          }}
        >
          {option.label}
        </div>
      )
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  })
  return (
    <div className="ui form container">
      <div className="field">
        <label className="label">Select an item</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
