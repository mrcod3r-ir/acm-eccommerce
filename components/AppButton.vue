<template>
	<!-- <button :class="[`btn btn-${variant}`, { loading }]"> -->
	<button :class="{ loading, [`btn btn-${variant}`]: variant !== 'undefined' }">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
	import { ButtonVariantEnum } from "~~/types"

	interface Props {
		variant?: ButtonVariantEnum
		loading?: boolean
	}
	const props = withDefaults(defineProps<Props>(), {
		loading: false
	})
</script>

<style scoped></style>
