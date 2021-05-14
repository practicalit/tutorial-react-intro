import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errorOccured: false
        }
    }

    static getDerivedStateFromError(error) {
        return {errorOccured: true};
    }

    componentDidCatch(error, info) {
        console.log("Yeah, error happened");
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.errorOccured) {
            return <h1>Ooops.. something went wrong, try in a bit..</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
