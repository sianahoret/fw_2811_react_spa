import {Dispatcher} from 'flux'

class CustomDispatcher extends Dispatcher {
    dispatchAsync(...args) {
        setTimeout(() => Dispatcher.prototype.dispatch.apply(this, args), 0)
    }
}

export default new CustomDispatcher()