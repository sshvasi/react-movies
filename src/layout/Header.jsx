const Header = () => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper">
        <a
          href="https://sshvasi.github.io/react-movies/"
          className="brand-logo left"
        >
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/sshvasi/react-movies">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
