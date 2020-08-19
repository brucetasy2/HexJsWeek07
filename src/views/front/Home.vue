<template>
  <div class="home container">
    <img
      alt="Vue logo"
      src="https://images.unsplash.com/flagged/photo-1565591269817-b3a02510519f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    >
    <router-link
      class="btn btn-outline-primary"
      to="/login"
    >
      登入後台
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
};
</script>
