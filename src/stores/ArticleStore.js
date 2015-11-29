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
        Dispatcher.register(
            [ ADD_ARTICLE, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS, LOAD_ALL_ARTICLES_FAIL ],
            (action) => {
                const {actionType, data, error} = action
                console.log('---', actionType);
                switch (actionType) {
                    case ADD_ARTICLE:
                        this.add(data)
                        this.emitChange()
                        break
                    case LOAD_ALL_ARTICLES_START:
                        this.loading = true
                        this.loaded = false
                        this.emitChange()
                        break
                    case LOAD_ALL_ARTICLES_SUCCESS:
                        this.addArticles(data)
                        this.emitChange()
                        break
                    case LOAD_ALL_ARTICLES_FAIL:
                        this.loaded = false
                        this.loading = false
                        this.error = error
                        this.emitChange()
                        break;
                }
            }
        )
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
