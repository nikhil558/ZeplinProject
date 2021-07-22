import Header from "../Header";
import "./index.css";

const HomePage = (props) => {
  const { onClickLogout } = props;
  return (
    <>
      <Header onClickLogout={onClickLogout} />
      <div className="section">
        <div>
          <img
            src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626798591/i-phone-body_f71xe2.png"
            alt="img1"
          />
        </div>
        <div className="section-items">
          <h1 className="Travel-the-world-m">
            Travel the world & meet new friends.
          </h1>
          <p className="Create-custom-landin">
            Create custom landing pages with Omega that convert more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
          <div className="Rectangle">
            <img
              src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626800622/email-84_dfnysp.png"
              alt="img"
              className="email-84"
            />
            <p className="Email-address">Email address</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626798652/rectangle-copy-4_almj7p.png"
              alt="img1"
              className="Rectangle-Copy-4"
            />
            <img
              src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626799331/rectangle-copy_ekr6ey.png"
              alt="img2"
              className="Rectangle-Copy"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626799465/rectangle-copy-3_z30jer.png"
              alt="img3"
              className="Rectangle-Copy-3"
            />
            <img
              src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626798652/rectangle-copy-4_almj7p.png"
              alt="img4"
              className="Rectangle-Copy-2"
            />
          </div>
        </div>
        <div className="section4-content-container">
          <h1 className="See-the-world-spen">
            See the world & spend less always.
          </h1>
          <p className="Create-custom-landin">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section4-content-container">
          <h1 className="Improving-your-trave">
            Improving your travel experience.
          </h1>
          <p className="Create-custom-landin">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>
          <button className="BG" type="button">
            <span className="Get-this-app">Get this app</span>
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626799285/image_zapw16.png"
            alt="img5"
            className="Image"
          />
        </div>
      </div>
      <div className="store-container">
        <h1 className="Get-the-app-now">Get the app now</h1>
        <p className="Create-custom-landin">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </p>
        <div>
          <img
            src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626798719/app-store_cf2ivf.png"
            alt="img7"
            className="App-Store"
          />
          <img
            src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626798747/play-store_tl3clz.png"
            alt="img7"
            className="Play-Store"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
