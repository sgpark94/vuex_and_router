<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" fixed app>
			<v-list dense>
				<v-list-tile router :to="{ name: 'home' }" exact>
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile
					v-if="isLogin === false"
					router
					:to="{ name: 'login' }"
					exact
				>
					<v-list-tile-action>
						<v-icon>person</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Login</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile v-else router :to="{ name: 'mypage' }" exact>
					<v-list-tile-action>
						<v-icon>contact_mail</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Mypage</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="indigo" dark fixed app>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>Application</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-menu offset-y v-if="isLogin">
					<template v-slot:activator="{ on, attrs }">
						<v-btn icon flat v-bind="attrs" v-on="on">
							<v-icon>more_vert</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-tile router :to="{ name: 'mypage' }">
							<v-list-tile-title>Mypage</v-list-tile-title>
						</v-list-tile>
						<v-list-tile @click="$store.dispatch('logout')">
							<v-list-tile-title>Logout</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
				<v-btn flat icon v-else router :to="{ name: 'login' }">Log In</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-content>
			<router-view />
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2017</span>
		</v-footer>
	</v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
	data: () => ({
		drawer: null,
	}),
	props: {
		source: String,
	},
	computed: {
		...mapState(["isLogin"]),
	},
};
</script>
