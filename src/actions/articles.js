import Dispatcher from '../Dispatcher'
import {Action} from './action'
import {ADD_ARTICLE} from './constants'

export const addArticle = ({title, text}) => {
    Dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}