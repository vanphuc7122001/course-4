const user = {
  namespaced: true,
  state() {
    return {
      userList: [
        {
          id: 1,
          description: "Than Thien De Gan",
          name: "Nguyen Thi Ngan",
          imgUrl:
            "https://images.unsplash.com/photo-1612681621185-0fa6abab8099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbSUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80",
        },
        {
          id: 2,
          description: "Than Thien De Gan",
          name: "Nguyen Thi Tham",
          imgUrl:
            "https://cdn.pixabay.com/photo/2016/11/14/04/54/woman-1822646_960_720.jpg",
        },
      ],
      userDetail: null,
    };
  },
  mutations: {
    setUserDetailMutations(state, payload) {
      const userDetail = state.userList.find((user) => user.id == payload);
      state.userDetail = userDetail;
    },
  },
  actions: {
    getUserDetailByIdActions(context, payload) {
      context.commit("setUserDetailMutations", payload);
    },
  },
};

export default user;
