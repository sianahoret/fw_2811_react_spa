import Dispatcher from '../Dispatcher'
import {Action, asyncAC} from './action'
import {loadAll} from './api/articles'
import {
    ADD_ARTICLE,
    LOAD_ALL_ARTICLES
} from './constants'

export const addArticle = ({title, text}) => {
    Dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}

export const loadAllArticles = () => asyncAC(LOAD_ALL_ARTICLES, loadAll())