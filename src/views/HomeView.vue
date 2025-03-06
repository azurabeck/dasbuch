<template>
  <div>
   <h1>Projetos</h1>
    <div class="card-container">
      <div v-for="card in cards" :key="card.title" class="s-card">
        <div class='s-wrapper-image'>
          <img :src="card.cover" :alt="card.title" class="card-cover">
        </div>
        <div class="s-wrap-content">
          <p class="card-title">{{ card.project }}</p>
          <p class="card-last-update">Atualizado: {{ formatTimestamp(card.updated, 'date') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from '../mocks/project.json';
import { formatTimestamp } from '../utils/formatTimestamp'

export default {
  name: 'HomeView',
  data() {
    return {
      cards: mockData
    };
  },
  methods: {
    formatTimestamp,
  },
}
</script>

<style scoped>

 .card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
 }


.s-card {
    background: white;
    display: flex;
    height: 100px;
    box-shadow: 3px 3px 8px #d3d3d3;
    gap: 16px;
}

.s-wrapper-image {
  display: flex;
  width: 50%;
  height: 100%;
}

.s-wrapper-image > img {
  object-fit: cover;
  width: 100%;
}

.s-wrap-content {
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
}

.card-title {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  margin: 0
}

.card-last-update {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  margin: 0
}

</style>
