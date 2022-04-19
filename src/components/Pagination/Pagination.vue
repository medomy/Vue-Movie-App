<template>
  <div class="row justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <span class="page-link" aria-label="Previous" @click="firstPage">
          <span aria-hidden="true">first</span>
        </span>
      </li>
      <li class="page-item">
        <span class="page-link" aria-label="Previous" @click="prevPage">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      <li class="page-item">
        <span class="page-link" aria-label="Next" @click="nextPage">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
      <li class="page-item">
        <span class="page-link" aria-label="Previous" @click="lastPage">
          <span aria-hidden="true">last</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  emits: ["getPrevPage", "getNextPage", "getFirst", "getLast"],
  methods: {
    prevPage() {
      this.$emit("getPrevPage");
    },
    nextPage() {
      this.$emit("getNextPage");
    },
    firstPage() {
      this.$emit("getFirst");
    },
    lastPage() {
      this.$emit("getLast");
    },
  },
};
</script>

<style>
.pagination{
    justify-content: center!important;;
}
</style>