import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import contactReducer from './app/store/reducers/contactReducer'
import ContactNavigation from './app/navigation/ContactNavigation'

const rootReducer = combineReducers({
  contact: contactReducer
})

const store = createStore(rootReducer)

const App = () => {
    return (
      <Provider store={store}>
        <ContactNavigation />
      </Provider>
    )
}
export default App