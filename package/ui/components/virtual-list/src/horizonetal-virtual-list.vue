<template>
	<div
		class="virtual-list-wrap"
		ref="wrap"
		@scroll.prevent.stop="wrapScrollHandler">
		<div
			class="virtual-list-placeholder"
			:style="{ width: placeholderHeight + 'px' }"></div>
		<div
			class="virtual-list-container"
			:style="{ transform: `translate3d(${startOffset}px,0,0)` }">
			<div
				class="virtual-item"
				v-for="item in visibleData"
				:_id="item.__index"
				:key="item[props.keyName]">
				<slot :slotScope="item" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useVirtualList } from './composable/useVirtualList'

export type VirtualPropType = {
	data: any[]
	itemSize: number
	buffer: number
	keyName: string
}

const props = withDefaults(defineProps<VirtualPropType>(), {
	itemSize: 0,
	buffer: 0,
	keyName: ''
})
const wrap = ref<HTMLDivElement>(),
	{ _data, visibleData, startIndex, startOffset, placeholderHeight } =
		useVirtualList({ props, wrapElement: wrap, mode: 'horizontal' })

defineExpose({
	reset,
	container: wrap,
	_data
})
function wrapScrollHandler() {
	const scrollLeft = wrap.value!.scrollLeft
	startIndex.value = binarySearch(_data.value, scrollLeft)
}

function reset() {
	startIndex.value = 0
	wrap.value?.scroll({ top: 0, left: 0 })
}
function binarySearch(searchList: any[], findVal: number) {
	let start = 0,
		end = searchList.length - 1,
		tempIndex = null

	while (start <= end) {
		const mid = start + ((end - start) >> 1)
		if (searchList[mid].__right > findVal) {
			if (tempIndex === null || tempIndex > mid) {
				tempIndex = mid
			}
			end = mid - 1
		} else if (searchList[mid].__right < findVal) {
			start = mid + 1
		} else if (searchList[mid].__right === findVal) {
			return searchList[mid].__index + 1
		}
	}
	return tempIndex
}
</script>

<style lang="scss" scoped>
.virtual-list-wrap {
	width: inherit;
	height: inherit;
	position: relative;
	overflow-y: auto;
	height: 100%;
	-webkit-overflow-scrolling: touch;
	.virtual-list-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		min-height: 1px;
		min-width: 1px;
	}
	.virtual-list-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		// height: 100%;
		// display: flex;
		// flex-direction: column;
	}
}
</style>
