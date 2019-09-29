import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

class NewComponent extends React.PureComponent {
  render() {
    return (
      <div>
        {window.innerWidth > 1022 && (
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
            <Container>
              <a className="navbar-brand" href="#">
                <Link to="/">ENNAYS</Link>
              </a>
            </Container>
          </nav>
        )}
      </div>
    );
  }
}

export default NewComponent;
