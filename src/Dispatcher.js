import {EventEmitter} from 'events'

class CustomDispatcher extends EventEmitter {
    register(eventTypes, callback) {
      [].concat(eventTypes).forEach((evType) => {
        this.on(evType, callback)
      })
    }

    dispatch(action) {
      const {actionType} = action
      this.emit(actionType, action)
    }

    // For some reason we didn't use Dispatcher.unregister in the application,
    // but it is not a topic now
    // unregister(eventType, callback) {
    //   this.removeListener(eventType, callback)
    // }

    dispatchAsync(...args) {
        setTimeout(() => this.dispatch.apply(this, args), 0)
    }
}

export default new CustomDispatcher()
