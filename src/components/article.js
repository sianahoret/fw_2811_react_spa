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
    componentDidMount() {
        const {header} = this.refs
        header.addEventListener('tuouchStart', this.onTouchStart)
    }
    componentWillUnmount() {
        const {header} = this.refs
        header.removeEventListener('tuouchStart')
    }
    render() {
        const {article} = this.props

        return (
            <div>
                <h1 ref = "header">{article.title}</h1>
                {this.props.children}
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

    onTouchStart = (ev) => {
        this.setState({

        })
    }
}

export default Article