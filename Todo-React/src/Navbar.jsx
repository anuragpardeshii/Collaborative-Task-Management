function Navbar() {
    return (
      <>
        <nav className="navbar sticky-top bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <button className="btn">
                    Task Management Application
                </button>
            </a>
            <a className="navbar-brand" href="#">
            <button type="button" className="btn btn-success">
                    Login/Signup
                </button>
            </a>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  