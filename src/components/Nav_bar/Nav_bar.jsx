import logo from "../../assets/images/logo.svg";
import "./Nav_bar.scss";

export default function Nav_bar() {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo" className="logo" />

        <div className="navbar">
          <input type="checkbox" id="navbar-input" />

          <section className="navbar-pc">
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </section>

          <label htmlFor="navbar-input" className="navbar-menu-btn">
            <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
              <g fill="#00001A" fillRule="evenodd">
                <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
                <path d="M0 0h40v3H0z" />
              </g>
            </svg>
          </label>

          <label htmlFor="navbar-input" className="navbar-overlay"></label>

          <section className="navbar-mobile">
            <label htmlFor="navbar-input" className="navbar-close-btn">
              <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
                <g fill="#00001A" fillRule="evenodd">
                  <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                  <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                </g>
              </svg>
            </label>
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
}
