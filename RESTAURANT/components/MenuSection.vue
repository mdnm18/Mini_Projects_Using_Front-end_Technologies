// components/MenuSection.vue
<template>
  <section class="menu-section">
    <h2>{{ title }}</h2>
    <div class="menu-grid">
      <div v-for="item in items" :key="item.id" class="menu-item">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span class="price">{{ item.price }}</span>
      </div>
    </div>
  </section>
</template>
