<template>
	<view class="content">
		<l-cell-group title="基础组件">
		<view v-for="(item,index) of componentsList" :key="index">
			<l-cell-item :isBorderTop="childIndex===0" v-for="(child, childIndex) of item.children" :key="childIndex" :title="child.title" @click="toDetailComp(child.path)" ></l-cell-item>
		</view>
		</l-cell-group>
	</view>
</template>

<script>
	import list from '../../common/index-list.js'
	export default {
		data() {
			return {
				componentsList: list
			}
		},
		onLoad() {
			
		},
		methods: {
			toDetailComp(path){
				uni.navigateTo({
					url: `../${path}`
				});
			}
		}
	}
</script>

<style lang="scss">
</style>
