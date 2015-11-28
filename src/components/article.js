import React, {Component, PropTypes} from 'react'


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }
    render() {
        const {article} = this.props
        if (!article) return <h1>placeholder</h1>
        return (
            <div>
                <h1 ref = "header">{article.title}</h1>
                text:
                <section>
                    {article.text}
                </section>
            </div>

        )
    }
}

export default Article