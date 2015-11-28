import React, {Component} from 'react'
import Article from '../article'
import {articles} from '../../stores'

class IndexPage extends Component {
    constructor() {
        super()
        this.state = this.getArticlesState()
    }

    componentDidMount() {
        articles.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articles.removeChangeListener(this.changeArticles)
    }

    render() {
        const {articles, error, loading} = this.state
        if (loading) return <h1>LOADING...</h1>
        if (error) return <h1>Error: {error.message}</h1>

        const articleItems = articles.map((article) => {
            return <li key= {article.title}><Article article = {article}/></li>
        })
        return(
            <div>
                <h1>News App!</h1>
                <ul>
                    {articleItems}
                </ul>
            </div>
        )
    }

    changeArticles = () => {
        this.setState(this.getArticlesState())
    }

    getArticlesState() {
        return {
            articles: articles.getOrLoadAll(),
            loading: articles.loading,
            error: articles.error
        }
    }
}

export default IndexPage