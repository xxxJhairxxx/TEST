<!-- @format -->

<script setup lang="ts">
import { Question } from '../interfaces/Data';

const props = defineProps<{
	question: Question; // Permitir que sea undefined también
}>();
</script>

<template>
	<div class="cardQuestion">
		<h2>{{ props.question.title }}</h2>

		<div class="flex flex-col gap-4 p-1 mt-2">
			<div class='flex gap-2 bg-white'
				v-if="props.question.type === 'MULTIPLE_CHOICE'"
				v-for="(question,index) in props.question.options"
				:key="props.question._id.$oid"
			>
				<input class='cursor-pointer' type="radio" :id="question+index" name="question" :value="question" />
				<label :for="question">{{ question }}</label>
			</div>
			<div v-else>
				<input type="text" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.cardQuestion{
	@apply p-6 rounded-xl bg-secondary shadow-xl;
}
</style>
