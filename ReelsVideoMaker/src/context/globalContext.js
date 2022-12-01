import React, {createContext, useState, useContext} from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setTextUserId] = useState('');
  const [userData, setUserMainData] = useState('');

  const setLogin = (text) => {
    setIsLogin(text);
  };
  const setUserId = (text) => {
    setTextUserId(text);
  };
  const setUserData = (text) => {
    setUserMainData(text);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogin,
        setLogin,
        userId,
        setUserId,
        userData,
        setUserData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within an GlobalContext');
  }

  return context;
}

export {GlobalContext, GlobalProvider, useGlobal};
