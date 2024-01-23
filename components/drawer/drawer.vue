<template>
	<view class="drawer">
		<uni-drawer ref="drawer" mode="left" :mask="false" @change="drawerChange"
			@touchstart="drawerTouchStart" @touchend="drawerTouchEnd" @touchmove="drawerTouchMove"
			@touchcancel="drawerTouchCancel" @mousedown="drawerTouchStart" @mouseup="drawerTouchEnd"
			@mousemove="drawerTouchMove" :width="drawerWidth"
			:class="{'drawer--recover': drawerRecover}"
			:style="{transform: `translateX(${drawerStyleLeft}px)`}">
			<slot></slot>
		</uni-drawer>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const systemInfo = uni.getSystemInfoSync()
	console.log("[drawer]SystemInfo", systemInfo)

	const drawer = ref()

	const drawerWidth = systemInfo.screenWidth * 0.8
	const drawerTouches = {
		start: {
			x: 0,
			y: 0,
		},
		end: {
			x: 0,
			y: 0,
		},
		inTouch: false,
		beginTime: 0,
	}

	let drawerStyleLeft = ref(0)
	let drawerRecover = ref(false)


	function drawerChange(open) {
		// console.log("drawerChange:", open)
		drawerRecover.value = false
		if (!open) {
			drawerStyleLeft.value = 0
		}
	}

	function drawerTouchStart(e) {
		const touch = e.changedTouches[0]
		drawerTouches.start.x = touch.clientX
		drawerTouches.start.y = touch.clientY

		drawerTouches.inTouch = true
		drawerTouches.beginTime = Math.round(new Date())
	}

	function drawerTouchCancel(e) {
		console.log("drawerTouchCancel", e)
	}

	function drawerTouchMove(e) {
		if (drawerTouches.inTouch) {
			const currentTouch = e.changedTouches[0]

			if (currentTouch.clientX < drawerTouches.start.x) {
				const vectorX = currentTouch.clientX - drawerTouches.start.x
				// const vectorY = currentTouch.clientY - drawerTouches.start.y

				const vectorXLength = Math.abs(vectorX)
				// console.log("touch move:", vectorXLength)
				drawerStyleLeft.value = -vectorXLength
			}
		}
	}


	function drawerTouchEnd(e) {
		const touch = e.changedTouches[0]
		drawerTouches.end.x = touch.clientX
		drawerTouches.end.y = touch.clientY

		// console.log("drawerTouches:", drawerTouches)

		const vectorX = drawerTouches.end.x - drawerTouches.start.x
		const vectorY = drawerTouches.end.y - drawerTouches.start.y

		const vectorXLength = Math.abs(vectorX)

		const angleRadians = Math.atan2(vectorY, vectorX)
		const angleDegress = angleRadians * (180 / Math.PI)

		const touchContinueTime = Math.round(new Date()) - drawerTouches.beginTime

		console.log("angleDegress:", angleDegress, vectorXLength)

		drawerTouches.inTouch = false

		//左滑角度判断
		if (angleDegress >= 138 && angleDegress <= 180 || angleDegress <= -135 && angleDegress > -180) {
			// console.log("drawerStyleLeft", drawerStyleLeft);
			if (Math.abs(drawerStyleLeft.value) > drawerWidth * 0.6 || touchContinueTime < 300) {
				drawer.value.close()
				return
			}
		}
		drawerRecover.value = true
		drawerStyleLeft.value = 0

		setTimeout(() => {
			drawerRecover.value = false
		}, 300)
	}

	const open = () => {
		drawer.value.open()
	}

	const close = () => {
		drawer.value.close()
	}

	defineExpose({
		open,
		close,
	})
</script>

<style lang="scss">
	@import "drawer.scss";
</style>