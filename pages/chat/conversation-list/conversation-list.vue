<template>
	<view>
		<uni-list >
			<uni-list-chat v-for="(item) in chatList" 
				:avatar="item.avator"
				:avatar-circle="true"
				:title="item.nickname"
				:note="item.message"
				:badge-text="50"
				time="2024-01-12 15:23"
				:clickable="true"
			>
			</uni-list-chat>
			<!-- <uni-list-item title="列表文字0" note="列表描述信息"></uni-list-item>
			<uni-list-item v-for="() in chatList" title="列表文字1" note="列表描述信息"></uni-list-item> -->
		</uni-list>
	</view>
</template>

<script setup>
	import { reactive } from 'vue';

	const chatList = reactive([
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
		{
			avator: "http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg",
			nickname: "kanon lee",
			message: "今天是个好日子~！!",
			messageTime: 1705993491,
		},
	])
	
</script>

<style scoped>
	>>> .uni-list-chat__content-title {
		font-size: 35rpx;
		font-weight: bold;
		overflow: hidden;
	}
	
	>>> .uni-list-chat__content-note {
		font-size: 30rpx;
		overflow: hidden;
	}
</style>

<style lang="scss">
@import 'conversation-list.scss'
</style>