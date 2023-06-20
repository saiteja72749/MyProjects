import React from 'react'

const UserContext = React.createContext('mahi')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext
