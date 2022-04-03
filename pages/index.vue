<script>
	import { Field, Form } from "vee-validate"
	export default {
		components: {
			Field,
			Form
		},
		methods: {
			// Validator function
			isRequired(value) {
				return value ? true : "This field is required"
			}
		}
	}
</script>
<template>
	<div>
		<h1>page</h1>
		form:
		<Form v-slot="{ errors }">
			<Field name="field" :rules="isRequired" />
			<span class="text-red-400">{{ errors.field }}</span>
		</Form>
	</div>
</template>
