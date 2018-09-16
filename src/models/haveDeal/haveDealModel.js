import { listResponse } from './configDatas';

export default {
    namespace: 'haveDeal',
    state: {
      listResponseDatas: [],
      listCurrentDatas:[],
      totalPages:0,
      currentPage:1,
    },
    reducers: {
      saveList(state, {payload}) {
        console.log(payload)
        return { ...state, ...payload };
      },
    },
    effects: {
      *getList({ payload }, { call, put }) {  // eslint-disable-line
        const listResponseDatas = listResponse();
        const totalPages = listResponseDatas && listResponseDatas.length;
        const currentPage = payload.nextPage;
        const listCurrentDatas = listResponseDatas.slice(0,5*currentPage)
        yield put({ type: 'saveList',payload:{listResponseDatas,listCurrentDatas,totalPages, currentPage} });
      },
      *fetchList({ payload }, { call, put }) {  // eslint-disable-line
        const listResponseDatas = listResponse();
        const totalPages = listResponseDatas && listResponseDatas.length;
        const {currentPage} = payload;
        const listCurrentDatas = listResponseDatas.slice(0,5)
        yield put({ type: 'saveList',payload:{listResponseDatas,listCurrentDatas,totalPages, currentPage} });
      },
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            
        },
    },
  
  };
  