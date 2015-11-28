import AbstractStore from './AbstractStore'
import Dispatcher from '../Dispatcher'
import {ADD_ARTICLE} from '../actions/constants'

class ArticleStore extends AbstractStore {
    constructor() {
        super()
        this.dipatchTocken = Dispatcher.register((action) => {
            const {actionType, data} = action
            switch (actionType) {
                case ADD_ARTICLE:
                    this.add(data)
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore