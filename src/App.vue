<script setup lang="ts">
import Header from "./components/ui/Header.vue";
import Sidebar from "./components/ui/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <aside class="w-64 flex-shrink-0">
      <Sidebar />
    </aside>

    <div class="flex flex-col flex-1 overflow-auto">
      <header>
        <Header />
      </header>
      <main class="flex-1 p-6 bg-gray-100 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
