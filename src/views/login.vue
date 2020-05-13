<template>
  <el-form :model="userInfo" status-icon :rules="rules" ref="loginForm" label-width="100px">
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="userInfo.userName" autocomplete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="userInfo.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { createNamespacedHelpers, defineComponent } from 'vuex';
import { debounce } from '@/utils/common';
import validator from '@/utils/validator';

const { mapState, mapActions } = createNamespacedHelpers('user');

export default defineComponent({
  name: 'login',

  data() {
    return {
      rules: {
        userName: [{ required: true, validator }],
        password: [{ required: true, validator }],
      },
    };
  },

  computed: {
    ...mapState({
      userInfo: (state) => state, // 将user中的整个状态对象赋值给 this.userInfo
    }),
  },

  methods: {
    ...mapActions(['login', 'logout']),

    /**
       * 提交表单
       */
    // eslint-disable-next-line func-names
    submitForm: debounce(function () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) { // 验证成功
          this.login({ userName: this.userInfo.userName, password: this.userInfo.password }).then(
            () => {
              this.$router.push('/home');
            },
          ).catch((err) => err);
          return true;
        }
        return false;
      });
    }),

    /**
    * 重置表单
    */
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
  },
});
</script>

<style scoped>
</style>
