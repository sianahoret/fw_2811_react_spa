import AbstractStore from './AbstractStore'
import Dispatcher from '../Dispatcher'
import {loadAllArticles} from '../actions/articles'
import {
    ADD_ARTICLE,
    LOAD_ALL_ARTICLES_START,
    LOAD_ALL_ARTICLES_SUCCESS,
    LOAD_ALL_ARTICLES_FAIL
} from '../actions/constants'

class ArticleStore extends AbstractStore {
    constructor() {
        super()
        Dispatcher.register(ADD_ARTICLE, (action) => {
            const {actionType, data} = action
            console.log('---', actionType);
            this.add(data)
            this.emitChange()
        })
        Dispatcher.register(LOAD_ALL_ARTICLES_START, (action) => {
            const {actionType} = action
            console.log('---', actionType);
            this.loading = true
            this.loaded = false
            this.emitChange()
        })
        Dispatcher.register(LOAD_ALL_ARTICLES_SUCCESS, (action) => {
            const {actionType, data} = action
            console.log('---', actionType);
            this.addArticles(data)
            this.emitChange()
        })
        Dispatcher.register(LOAD_ALL_ARTICLES_FAIL, (action) => {
            const {actionType, error} = action
            console.log('---', actionType);
            this.loaded = false
            this.loading = false
            this.error = error
            this.emitChange()
        })
    }

    addArticles(articles) {
        articles.forEach(this.add.bind(this))
        this.loaded = true
        this.loading = false
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadAllArticles()
        return this.getAll()
    }
}

export default ArticleStore
