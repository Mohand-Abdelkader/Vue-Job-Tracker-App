<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "changeValue", target: string): void;
}>();
function updateValue(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("changeValue", target.value);
}
</script>

<template>
  <select
    @change="updateValue"
    class="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option>All</option>
    <option>Applied</option>
    <option>Interviewing</option>
    <option>Offer</option>
    <option>Rejected</option>
    <option>Saved</option>
    <option>In Progress</option>
    <option>Hired</option>
  </select>
</template>
