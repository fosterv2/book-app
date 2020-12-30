<template>
  <div class="review-card">
    <p class="rating">
      <RatingStars :rating="review.rating" />
      <span>{{ review.user.username }}</span>
    </p>
    <h4>{{ review.title }}</h4>
    <p>{{ review.content }}</p>
  </div>
</template>

<script>
import RatingStars from "./RatingStars";

export default {
  name: 'ReviewCard',
  components: {
    RatingStars
  },
  props: {
    review: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 90%;
  margin-bottom: 10px;
  border: 3px solid #2c3e50;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
}

.rating {
  border-bottom: 2px dotted #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: 0px 3% 5px 3%;
  /* top, right, bottom, left */
}
</style>
