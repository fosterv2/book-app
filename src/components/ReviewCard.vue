<template>
  <div class="review-card">
    <p>Rating: {{ review.rating }}</p>
    <p>{{ review.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    review: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
