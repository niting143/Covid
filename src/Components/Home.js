import React, { Component } from 'react'
import Navigation from './Navigation/Navigation';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './Backdrop/Backdrop'
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sideDrawerOpen: false

        }


    }



    shouldComponentUpdate() {
        return true
    }




    drawertogglehandler = () => {
        this.setState(prev => {
            return {
                sideDrawerOpen: !prev.sideDrawerOpen
            };
        })
    }

    backdrophandler = () => {
        this.setState(() => {
            return {
                sideDrawerOpen: false
            }
        },
        )
    }

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop clicks={this.backdrophandler} />
        }

        return (
            <div>


                <Router>
                    <Navigation clicks={this.drawertogglehandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}



                    <Switch>
                        <Route exact path='/' component={Slider} />
                        <Route path='/covidUpdates' component={Cards} />
                    </Switch>

                </Router>


            </div>
        );
    }
}

export default Home

