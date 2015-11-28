import React, {Component} from 'react'
import Article from './article'

const article = {
    title: 'title',
    text: 'some text'
}

class App extends Component {
    render() {
        return(
            <div>
                <h1>News App!</h1>
                <Article article = {article}/>
            </div>
        )
    }
}

export default App