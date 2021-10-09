import { useState, useEffect } from 'react';
import { userService } from './userService';

const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null,
    });

    useEffect(() => {
      userService.getProfilePage()
        .then((res) => {
          setResponse((currentState) => ({
            ...currentState,
            data: res,
            loading: false,
            error: null,
          }));
        })
        .catch((err) => {
          console.log(err.message);
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
    }, []);
    return response;
  },

};

export default useUserService;
