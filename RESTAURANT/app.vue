// App.vue
<template>
  <nav class="navbar">
    <div class="logo">MONDAL</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view></router-view>
  <footer>
    <p>© 2025 Mondal Restaurant. All rights reserved.</p>
  </footer>
</template>
