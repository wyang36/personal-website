import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css';

class Layout extends Component {
    //state = {
    //    showSideDrawer: false
    //}


    //sideDrawerClosedHandler = () => {
    //    this.setState({ showSideDrawer: false })
    //}

    //drawerToggleHandler = () => {
    //    this.setState((prevState) => {
    //        return { showSideDrawer: !prevState.showSideDrawer }
    //    });
    //}

    render() {
        return (
            <Aux>
                {/*<Toolbar drawerToggleClicked={this.drawerToggleHandler}></Toolbar>
                    <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} /> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;