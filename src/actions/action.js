
export class Action {
    constructor(actionType, data, error) {
        this.actionType = actionType
        this.data = data
        this.error = error
    }
}