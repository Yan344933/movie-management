import React from 'react'

const Header = (props) => {
  return (
      <header className="grid grid-col-1-200px">
                <h1>Movie Managment System</h1>
                <button className="btn btn-primary grid-x-right" type="button" onClick={props.toggleForm}> Add movie</button>
        </header>
  );
};

export default Header;
