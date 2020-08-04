<template>
  <div>
    <hello-world msg="Welcome to Your Vue.js App"/>
    <el-button type="primary">22</el-button>
    <img src='@/assets/images/exception/403.png'>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
