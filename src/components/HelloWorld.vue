<template>
  <div class="hello">
    <p class="red">
      {{ msg }}
    </p>
    <img
      alt="Vue logo"
      src="https://images.unsplash.com/flagged/photo-1565591269817-b3a02510519f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    >
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.red {
  color: red;
  transform: translateX(0px) translateY(-20px);
}

</style>
