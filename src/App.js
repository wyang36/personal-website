import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Content from './containers/Content/Content';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Content />
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
