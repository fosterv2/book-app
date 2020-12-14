<template>
  <div class="review-card">
    <p class="rating">Rating: {{ review.rating }}</p>
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
div {
  width: 50%;
  margin-left: 24%;
  margin-bottom: 10px;
  border: 3px solid #2c3e50;
  border-radius: 10px;
}

.rating {
  border-bottom: 2px dotted #2c3e50;
}
</style>
