import Dispatcher from '../Dispatcher'

export class Action {
    constructor(actionType, data, error) {
        this.actionType = actionType
        this.data = data
        this.error = error
    }
}

export const asyncAC = (name, promise) => {
    Dispatcher.dispatch(new Action(`${name}_START`))
    promise.then(
        (response) => Dispatcher.dispatch(new Action(`${name}_SUCCESS`, response)),
        (error) => Dispatcher.dispatch(new Action(`${name}_FAIL`, null, error))
    )
}