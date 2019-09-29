import React from 'react';
import {Link} from 'react-router-dom'
class Footer extends React.PureComponent {
  render() {
    return(
    <div>  
    {window.innerWidth > 1024 && <div className="footer">
      <div className="container">
        <div className="footer-left col-xs-12 col-sm-12 col-sm-7">
          <ul>
            <li>
              <a href="/about-us">About Ennays</a>
            </li>
            <li>
              <a href="/terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy (New)</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://jobs.lever.co/hotstar"
                target="_blank"
              >
                Careers
              </a>
            </li>
          </ul>
          <p className="copyright">
            © 2019 Ennays. All Rights Reserved. ennays video and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of,ennays, Inc. All rights reserved.
          </p>
        </div>
        <div className="footer-right col-xs-12 col-sm-12 col-sm-5">
          <div className="app-unit col-xs-8">
            <div className="store-wrapper">
              <p>Ennays App</p>
              <a
                className="playstore"
                href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
                target="_blank"
              />
              <a
                className="appstore"
                href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
                target="_blank"
              />
            </div>
          </div>
          <div className="social-unit col-xs-3">
            <div>
              <p>Connect with us</p>
              <i className="fab fa-google mr-2" />
              <i className="fab fa-facebook-f mr-2" />
            </div>
          </div>
        </div>
      </div>
      </div>}

      {window.innerWidth < 1025 && 
      <div>
        <p className="copyright">
            {/* © 2019 Ennays. All Rights Reserved. */}
          </p>
         
      <div class="navbar-b">
      <Link to="/">Ennays</Link>
      <Link to="/viewcategory">All Category</Link>
      {window.innerWidth > 767 && <div><Link to="/pricing">Pricing</Link>
      <Link to="/support">Support</Link></div>}
      <Link to="/signin">Login</Link>
      
    </div>
</div>
      }
    </div>)
  }
}

export default Footer;
