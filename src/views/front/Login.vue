<template>
  <div
    class="container "
    style="margin-top: 120px;"
  >
    <div class="card">
      <div
        class="mx-auto"
        style="margin-top: 40px;"
      >
        <h2> 請登入系統</h2>
      </div>

      <div
        class="card-body"
        style="margin-top: 20px;"
      >
        <form
          class="form-login"
          @submit.prevent="login"
        >
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user" /></span>
            </div>

            <input
              v-model="user.email"
              type="text"
              name="email"
              class="form-control"
              placeholder="Username"
              required
            >
          </div>

          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-key" /></span>
            </div>
            <input
              v-model="user.password"
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            >
          </div>

          <div class="form-group mx-5">
            <input
              type="button"
              name="btn"
              value="Login"
              class="btn btn-outline-danger float-right login_btn mx-2"
              @click="login"
            >

            <input
              type="button"
              name="btn"
              value="Logout"
              class="btn btn-outline-warning float-right login_btn mx-2"
              @click="logout"
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
      expired: '',
      isLoading: false,
    };
  },

  methods: {
    login() {
      // 進行驗證
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      // console.log(`this.user=${this.user.email}`);
      // console.log(`this.user=${this.user.password}`);
      // console.log(`this.token=${this.token}`);
      this.isLoading = true;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token } = response.data;
          const { expired } = response.data;
          // 寫入 cookie token  expires 設置有效時間
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
          // console.log(`okay ${token}`);
          this.$bus.$emit('message:push',
            '登入成功',
            'success');
          this.isLoading = false;
          this.$router.push('/admin/Orders');
        })
        .catch((error) => {
          console.log(error);
          this.$bus.$emit('message:push',
            `登入失敗惹，好糗Σ( ° △ °|||)︴
            ${error}`,
            'danger');
          this.isLoading = false;
        });
    },

    //   清除token
    logout() {
      document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
