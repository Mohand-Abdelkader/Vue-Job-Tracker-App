<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
  >
    <h2 class="text-2xl font-semibold text-gray-800">Add Job Application</h2>

    <!-- Company Name -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Company Name</label
      >
      <input
        type="text"
        v-model="form.company"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="e.g. Google"
      />
    </div>

    <!-- Job Title -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Job Title</label
      >
      <input
        type="text"
        v-model="form.title"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="e.g. Front-End Developer"
      />
    </div>

    <!-- Location -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Location</label
      >
      <input
        type="text"
        v-model="form.location"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Remote or City Name"
      />
    </div>

    <!-- Application Date -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Date Applied</label
      >
      <input
        type="date"
        v-model="form.dateApplied"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Status -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Application Status</label
      >
      <select
        v-model="form.status"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Select Status</option>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
        <option>Saved</option>
        <option>In Progress</option>
        <option>Hired</option>
      </select>
    </div>

    <!-- Job URL -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700"
        >Job Post URL</label
      >
      <input
        type="url"
        v-model="form.url"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="https://example.com/job"
      />
    </div>

    <!-- Notes -->
    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Notes</label>
      <textarea
        v-model="form.notes"
        rows="4"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Anything you want to remember..."
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="text-right">
      <button
        :disabled="isPending"
        type="submit"
        class="disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span v-if="isPending">Saving...</span>
        <span v-else>Add Application</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useCreateApplication } from "../../hooks/useApplication";
const form = reactive({
  company: "",
  title: "",
  location: "",
  dateApplied: "",
  status: "",
  url: "",
  notes: "",
});

const { createApplication, isPending } = useCreateApplication();
const handleSubmit = async () => {
  await createApplication(form);
};
</script>
