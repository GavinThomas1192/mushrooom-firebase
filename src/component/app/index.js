import React from 'react';
import { connect } from 'react-redux';
import MPost from '../mPost';


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>
                    Homepage
                </h1>
                <MPost />
            </div>
        )
    }
}

let mapStateToProps = state => ({

})

let mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);