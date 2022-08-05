<template>
  <el-form
    ref="loginForm"
    :rules="loginRules"
    :model="loginForm"
    class="login-form"
    status-icon
    label-width="0">
    <el-form-item prop="username" class="text-bg">
      <el-input
        v-model="loginForm.username"
        size="small"
        auto-complete="off"
        placeholder="请输入用户名"
        @keyup.enter.native="handleLogin">
        <i
          slot="prefix"
          class="icon-yonghu"/>
      </el-input>
    </el-form-item>
    <el-form-item prop="password" class="text-bg">
      <el-input
        :type="passwordType"
        v-model="loginForm.password"
        size="small"
        auto-complete="off"
        placeholder="请输入密码"
        @keyup.enter.native="handleLogin">
        <i
          slot="suffix"
          class="el-icon-view el-input__icon"
          @click="showPassword"/>
        <i slot="prefix" class="iconfont icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="small"
        class="login-submit"
        @click.native.prevent="handleLogin">登录
      </el-button>
    </el-form-item>
    <!-- <div class="login-menu">
      <div><el-checkbox v-model="checked">记住密码</el-checkbox></div>
      <div>找回密码</div>
    </div> -->
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Userlogin',
  data() {
    return {
      socialForm: {
        code: '',
        state: ''
      },
      loginForm: {
        username: '',
        password: '',
        code: '',
        redomStr: ''
      },
      checked: false,
      code: {
        src: '/code',
        value: '',
        len: 4,
        type: 'image'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },
  created() {
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['tagWel'])
  },
  props: [],
  methods: {
    showPassword() {
      this.passwordType == ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(this.loginForm)
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.$router.push({ path: 'main' })
          }).catch(() => {
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
