<template>
  <div class="review-form">
    <h3>My Review for {{ bookName }}</h3>
    <form>
      <label>Review Title</label><br/>
      <input v-model="title" placeholder="Enter review title">
      <label>Review</label><br/>
      <input v-model="content" placeholder="Enter review content">
      <label>Rating</label><br/>
      <input v-model="rating" type="number" placeholder="Enter review rating">
      <input type="submit" value="Post Review">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  props: {
    bookName: String
  },
  data () {
    return {
      title: "",
      content: "",
      rating: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
