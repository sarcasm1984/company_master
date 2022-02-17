import Link from 'next/link'

let Header = () => {

    const closeCanvas = () => {
        var btn = document.getElementById("btnClose");
        btn.click();
    }
    
    const element = (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#427BD2"}}>
            <div className="container">
                <Link href="/">
                <a className="navbar-brand">
                    <img src={"/logo.png"} alt="" width="200" height="30" />
                </a>
                </Link>
                <button id='btnToggle' className="navbar-toggler float-right" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                            <a className="nav-link text-white" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/whoweare">
                            <a className="nav-link text-white">Who We Are</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/whatwedo">
                            <a className="nav-link text-white">What We Do</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header navbar-light" style={{backgroundColor: "#427BD2"}}>
                    <Link href="/">
                    <a className="offcanvas-title navbar-brand">
                        <img src={"/logo.png"} alt="" width="200" height="30" />
                    </a>
                    </Link>
                        <button type="button" id="btnClose" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link href="/">
                            <a className="nav-link" onClick={closeCanvas}>Home</a>
                        </Link>
                        <Link href="/whoweare">
                            <a className="nav-link" onClick={closeCanvas}>Who We Are</a>
                        </Link>
                        <Link href="/whatwedo">
                            <a className="nav-link" onClick={closeCanvas}>What We Do</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;