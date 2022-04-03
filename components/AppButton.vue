<template>
	<button :class="[`btn btn-${variant}`, { loading }]">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
	const props = defineProps({
		variant: { type: String, default: "primary" },
		loading: { type: Boolean, default: false }
	})
</script>

<style scoped></style>
