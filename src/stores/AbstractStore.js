import STORE_CHANGE_EVENT from '../actions/constants'
import {EventEmitter} from 'events'

class AbstractStore extends EventEmitter {
    constructor() {
        super()
        this.loading = false
        this.loaded = false
        this.__items = []
    }

    emitChange() {
        this.emit(STORE_CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(STORE_CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(STORE_CHANGE_EVENT, callback)
    }

    getAll() {
        return this.__items
    }

    add(item) {
        this.__items.push(item)
    }

    getStore(store) {
        return stores[store]
    }
}

export default AbstractStore
var stores = require('./index')