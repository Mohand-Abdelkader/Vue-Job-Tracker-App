<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">
      All Job Applications
    </h2>
    <div class="flex justify-center align-middle mt-5" v-if="isPending">
      <Loader />
    </div>
    <div v-else class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full text-sm text-left text-gray-700">
        <thead class="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th scope="col" class="px-6 py-3">Company</th>
            <th scope="col" class="px-6 py-3">Job Title</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Applied Date</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="job in jobs"
            :key="job.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4 font-medium text-gray-900">
              {{ job.company }}
            </td>
            <td class="px-6 py-4">{{ job.title }}</td>
            <td class="px-6 py-4">
              <span
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                :class="getStatusStyle(job.status)"
              >
                {{ job.status }}
              </span>
            </td>
            <td class="px-6 py-4">{{ formatDate(job.dateApplied) }}</td>
            <td class="px-6 py-4">
              <a
                :href="job.url"
                target="_blank"
                class="text-blue-600 hover:underline"
              >
                View
              </a>
            </td>
          </tr>
          <tr v-if="jobs.length === 0">
            <td colspan="5" class="text-center py-4 text-gray-400">
              No applications found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApplications } from "../../hooks/useApplication";
import Loader from "../ui/Loader.vue";

defineProps<{
  jobs: {
    id: string | number;
    company: string;
    title: string;
    status: string;
    dateApplied: string;
    url: string;
  }[];
}>();

const { applications: jobs, isPending } = useApplications();

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
    default:
      return "bg-gray-100 text-gray-700";
  }
}
</script>
