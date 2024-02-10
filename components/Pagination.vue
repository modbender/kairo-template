<template>
  <div
    class="pagination flex items-center justify-between mt-5 px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <template v-for="item in items">
        <template v-if="item.type === 'previous'">
          <button
            type="button"
            @click="item.onClick"
            :disabled="item.disabled"
            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
        </template>
        <template v-else-if="item.type === 'next'">
          <button
            type="button"
            @click="item.onClick"
            :disabled="item.disabled"
            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </template>
      </template>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">97</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <template v-for="item in items">
            <template
              v-if="
                item.type === 'start-ellipsis' || item.type === 'end-ellipsis'
              "
            >
              <span
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
              >
                ...
              </span>
            </template>
            <template v-else-if="item.type === 'page'">
              <button
                type="button"
                v-if="item.selected"
                aria-current="page"
                @click="item.onClick"
                :disabled="item.disabled"
                class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {{ item.page }}
              </button>
              <button
                type="button"
                v-else
                @click="item.onClick"
                :disabled="item.disabled"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {{ item.page }}
              </button>
            </template>
            <template v-else-if="item.type === 'previous'">
              <button
                type="button"
                @click="item.onClick"
                :disabled="item.disabled"
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Previous</span>
                <Icon size="20" name="mdi:chevron-left" />
              </button>
            </template>
            <template v-else-if="item.type === 'next'">
              <button
                type="button"
                @click="item.onClick"
                :disabled="item.disabled"
                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Next</span>
                <Icon size="20" name="mdi:chevron-right" />
              </button>
            </template>
            <template v-else>
              <button
                type="button"
                :disabled="item.disabled"
                class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {{ item.type }}
              </button>
            </template>
          </template>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    required: true,
  },
});
const emit = defineEmits(["onChange"]);

const { count } = toRefs(props);

const items = usePagination({
  count: unref(count),
});
</script>
