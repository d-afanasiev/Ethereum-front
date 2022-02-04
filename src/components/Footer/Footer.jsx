import Logo from "../Logo";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__flex">
        <Logo />
        <div>
          <p className="footer_text">All rights reserved by ThemeTags</p>
        </div>
        <div>
          <p className="footer_text">Copyrights © 2019.</p>
        </div>
      </div>
    </footer>
  );
}
