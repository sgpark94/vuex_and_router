import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userInfo: null,
		allUsers: [
			{
				id: "1",
				name: "test1",
				email: "test1@gmail.com",
				password: "123",
			},
			{
				id: "2",
				name: "test2",
				email: "test2@gmail.com",
				password: "456",
			},
		],
		isLogin: false,
		isLoginError: false,
	},
	mutations: {
		loginSuccess(state, payload) {
			(state.isLogin = true),
				(state.isLoginError = false),
				(state.userInfo = payload);
		},
		loginError(state) {
			(state.isLogin = false), (state.isLoginError = true);
		},
		logout(state) {
			(state.isLogin = false),
				(state.isLoginError = false),
				(state.userInfo = null);
		},
	},
	actions: {
		// 로그인 시도
		login({ state, commit }, loginObj) {
			let selectedUser = null;
			state.allUsers.forEach((user) => {
				if (user.email === loginObj.email) selectedUser = user;
			});
			if (
				selectedUser === null ||
				selectedUser.password !== loginObj.password
			) {
				commit("loginError");
			} else {
				commit("loginSuccess", selectedUser);
				router.push({ name: "mypage" });
			}
		},
		logout({ commit }) {
			commit("logout");
			router.push({ name: "home" });
		},
	},
});
