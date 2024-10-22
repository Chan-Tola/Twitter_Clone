import { defineStore } from "pinia";
export const useUserData = defineStore("usersData", {
  state: () => ({
    usersData: [
      {
        userEmail: "chantola168@gmail.com",
        userUsername: "chantola",
        userPassword: "123",
      },
      {
        userEmail: "nak168@gmail.com",
        userUsername: "naknak",
        userPassword: "123",
      },
    ],
    currentUser: null,
  }),
  //   getter:
  getters: {
    getuserData: (state) => state.usersData,
    getcurrentUser: (state) => state.currentUser,
  },
  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
    },
    addNewUser(newUser){
      this.usersData.push(newUser);
    }
  },
  persist: true,
});