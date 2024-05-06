<script setup lang="ts">
import useTalentStore from '@/state/TalentsStore';
import { computed, ref } from 'vue';

const { id } = defineProps<{
	id: number
}>();

const store = useTalentStore();

const { talentRow, talentTree, parentTalentName } = store.getById(id);
const tree = store.getTalentTree(talentTree);
const pointsInTreeRequired = talentRow * 5 - 5;

const notEnoughPointsInTree = computed(() => {
	return store.getPointsInTree(talentTree) < pointsInTreeRequired;
});

const parentRequired = computed(() => {
	if (!parentTalentName) {
		return false;
	}

	const { pointsTotal, pointsCurrent } = store.getByName(parentTalentName);
	return pointsTotal !== pointsCurrent;
});

function getRequires() {
	if (talentRow === 1) {
		return null;
	}

	const result = [];
	if (notEnoughPointsInTree.value) {
		result.push(`Requires ${pointsInTreeRequired} points in ${tree.name} talents`);
	}

	if (parentRequired.value) {
		const { name, pointsTotal } = store.getByName(parentTalentName!);
		result.push(`Requires ${pointsTotal} points in ${name}`)
	}

	return result;
}

</script>

<template>
	<div class="requires">
		<div v-for="value in getRequires()" :key="value">
			{{ value }}
		</div>
	</div>
</template>

<style scoped>
.requires {
	color: #b20715;
}
</style>