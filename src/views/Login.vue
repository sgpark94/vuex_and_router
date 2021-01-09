<template>
	<v-container fill-height style="max-width: 450px;">
		<v-layout row wrap>
			<v-flex xs12>
				<v-alert :value="isLoginError" type="error" class="mb-3">
					로그인이 실패했습니다.
				</v-alert>
				<v-alert :value="isLogin" type="success" class="mb-3">
					로그인 되었습니다.
				</v-alert>
				<v-card>
					<v-toolbar flat>
						<v-toolbar-title>로그인</v-toolbar-title>
					</v-toolbar>
					<div class="pa-3">
						<v-text-field
							v-model="email"
							label="이메일을 입력하세요."
						></v-text-field>
						<v-text-field
							v-model="password"
							type="password"
							label="비밀번호를 입력하세요."
						></v-text-field>
						<v-btn
							@click="
								login({
									email,
									password,
								})
							"
							color="primary"
							large
							block
							depressed
							>로그인</v-btn
						>
					</div>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "login",
	data() {
		return {
			email: null,
			password: null,
		};
	},
	computed: {
		...mapState(["isLogin", "isLoginError"]),
	},
	methods: {
		...mapActions(["login"]),
		// login() {
		// 	// 전체 유저에서 해당 이메일로 유저를 찾는다.
		// 	let selectedUser = null;
		// 	this.allUsers.forEach((user) => {
		// 		if (user.email === this.email) selectedUser = user;
		// 	});
		// 	if (selectedUser === null) {
		// 		this.isError = true;
		// 	} else if (selectedUser.password !== this.password) {
		// 		this.isError = true;
		// 	} else {
		// 		this.loginSuccess = true;
		// 	}
		// },
	},
};
</script>
