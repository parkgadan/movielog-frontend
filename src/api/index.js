import { postLogin } from "./userInfo";

const useMock = true;
const api = {
  postLogin
};

const mockApi = {
  postLogin: (_id, _pw, callback) => {
    return new Promise((resolve) => setTimeout(() => {
      callback({ nickname: 'user1' });
      resolve();
    }), 1000);
  },
  getMovies: (callback) => {
    callback({ movieData: ['asdfasdfdsf', 'asffdsdfsf'] })
  }
};

const defaultApi = useMock ? mockApi : api;

export default defaultApi;
