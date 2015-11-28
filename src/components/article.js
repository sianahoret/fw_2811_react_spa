import React, {Component, PropTypes} from 'react'


class Article extends Component {
    static propTypes = {
        article: PropTypes.object
    }
    constructor() {
        super()
        this.state = {
            comment: ''
        }
    }
    render() {
        const {article} = this.props

        return (
            <div>
                <h1>{article.title}</h1>
                text:
                <section>
                    {article.text}
                </section>
                <input value={this.state.comment} onChange = {this._change.bind(this)}/>
            </div>
        )
    }

    _change(ev) {
        this.setState({
            comment: ev.target.value
        })
    }
}

export default Article