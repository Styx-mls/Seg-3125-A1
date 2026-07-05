import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div>
      <div
        className="h-box p-4 border-bottom shadow-sm"
        style={{ marginBottom: "100px" }}
      >
        <div className="d-flex align-items-center gap-3">
          <h4 className="m-0">Portfolio</h4>
          <h5 className="m-0">About Me</h5>
        </div>
      </div>

      <div
        className="intro-box p-4 border rounded shadow-sm w-75 mx-auto d-flex align-items-start pt-5"
        style={{
          width: "fit-content",
          margin: "0 auto",
          gap: "100px",
          maxWidth: "900px",
          marginBottom: "100px",
        }}
      >
        <h2 className="text-start">
          Eric
          <br />
          Preuss
        </h2>

        <p>
          I am a student of Software Engineering at the University of Ottawa.
          Interested in machine learning, UI/UX design, and full-stack
          development. I am currently developing my frontend skills through SEG
          3125.
        </p>
      </div>

      <div
        className="p-box p-4 border rounded shadow-sm mt-5"
        style={{ width: "fit-content", margin: "0 auto", minWidth: "900px" }}
      >
        <h3 className="mb-4 text-start">Projects</h3>

        <div
          className="d-flex gap-4 justify-content-center flex-wrap"
          style={{ marginTop: "20px" }}
        >
          {/* Service Site */}
          <div className="card" style={{ width: "11rem" }}>
            <img
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              className="card-img-top"
              alt="Bike repair project"
              style={{ height: "160px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">Service Site</h5>

              <p className="card-text">
                Bike repair service website with walk-in information and
                appointment booking.
              </p>

              <a
                href="https://bike-repair-site.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Site
              </a>
            </div>
          </div>

          {/* Memo */}
          <div className="card" style={{ width: "11rem" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1676879781067-75642b342eb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVtb3J5fGVufDB8fDB8fHww"
              className="card-img-top"
              alt="Memo memory game"
              style={{ height: "160px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">Memo</h5>

              <p className="card-text">
                Browser-based short-term memory game with multiple difficulty
                levels and a dedicated Kid Mode.
              </p>

              <a
                href="https://memo-six-tau.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Site
              </a>
            </div>
          </div>

          {/* E-Commerce */}
<div className="card" style={{ width: "11rem" }}>
  <img
    src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"
    className="card-img-top"
    alt="E-Commerce project"
    style={{ height: "160px", objectFit: "cover" }}
  />

  <div className="card-body">
    <h5 className="card-title">E-Commerce Site</h5>

    <p className="card-text">
      Soccer equipment e-commerce site with product filtering, cart, checkout,
      and survey.
    </p>

    <a
      href="https://goalzone-ecommerce.vercel.app"
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      View Site
    </a>
  </div>
</div>


          {/* Analytics */}
          <div className="card" style={{ width: "11rem" }}>
            <img
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QW5hbHl0aWNzfGVufDB8fDB8fHww"
              className="card-img-top"
              alt="Analytics project"
              style={{ height: "160px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">Analytics Site</h5>

              <p className="card-text">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
