<template>
  <div>
    <div class="code-main">
      <div class="title">请使用<span>微信</span>扫码登录</div>
      <div class="code-img">
        <img src="../../../public/img/login/erweima.png" alt="">
        <div class="refresh">刷新二维码</div>
      </div>
    </div>
  </div>
</template>

<script>
const MSGINIT = '发送验证码',
  MSGSCUCCESS = '${time}秒后重发',
  MSGTIME = 60
// import { isvalidatemobile } from '@/util/validate'
import { mapGetters } from 'vuex'
// import request from '@/router/axios'
export default {
  name: 'Codelogin',
  data() {
    // const validatePhone = (rule, value, callback) => {
    //   if (isvalidatemobile(value)[0]) {
    //     callback(new Error(isvalidatemobile(value)[1]))
    //   } else {
    //     callback()
    //   }
    // }
    // const validateCode = (rule, value, callback) => {
    //   if (value.length != 4) {
    //     callback(new Error('请输入4位数的验证码'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      msgText: MSGINIT,
      msgTime: MSGTIME,
      msgKey: false,
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [{ required: true, trigger: 'blur', validator: validatePhone }],
        code: [{ required: true, trigger: 'blur', validator: validateCode }]
      }
    }
  },
  created() { },
  mounted() { },
  computed: {
    ...mapGetters(['tagWel'])
  },
  methods: {
    handleSend() {
      if (this.msgKey) return

      // request({
      //   url: '/admin/mobile/' + this.loginForm.mobile,
      //   method: 'get'
      // }).then(response => {
      //   if (response.data.data) {
      //     this.$message.success('验证码发送成功')
      //   } else {
      //     this.$message.error(response.data.msg)
      //   }
      // })

      this.msgText = MSGSCUCCESS.replace('${time}', this.msgTime)
      this.msgKey = true
      const time = setInterval(() => {
        this.msgTime--
        this.msgText = MSGSCUCCESS.replace('${time}', this.msgTime)
        if (this.msgTime === 0) {
          this.msgTime = MSGTIME
          this.msgText = MSGINIT
          this.msgKey = false
          clearInterval(time)
        }
      }, 1000)
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('LoginByPhone', this.loginForm).then(() => {
            this.$router.push({ path: this.tagWel.value })
          })
        }
      })
    }
  }
}
</script>
