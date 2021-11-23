import Link from 'next/link'

let Header = () => {
    
    const element = (
        <nav className="navbar navbar-expand-lg navbar-light static-top" style={{backgroundColor: "#427BD2"}}>
            <div className="container">
                <Link href="/">
                <a className="navbar-brand">
                    <img src={"/logo.png"} alt="" width="200" height="30" />
                </a>
                </Link>
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                            <a className="nav-link text-white text-right" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/whoweare">
                            <a className="nav-link text-white text-right">Who We Are</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/whatwedo">
                            <a className="nav-link text-white text-right">What We Do</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    return element;
    
}

export default Header;