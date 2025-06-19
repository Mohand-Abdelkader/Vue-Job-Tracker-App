<template>
  <td class="px-6 py-4 font-medium text-gray-900">
    {{ job.company }}
  </td>
  <td class="px-6 py-4">{{ job.title }}</td>
  <td class="px-6 py-4">
    <span
      class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold"
      :class="getStatusStyle(job.status)"
    >
      {{ job.status }}
    </span>
  </td>
  <td class="px-6 py-4">{{ formatDate(job.dateApplied) }}</td>
  <td class="px-6 py-4">
    <a :href="job.url" target="_blank" class="text-blue-600 hover:underline">
      View
    </a>
  </td>
</template>
<script setup lang="ts">
defineProps<{
  job: {
    id: string | number;
    company: string;
    title: string;
    status: string;
    dateApplied: string;
    url: string;
  };
}>();
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusStyle(status: string) {
  switch (status) {
    case "Applied":
      return "bg-blue-100 text-blue-800";
    case "Interviewing":
      return "bg-yellow-100 text-yellow-800";
    case "Offer":
      return "bg-green-100 text-green-800";
    case "Rejected":
      return "bg-red-100 text-red-800";
    case "Saved":
      return "bg-purple-100 text-purple-800";
    case "In Progress":
      return "bg-orange-100 text-orange-800";
    case "Hired":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
}
</script>
