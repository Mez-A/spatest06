import {useContext} from 'react'

export const AppContext = useContext()

export const AppProvider = ({children}) => {
   const me = 'Hi i am me'
   return (
      <AppContext.Provider value={me}>
         {children}
      </AppContext.Provider>
   )

}