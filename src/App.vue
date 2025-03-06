<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="s-header">
    <div class="s-logo">
        <p><span>das</span>buch</p>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <div class="s-container">
    <RouterView />
  </div>

</template>

<style scoped>
  .s-header {
    display: flex;
    justify-content: space-between;
    background: white;
    align-items: center;
    padding: 12px 46px;
  }

  .s-logo {
    font-size: 20px;
    color: #737373;
    text-transform: uppercase;

    span {
      color: #E72222;
    }
  }

  .s-container {
    padding: 24px 46px;
    background-color: #f2f2f2;
    height: calc(100% - 136px);
  }

</style>
