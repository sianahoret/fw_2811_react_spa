import React, {Component} from 'react'
import Article from './article'
import NewArticle from './NewArticle'

const articlesData = [{
    title: 'title',
    text: 'some text'
}, {
    title: 'some other',
    text: 'Lorem ipsum'
}]

class App extends Component {
    render() {
        const articles = articlesData.map((article) => {
            return <li key= {article.title}><Article article = {article}/></li>
        })
        return(
            <div>
                <h1>News App!</h1>
                <ul>
                    {articles}
                </ul>
                <NewArticle />
            </div>
        )
    }
}

export default App