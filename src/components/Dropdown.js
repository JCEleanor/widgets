import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.addEventListener(
      'click',
      (e) => {
        if (ref.current.contains(e.target)) return
        setOpen(false)
      },
      { capture: true }
    )
  }, [])
  const renderOptions = options.map((option) => {
    const color = option.value === selected.value ? `gray` : ``
    return (
      <div
        style={{ color: color }}
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
  console.log(ref.current)

  return (
    <div ref={ref} className="ui form container">
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
