import Dispatcher from '../Dispatcher'
import {Action} from './action'
import {loadAll} from './api/articles'
import {
    ADD_ARTICLE,
    LOAD_ALL_ARTICLES_START,
    LOAD_ALL_ARTICLES_SUCCESS,
    LOAD_ALL_ARTICLES_FAIL
} from './constants'

export const addArticle = ({title, text}) => {
    Dispatcher.dispatch(new Action(ADD_ARTICLE, {title, text}))
}

export const loadAllArticles = () => {
    console.log('---', 123);
    Dispatcher.dispatch(new Action(LOAD_ALL_ARTICLES_START))
    loadAll().then(
        (response) => Dispatcher.dispatch(new Action(LOAD_ALL_ARTICLES_SUCCESS, response)),
        (error) => Dispatcher.dispatch(new Action(LOAD_ALL_ARTICLES_FAIL, null, error))
    )
}