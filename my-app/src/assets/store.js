import { createStore } from 'redux'

const store = createStore(todos, ['Use Redux'])



function todos(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

store.dispatch(todos('Read the docs'))
store.dispatch(todos('Read about the middleware'))

export default store;