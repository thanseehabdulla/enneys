import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './Containers/AddToDo';
import ToDoListContainer from './Containers/ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from './Components/Navigation';

import './Style/main.scss';

// header
import NewComponent from './Components/Topbar';
import Carousal from './Components/3D-Carousal';
import Player from './Components/ReactPlayer';
import Sleek from './Components/Sleek';
import SleekCards from './Components/SleekCards';
import Footer from './Components/Footer';


const CardArray = [
  {category:"History",
    data:[{
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  }
]
},
{category:"Physics",
    data:[{
    title:"edu 1",
    description:"education",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6yJz1xccezr0EnoaZfgI8-OAhKd8WqqT43sw6GzYPXpQkcAbE",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  }
]
},
{category:"School",
    data:[{
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  }
]
},
{category:"Maths",
    data:[{
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  },
  {
    title:"edu 1",
    description:"education",
    imageUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7133/557133-v",
    videoLink:"https://vimeo.com/43401199",
    paid:false
  }
]
}
]

function App() {
  return (
    <div className="App">
      {/* <Player /> */}
      {/* <Carousal /> */}

      <NewComponent />

      <Sleek />

      <Container>
        {CardArray.map(data => (
          <Row className="row">
            <Col xs={12}>
              {/* <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} /> */}
              <SleekCards data={data} />
            </Col>
          </Row>
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
