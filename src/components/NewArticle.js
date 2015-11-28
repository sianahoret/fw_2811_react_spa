import React, {Component, PropTypes} from 'react'
import {addArticle} from '../actions/articles'

const style = {
    display: 'inline-block',
    width: 300,
    height: 50,
    backgroundColor: 'red'
}

class NewArticle extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            text: ''
        }
    }
    render() {
        return(
            <div>
                title: <input onChange = {this.change('title')} value = {this.state.title}/>
                text: <input onChange = {this.change('text')} value = {this.state.text}/>
                <div style= {style} onClick = {addArticle.bind(this, this.state)}>
                    add article
                </div>
            </div>
        )
    }
    change = (attr) => {
        return (ev) => {
            this.setState({
                [attr] : ev.target.value
            })
        }
    }
}

export default NewArticle