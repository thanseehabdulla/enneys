import React from 'react'
import ViewAll from '../Components/ViewAll'
// header
import NewComponent from '../Components/Topbar';
import Footer from '../Components/Footer';
import viewalldata from '../datas/viewAllData'




class ViewAllContainer extends React.Component{
    render(){



        return(
            <div className="App">
                <NewComponent/>
                 <ViewAll data={viewalldata}/>
                 <Footer/>
            </div>
        )
    }
}

export default ViewAllContainer