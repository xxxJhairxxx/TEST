<!-- @format -->

<script setup lang="ts">
import { ref } from 'vue';
import Data from '../src/interfaces/Data'; // Asegúrate de importar la interfaz correctamente

import CardQuestion from './components/CardQuestion.vue';

const data = ref<Data | null>(null);
const error = ref<string | null>(null);

const loadData = async (): Promise<void> => {
	try {
		const response = await fetch('/data.json');
		if (!response.ok) throw new Error('Error al cargar los datos');
		data.value = await response.json();
	} catch (err) {
		error.value = (err as Error).message;
	}
};

loadData();
</script>

<template>
	<main class="Container">
		<h1>{{ data?.title }}</h1>

		<ul class="Questions">
			<li v-for="(question, index) in data?.questions" :key="index">
				<CardQuestion :question="question" />
			</li>
		</ul>

    <button class='bg-primary/75 text-white rounded-xl px-8 py-4 mx-auto flex'>Envio mis resspuestas</button>
	</main>
</template>

<style scoped>
.Container {
	@apply max-w-[1200px] w-[70%] mx-auto  px-[2rem] py-[3rem];

	h1 {
		@apply font-primary text-[3rem] font-extrabold text-center mx-auto w-[50%] min-w-[30rem];
	}
}

.Questions {
	@apply gap-4 flex flex-col my-10;
}
</style>
