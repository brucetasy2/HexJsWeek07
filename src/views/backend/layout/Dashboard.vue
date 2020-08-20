<template>
  <div>
    <Sidebar />
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="col-md-12 ml-sm-auto px-4"
        >
          <router-view
            v-if="checkSuccess"
            :token="token"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      token: '',
      uuid: process.env.VUE_APP_UID,
      checkSuccess: false,

    };
  },

};
</script>

<style lang="scss">
</style>
