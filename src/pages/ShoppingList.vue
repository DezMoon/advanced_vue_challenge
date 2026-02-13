<template>
  <div class="min-h-screen bg-gray-50 pt-24 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-black text-gray-900 mb-2">My Shopping List</h1>
      <p class="text-gray-500 mb-8 font-medium">
        Items collected from your weekly plan.
      </p>

      <div
        v-if="items.length > 0"
        class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-4 p-5 border-b border-gray-50 hover:bg-gray-50 transition-colors"
        >
          <input
            type="checkbox"
            class="w-6 h-6 rounded-full border-2 border-green-200 text-green-600 focus:ring-green-500"
          />
          <span class="text-gray-700 font-bold">{{ item }}</span>
        </div>
      </div>

      <div
        v-else
        class="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200"
      >
        <p class="text-gray-400 font-medium">
          No items yet. Go to your Weekly Planner to generate a list!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const items = ref<string[]>([]);

onMounted(() => {
  const saved = localStorage.getItem("vault_shopping_list");
  if (saved) {
    // We load the generated list from memory when the page opens
    items.value = JSON.parse(saved);
  }
});
</script>
