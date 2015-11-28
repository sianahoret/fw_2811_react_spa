import Dispatcher from '../Dispatcher'
import {ADD_ARTICLE} from './constants'

export const addArticle = ({title, text}) => {
    Dispatcher.dispatch({
        actionType: ADD_ARTICLE,
        data: {title, text}
    })
}