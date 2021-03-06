
export default {
    namespace: 'user',
  
    state: {uname:'shangyy'},
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            
        },
    },
  
  };
  