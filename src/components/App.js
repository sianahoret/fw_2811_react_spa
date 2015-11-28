import React, {Component} from 'react'
import Article from './article'
import NewArticle from './NewArticle'
import {articles} from '../stores'

const articlesData = [{
    title: 'title',
    text: 'some text'
}, {
    title: 'some other',
    text: 'Lorem ipsum'
}]

class App extends Component {
    constructor() {
        super()
        this.state = {
            articles: articles.getAll()
        }
        articles.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articles.removeChangeListener(this.changeArticles)
    }

    render() {
        const articles = this.state.articles.map((article) => {
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

    changeArticles = () => {
        this.setState({
            articles: articles.getAll()
        })
    }
}

export default App