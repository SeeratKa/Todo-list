import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (

    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="/">
              <strong>{props.title}</strong> </a>
          </div>
        </nav>
      </header>
    </div>

  )
}
Header.defaultProps = {
  title: "your title",
  searchbar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}
