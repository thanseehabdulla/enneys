import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return(
    <div className="footer">
      <div className="container">
        <div className="footer-left col-xs-12 col-sm-12 col-sm-7">
          <ul>
            <li>
              <a href="/about-us">About Enneys</a>
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
            © 2019 Enneys. All Rights Reserved. enneys video and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of,enneys, Inc. All rights reserved.
          </p>
        </div>
        <div className="footer-right col-xs-12 col-sm-12 col-sm-5">
          <div className="app-unit col-xs-8">
            <div className="store-wrapper">
              <p>Enneys App</p>
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
              <a
                className="fb"
                href="https://www.facebook.com/hotstar"
                target="_blank"
              />
              <a
                className="tw"
                href="https://twitter.com/hotstartweets"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Footer;
