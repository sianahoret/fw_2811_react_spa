import React, {Component, PropTypes} from 'react'

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                some layout
                {this.props.children}
            </div>
        )
    }
}

export default App