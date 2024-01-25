<template>
	<view class="auth__account">
		<uni-forms :model="formData" class="auth__account--forms" :rules="rules" validate-trigger="blur">
				<view  class="auth__account--iunput">
					<uni-forms-item name="username">
						<uni-easyinput ref='accountInput' type="text" :focus="true"  primary-color="#b0b8b9"
						 confirm-type="done" :placeholder="$t('auth.account.username')" v-model="formData.username"></uni-easyinput>
					</uni-forms-item>
				</view>
				<view class="auth__account--iunput">
					<uni-forms-item name="password">
						<uni-easyinput ref="passwordInput" type="password" primary-color="#b0b8b9"
							:placeholder="$t('auth.account.password')" v-model="formData.password"></uni-easyinput>
					</uni-forms-item>
				</view>
				<view class="auth__account--button">
					<button type="primary" style="background-color: #b0b8b9;" >{{$t('auth.account.desc')}}</button>
				</view>
			</uni-forms>
	</view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n() 

const accountInput = ref()
const passwordInput = ref()

const formData = reactive({
	username: "",
	password: "",
})

const rules = {
	username: {
		rules: [
			{
				required: true,
				errorMessage: t('auth.account.usernameEmpty'),
			}
		]
	},
	password: {
		rules: [
			{
				required: true,
				errorMessage: t('auth.account.passwordEmpty'),
			},
		]
	}
}


onMounted(() => {
	console.log(uni.getLocale());
})

</script>

<style scoped>
	>>> .uni-easyinput__content-input {
		height: 85rpx;
	}
	
	>>> .is-input-border {
		border: 2px solid;
		border-radius: 8px;
	}
	
	>>> .uni-forms-item {
		width: 100%;

	}
</style>

<style lang="scss">
@import 'account.scss'
</style>
