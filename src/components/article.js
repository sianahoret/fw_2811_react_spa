import React, {Component} from 'react'


class Article extends Component {
    render() {
        const {article} = this.props

        return (
            <div>
                <h1>{article.title}</h1>
                text:
                <section>
                    {article.text}
                </section>
            </div>
        )
    }
}

export default Article