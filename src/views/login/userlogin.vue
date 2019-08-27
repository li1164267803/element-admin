<template>
  <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="login-form">
    <el-form-item prop="username">
      <el-input size="small" v-model="loginForm.username" @keyup.enter.native="handleLogin" autocomplete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" :type="passwordType" v-model="loginForm.password" autocomplete="off">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>
      <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { isvalidUsername } from "@/utils/validate";
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "ces",
        password: ""
      },
      checked: false,
      passwordType: 'password',
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    showPassword() {
      this.passwordType === '' ? (this.passwordType = 'password') : (this.passwordType = '');
    },
    handleLogin() {
      this.$refs.loginForm.validate(vaild => {
        if(vaild) {
          // this.
        }
      })
    }
  },
};
</script>