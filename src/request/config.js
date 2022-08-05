// PATH_ENV 获取开发环境还是测试环境，通过命令行配置
const PATH_ENV = process.env.NODE_ENV
console.log(PATH_ENV)
const BASEURL = {
  development: 'http://47.119.132.84:9999', // 开发
  // development: 'http://192.168.1.116:8080', // 开发
  production: 'http://47.119.132.84:9999'
}

// PATH_ENV
const host = BASEURL[PATH_ENV]

export default {
  host
}
