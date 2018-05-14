import React, { Component } from 'react';
import axios from '../../axios';
import Projects from '../../components/Projects/Projects';

class Portfolio extends Component {

    state = {
        projects: [],
        error: false
    }

    componentDidMount() {
        axios.get('/Projects.json?orderBy="sort"&startAt=0')
            .then(response => {
                const fetchedProjects = [];
                for (let key in response.data) {
                    fetchedProjects.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({ projects: fetchedProjects });
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    render() {
        let projects = <p style={{ textAlign: 'center' }}>Something went wrong</p>;

        if (!this.state.error) {
            projects = <Projects
                projects={this.state.projects} />;
        }

        return (
            <div>
                {projects}
            </div>
        );
    }
}

export default Portfolio;