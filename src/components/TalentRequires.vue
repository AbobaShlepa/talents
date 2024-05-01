<script setup lang="ts">
import useTalentTreeStore from '@/state/TalentTreeStore';
import useTalentStore from '@/state/TalentsStore';

const { id} = defineProps<{
	id: number
}>();

const store = useTalentStore();
const treeStore = useTalentTreeStore();

const {talentRow, talentTree, parentTalentName } = store.getById(id);
const tree = treeStore.getTalentTreeById(talentTree);

function getRequires() {
  if (talentRow === 1) {
    return null;
  }

  const result = [];
  const pointsInTreeRequired = talentRow * 5 - 5;
	if (tree.points < pointsInTreeRequired) {
		result.push(`Requires ${pointsInTreeRequired} points in ${tree.name} talents`);
	}

	if (parentTalentName) {
		const { name, pointsTotal } = store.getByName(parentTalentName);
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