<template>
  <span v-if="rating >= 0 && rating < 0.5">
    <img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
  </span>
  <span v-else-if="rating >= 0.5 && rating < 1.5">
    <img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
  </span>
  <span v-else-if="rating >= 1.5 && rating < 2.5">
    <img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'><img :src='emptyStar'>
  </span>
  <span v-else-if="rating >= 2.5 && rating < 3.5">
    <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'><img :src='emptyStar'>
  </span>
  <span v-else-if="rating >= 3.5 && rating < 4.5">
    <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='emptyStar'>
  </span>
  <span v-else>
    <img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'><img :src='fullStar'>
  </span>
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    rating: Number
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
img {
  height: 20px;
}
</style>
