import "./index.css";

const Header = (props) => {
  const { onClickLogout } = props;
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626856193/omega-copy-2_k2y31n.png"
          alt="website logo"
        />
        <div className="container">
          <ul className="nav-menu">
            <li className="nav-link">demos</li>

            <li className="nav-link">Pages</li>

            <li className="nav-link">support</li>
          </ul>
          <button type="button" className="BG" onClick={onClickLogout}>
            Logout
          </button>
        </div>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
