<template>
  <div class="login-container">
    <div class="login-logo">
      <img src="../../../public/img/login/login_logo.png" alt="">
    </div>
    <div class="login-weaper  animated bounceInDown">
      <div class="login-type">
        <div  :class="{active: isActive===0}" @click="getLoginType(0)">
          <span></span>
          <span>账号登录</span>
        </div>
        <div  :class="{active: isActive===1}" @click="getLoginType(1)">
          <span></span>
          <span>扫码登录</span>
        </div>
      </div>
      <div class="login-border">
        <div class="login-main">
          <userLogin v-if="isActive===0" />
          <codeLogin v-else-if="isActive===1" />
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import userLogin from './userlogin'
import codeLogin from './codelogin'
import { mapGetters } from 'vuex'
import { getStore, setStore } from '@/util/store'

import API from '@/api/api'

export default {
  name: 'Login',
  components: {
    userLogin,
    codeLogin
  },
  data () {
    return {
      tenantList: [],
      active: '',
      activeName: 'user',
      socialForm: {},
      isActive: 0
    }
  },
  watch: {
    $route: {
      handler () {
        const params = this.$route.query
        // if (this.validatenull(params.state) && this.validatenull(params.code)) return

        // this.socialForm.state = params.state
        // this.socialForm.code = params.code

        // const loading = this.$loading({
        //   lock: true,
        //   text: `登录中,请稍后。。。`,
        //   spinner: 'el-icon-loading'
        // })
        // this.$store.dispatch('LoginBySocial', this.socialForm).then(
        //   () => {
        //     loading.close()
        //     this.$router.push({ path: this.tagWel.value })
        //   }).catch(() => {
        //     loading.close()
        //   })
      },
      immediate: true
    }
  },
  created () {
    this.watermark()
    this.getTenantList()
    this.active = getStore({ name: 'tenantId' })
  },
  mounted () {
  },
  computed: {
    ...mapGetters(['website', 'tagWel'])
  },
  methods: {
    handleCommand (command) {
      setStore({ name: 'tenantId', content: command })
    },
    getTenantList () {
      API.tenantList().then(response => {
        this.tenantList = response.data.data
      })
    },
    watermark () {
      const text = ''
      const canvas = document.createElement('canvas')
      canvas.width = '500'
      canvas.height = '200'
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, 200, 200) // 绘制之前画布清除
      ctx.font = '30px 黑体'
      ctx.rotate(-20 * Math.PI / 180) // 为了实现水印倾斜效果,旋转画布坐标系
      ctx.fillStyle = 'rgba(100,100,100,0.15)' // 画笔颜色
      ctx.fillText(text, -20, 200) // 书写的内容及位置
      ctx.rotate('20*Math.PI/180') // 坐标系还原,如果后续没有其他操作,这一步可以省略
      // 将canvas的内容转换为base64编码
      const data = canvas.toDataURL('image/png', 1) // 1表示质量(无损压缩)

      window.onload = () => {
        const background = 'url(' + data + ') repeat'
        var watermark = document.createElement('div')
        watermark.style.width = '100%'
        watermark.style.height = '100%'
        watermark.style.position = 'fixed'
        watermark.style.left = '0'
        watermark.style.top = '0'
        watermark.style.pointerEvents = 'none'
        watermark.style.background = background
        watermark.style.zIndex = '9999'
        document.body.append(watermark)
      }
    },
    getLoginType(index) {
      this.isActive = index
    }
  }
}
</script>

<style lang="scss">
.login-copyright {
  color: #999;
  width: 100%;
  position: fixed;
  bottom: 30px;
  text-align: center;
}

.login-container {
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url("../../../public/img/login/login_bg01.jpg") center center no-repeat;
  background-size: cover;
  // animation: animate-cloud 20s linear infinite;
}

.login-tip {
  color: #409eff;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}

.login-logo {
  overflow: hidden;
  padding: 10px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}

.login-weaper {
  position: relative;
  margin: 0 auto;
  width: 456px;
  height: 478px;
  padding: 0 50px;
  box-sizing: border-box;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  background: url("../../../public/img/login/login_bg02.png") center center no-repeat;
  border-radius: 3px;
}
.login-type {
  display: flex;
  color: #31b0ff;
  font-size: 24px;
  justify-content: space-around;
  margin-top: 30px;
  div {
    position: relative;
    cursor: pointer;
  }
  div.active {
    color: #fff;
    span:first-child {
      position: absolute;
      width: 4px;
      background-color: #fff;
      height: 20px;
      border-radius: 2px;
      top: 8px;
      left: -10px;
    }
  }
}
.login-left,
.login-border {
  padding: 20px 0 40px 0;
  position: relative;
  align-items: center;
  display: flex;
}

.login-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  flex-direction: column;
  background-color: #409eff;
  color: #fff;
  float: left;
  width: 50%;
  position: relative;
}

.login-left .img {
  width: 140px;
}

.login-left .title {
  margin-top: 60px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 25px;
}

.login-border {
  margin-top: 10px;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  width: 100%;
  float: left;
  box-sizing: border-box;
}

.login-main {
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.login-main > h3 {
  margin-bottom: 20px;
}

.login-main > p {
  color: #76838f;
}

.login-title {
  color: #333;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  letter-spacing: 4px;
}

.login-select {
  input {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    border: none;
    text-align: center;
  }
}

.login-menu {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
  .el-checkbox__label {
    color: #fff;
  }
  a {
    color: #409eff;
    font-weight: 700;
    font-size: 12px;
    margin: 0px 8px;
  }
}

.login-submit {
  width: 100%;
  height: 45px;
  font-size: 18px;
  letter-spacing: 5px;
  text-indent: 5px;
  font-weight: 300;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  font-family: "neo";
  transition: 0.25s;
  background-color: #015fcb;
}

.login-form {
  margin: 10px 0;
  i {
    color: #FFF;
  }

  .el-form-item__content {
    width: 100%;
  }

  .el-form-item {
    margin-bottom: 32px;
  }
  .text-bg {
    background: url("../../../public/img/login/login_input_bg.png") 100% 100% no-repeat;
    background-size: cover;
    .login-code {
      position: absolute;
      right: 10px;
      top: 4px;
    }
  }
  .el-input {
    input {
      padding-bottom: 10px;
      text-indent: 30px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #96c6ff;
      height: 48px;
      padding-top: 10px;
      font-size: 16px;
    }

    .el-input__prefix {
      left: 10px;
      line-height: 48px;
      color: #fff;
      i {
        padding: 0 5px;
        font-weight: 600;
        font-size: 18px !important;
      }
    }
  }
}
.code-main {
  text-align: center;
  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    span {
      color: #00ff5a;
      margin: 0 10px;
    }
  }
  .code-img {
    img {
      width: 194px;
      height: 194px;
    }
    .refresh {
      margin: 30px auto;
      height: 48px;
      line-height: 48px;
      border:1px solid #0090d2;
      font-size: 18px;
      border-radius: 3px;
      width: 180px;
      cursor: pointer;
    }
  }
}

</style>
