<template>
	<view class="uni-flex uni-column settings-bar">
		<view class="settings-bar__haed">
			<view class="settings-bar__haed__user-info">
				<image class="settings-bar__user-avator"
					mode="aspectFill"
					src="http://chikii-game-client-sg.oss-ap-southeast-1.aliyuncs.com/upload/beta/icon/5FDF/4E20/5FDFDAAE91B774E20.jpg"
				></image>
				<view class="settings-bar__user-text settings-bar__user-text__nickname">
					<text>kanonlee</text>
				</view>
				<view class="settings-bar__user-text settings-bar__user-text__username">
					<text>12328941283901289 </text>
				</view>
			</view>
		</view>
		<view class="settings-bar--border"></view>
		<view class="settings-bar__lower-part">
			<uni-list :border="false">
				<uni-list-item :show-extra-icon="true" :border="false" :clickable="true" :extra-icon="{color: 'rgb(170,176,198)', size: '22',type: 'gear-filled'}" title="设置" />
				<uni-list-item :show-extra-icon="true" :border="false" :clickable="true" :extra-icon="{color: 'rgb(170,176,198)', size: '22',type: 'gear-filled'}" title="列表左侧带扩展图标" />
				<uni-list-item :show-extra-icon="true" :border="false" :clickable="true" :extra-icon="{color: 'rgb(170,176,198)', size: '22',type: 'gear-filled'}" title="列表左侧带扩展图标" />
				<uni-list-item :show-extra-icon="true" :border="false" :clickable="true" :extra-icon="{color: 'rgb(170,176,198)', size: '22',type: 'gear-filled'}" title="列表左侧带扩展图标" />
				
			</uni-list>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
	>>> .uni-list-item__content-title {
		font-size: 35rpx;
		font-weight: bold;
		/* color: #3b4144; */
		color: #3b4144;
	}
	
	>>> .uni-list-item__icon {
		margin-right: 30rpx;
	}
</style>

<style lang="scss">
@import 'settings-bar.scss';
</style>
