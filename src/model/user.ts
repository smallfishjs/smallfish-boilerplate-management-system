export default {
  namespace: 'user',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
