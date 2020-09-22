import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getFetch } from './api/reqAPIs';

const useUser = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getFetch('/getUser').then(({ user }) => setUser(user));
  }, [history]);

  return user;
};

export default useUser;
