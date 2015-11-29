import STORE_CHANGE_EVENT from '../actions/constants'
import Dispatcher from '../Dispatcher'

class AbstractStore {
    constructor() {
        this.loading = false
        this.loaded = false
        this.__items = []
    }

    emitChange() {
        Dispatcher.dispatchAsync(STORE_CHANGE_EVENT)
    }

    addChangeListener(callback) {
        Dispatcher.register((event) => {
            const {eventType} = event
            if(STORE_CHANGE_EVENT == eventType) {
                callback()
            }
        })
    }

    removeChangeListener(callback) {
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
