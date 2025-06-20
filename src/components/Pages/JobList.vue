<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
    >
      <h2 class="text-2xl font-semibold text-gray-800">All Job Applications</h2>

      <!-- Filter -->
      <!-- <Select v-model="selectedStatus" /> -->
      <Select @change-value="changeFilter" />
    </div>

    <div class="flex justify-center items-center py-10" v-if="isPending">
      <Loader />
    </div>

    <div v-else class="overflow-x-auto bg-white shadow rounded-lg">
      <table
        class="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700"
      >
        <thead class="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th class="px-6 py-3">Company</th>
            <th class="px-6 py-3">Job Title</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3">Applied Date</th>
            <th class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Row v-for="job in filteredJobs" :job="job" :key="job.id" />
          <!-- No Data -->
          <tr v-if="filteredJobs?.length === 0">
            <td colspan="5" class="text-center py-6 text-gray-400">
              No applications found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Row from "../ui/Row.vue";
import Select from "../ui/Select.vue";

import { useApplications } from "../../hooks/useApplication";
import Loader from "../ui/Loader.vue";
import { computed, ref } from "vue";

type Job = {
  id: string | number;
  company: string;
  title: string;
  status: string;
  dateApplied: string;
  url: string;
};
function changeFilter(val: string) {
  selectedStatus.value = val;
}
const { applications: jobs, isPending } = useApplications();
const selectedStatus = ref("All");

const filteredJobs = computed(() => {
  if (selectedStatus.value === "All") return jobs.value;
  return jobs.value?.filter((job: Job) => job.status === selectedStatus.value);
});
</script>
