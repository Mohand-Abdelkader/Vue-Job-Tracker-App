<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateValue(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <select
    :value="modelValue"
    @change="updateValue"
    class="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="all">All</option>
    <option>Applied</option>
    <option>Interviewing</option>
    <option>Offer</option>
    <option>Rejected</option>
    <option>Saved</option>
    <option>In Progress</option>
    <option>Hired</option>
  </select>
</template>
