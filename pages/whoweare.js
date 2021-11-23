import Head from 'next/head'

let About = () => {
  const element = (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Smarbits - About Us</title>
        <link rel="canonical" href="https://smartbits.co.in/whoweare/" />
        <meta name="description" content="Providing best possible solutions in the industry." />
        <meta name="keywords" content="Smarbits, Smartbit, Software, Computer, Consultancy" />
        <meta name="country" content="IN" />
        <meta name="language" content="en-IN" />
      </Head>
      <body>
       <div className="jumbotron">
          <h1 className="display-4">Who We Are!!</h1>
          <p className="lead">We are a small yet ambitious group of techies trying to bring ground breaking changes in the industry. We are passionate about what we do and how we do it. Trust is the biggest factor to build long term relationships and we thrive on that.</p>
          <hr className="my-4" />
          <p>We pick up all sorts of software developmental projects. We are all ears to hear from you.</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mail us at... <i className="float-right bi bi-envelope"></i></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Waiting for our inboxes to get flooded</h6>
                  <p className="card-text">For business queries: info.bussiness@smartbits.co.in</p>
                  <p className="card-text">For texh queries: info.tech@smartbits.co.in</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Calling... <i className="float-right bi bi-telephone"></i></h5>
                  <h6 className="card-subtitle mb-2 text-muted">A phone call away</h6>
                  <p className="card-text">+918331862438</p>
                  <p className="card-text">+917506746321</p>
                  <p className="card-text">+919372123930</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Drop in by... <i className="float-right bi bi-signpost"></i></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Wish to visit us physically</h6>
                  <p className="card-text">JFF9+C29, Action Area IIC, Newtown, Kolkata - 700156. West Bengal.</p>
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

export default About;