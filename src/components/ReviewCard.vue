<template>
  <div class="review-card">
    <p class="rating">
      <!-- <span><img :src='fullStar'><img :src='emptyStar'></span> -->
      <!-- <span>Rating {{ review.rating }}</span> -->
      <span v-if="review.rating === 0">
        <img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
      </span>
      <span v-else-if="review.rating === 1">
        <img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
      </span>
      <span v-else-if="review.rating === 2">
        <img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
      </span>
      <span v-else-if="review.rating === 3">
        <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'>
      </span>
      <span v-else-if="review.rating === 4">
        <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'>
      </span>
      <span v-else>
        <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'>
      </span>
      <span>{{ review.user.username }}</span>
    </p>
    <h4>{{ review.title }}</h4>
    <p>{{ review.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    review: Object
  },
  data () {
    return {
      fullStar: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg",
      emptyStar: "https://png.pngtree.com/png-clipart/20190617/original/pngtree-vector-star-icon-png-image_3876637.jpg"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 50%;
  margin-left: 24.5%;
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

img {
  height: 20px;
}
</style>
