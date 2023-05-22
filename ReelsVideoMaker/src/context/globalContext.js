import React, {createContext, useState, useContext} from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setTextUserId] = useState('');
  const [userData, setUserMainData] = useState('');
  const [adminId, setTextAdminId] = useState('');
  const [adminData, setAdminMainData] = useState('');

  const setLogin = (text) => {
    setIsLogin(text);
  };
  const setUserId = (text) => {
    setTextUserId(text);
  };
  const setUserData = (text) => {
    setUserMainData(text);
  };
  const setAdminId = (text) => {
    setTextAdminId(text);
  };
  const setAdminData = (text) => {
    setAdminMainData(text);
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
        adminId,
        setAdminId,
        adminData,
        setAdminData,
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
