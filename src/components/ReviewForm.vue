<template>
  <div class="review-form">
    <p v-on:click="handleBack">X</p>
    <h3>My Review for {{ bookName }}</h3>
    <form>
      <label>Review Title</label><br/>
      <input v-model="title" placeholder="Enter review title"><br/>
      <label>Review</label><br/>
      <input v-model="content" placeholder="Enter review content"><br/>
      <label>Rating</label><br/>
      <input v-model="rating" type="number" placeholder="Enter review rating"><br/>
      <br/>
      <button>Post Review</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
  props: {
    bookName: String,
    handleBack: Function
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
