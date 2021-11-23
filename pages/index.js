import Head from 'next/head'
import Link from 'next/link'

let Home = () => {
  const element = (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome to Smarbits</title>
        <meta name="description" content="Providing best possible solutions in the industry." />
        <meta name="keywords" content="Smarbits, Smartbit, Software, Computer, Consultancy" />
        <meta name="country" content="IN" />
        <meta name="language" content="en-IN" />
      </Head>
      <body>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Smartbits</h1>
          <p className="lead">We help businesses drive digital innovation</p>
          <hr className="my-4" />
          <p>We are here to help businesses achieve digital transformation. To know more about us click below.</p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg" href="/whoweare">Learn more</Link>
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Simple<i className="float-right bi bi-tools"></i></h5>
                  <p className="card-text">We aim to deliver simple solutions to solve complex problems</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Seamless<i className="float-right bi bi-gear"></i></h5>
                  <p className="card-text">We aim to make the experience of our clients seamless with us</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Quality<i className="float-right bi bi-check-all"></i></h5>
                  <p className="card-text">We aim for higher standards and will not compromise on quality of deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </body>
    </>
  );

  return element;
}

export default Home;