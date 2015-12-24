require('normalize.css');
require('styles/app.scss');

import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <h1>{this.props.heading}</h1>
        );
    }
}

AppComponent.defaultProps = {
    heading: 'Jon\'s Kickstarter Project'
};

export default AppComponent;
