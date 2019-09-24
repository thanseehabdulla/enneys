import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.PureComponent {


    render(){
        return(
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
            </div>
        )
    }
}


export default Player