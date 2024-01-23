<template>
	<page>
		<view class="uni-flex uni-column">
			<!-- head -->
			<view class="uni-flex uni-row head-bar">
				<view class="head-pop-bar">
					<view class="head-pop-icon">
						<uni-icons type="bars" size="22" @click="clickSetting"></uni-icons>
					</view>
				</view>
				<view class="head-title-bar">
					<view class="head-title">
						<uni-title type="h2" :title="title"></uni-title>
					</view>
				</view>
			</view>
			<!-- main -->
			<view>

			</view>
		</view>

		<drawer ref="settingDrawer">

		</drawer>
	</page>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	// const proxy = getCurrentInstance()

	let title = ref("NengTalk")

	const settingDrawer = ref()

	function clickSetting() {
		showSettingDrawer()
	}

	function showSettingDrawer() {
		settingDrawer.value.open()
	}
</script>

<style lang="scss">
	@import "chat.scss";
</style>