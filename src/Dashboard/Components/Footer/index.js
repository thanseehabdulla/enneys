import React from 'react';
import {Link} from 'react-router-dom'
class Footer extends React.PureComponent {
  render() {
    return(
    <div>  
    {window.innerWidth > 1024 && <div className="footer">
      <div className="container">
        <div className="footer-left col-xs-12 col-sm-12 col-sm-7">
          <p className="copyright">
            © 2019 Ennays. All Rights Reserved.
          </p>
        </div>
        </div>
      </div>}

      
    </div>)
  }
}

export default Footer;
