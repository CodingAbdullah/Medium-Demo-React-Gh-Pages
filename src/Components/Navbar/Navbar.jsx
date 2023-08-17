// Navbar with conditional rendering
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b>React Gh-Pages</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            window.location.pathname === '/Medium-Demo-React-Gh-Pages/' ?
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/Medium-Demo-React-Gh-Pages/"><b>Home</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Medium-Demo-React-Gh-Pages/#/login">Login</a>
                                    </li>
                                </>
                            :
                            (
                                window.location.pathname === '/Medium-Demo-React-Gh-Pages/#/login' ? 
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/Medium-Demo-React-Gh-Pages/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/Medium-Demo-React-Gh-Pages/#/login"><b>Login</b></a>
                                        </li>
                                    </>
                                :
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/Medium-Demo-React-Gh-Pages/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/Medium-Demo-React-Gh-Pages/#/login">Login</a>
                                        </li>
                                    </>
                            )
                        }
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;