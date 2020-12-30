<template>
  <div class="review-form">
    <p v-on:click="handleBack">X</p>
    <h3>My Review for {{ bookName }}</h3>
    <h4 class="error" v-if="error">Wrong Inputs</h4>
    <form>
      <label>Review Title</label><br/>
      <input v-model="title" placeholder="Enter review title"><br/>
      <label>Review</label><br/>
      <textarea v-model="content" placeholder="Enter review content"></textarea><br/>
      <label>Rating</label><br/>
      <input v-model="rating" type="number" min="0" max="5" step="1" placeholder="Enter review rating"><br/>
      <br/>
      <button v-on:click="handleSubmit">Post Review</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  props: {
    bookName: String,
    handleBack: Function,
    bookId: Number,
    submitReview: Function,
    error: Boolean,
    user: Object
  },
  data () {
    return {
      title: "",
      content: "",
      rating: ""
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      this.submitReview({
        title: this.title,
        content: this.content,
        rating: this.rating,
        book_id: this.bookId,
        user_id: this.user.id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 50%;
  margin: 10px 0 10px 24.5%;
  /* top, right, bottom, left */
  border: 3px solid #2c3e50;
  border-radius: 10px;
  padding-bottom: 15px;
}

form {
  text-align: left;
  margin-left: 25px;
}

p {
  text-align: right;
  padding-right: 5%;
}

h3 {
  margin-top: -30px;
}
</style>
