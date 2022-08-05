<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import { pageResize } from './util/resetScreenSize'
export default {
  mounted() {
    // pageResize()
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.moveR-enter,
.moveR-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.moveR-leave,
.moveR-enter-to {
  transform: translate3d(0, 0, 0);
}

.moveL-enter,
.moveL-leave-to {
  transform: translate3d(100%, 0, 0);
}

.moveL-leave,
.moveL-enter-to {
  transform: translate3d(0, 0, 0);
}

.moveR-enter-active,
.moveR-leave-active,
.moveL-enter-active,
.moveL-leave-active {
  transition: all 0.5s linear;
}
</style>
<style lang="scss">
@import '@/style/common.scss';

* {
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
div,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

img {
  border: 0 none;
  vertical-align: top;
  max-height: 100%;
}

i,
em {
  font-style: normal;
}

ol,
ul {
  list-style: none;
}

input,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: inherit;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #666;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  font-size: 0.175rem;
}

.el-scrollbar {
  background-color: transparent;
}

div::-webkit-scrollbar-track,
div::-webkit-scrollbar {
  background-color: transparent;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.centerboth {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

.clearfix:after {
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

.clearfix {
  zoom: 1;
}

.mr5 {
  margin-right: 5px;
}

.ml5 {
  margin-left: 5px;
}

.m10 {
  margin: 10px;
}

.mt10 {
  margin-top: 10px;
}

.ml10 {
  margin-left: 10px;
}

.mr10 {
  margin-right: 10px;
}

.mb10 {
  margin-bottom: 10px;
}

.p10 {
  padding: 10px;
}

.pt10 {
  padding-top: 10px;
}

.pb10 {
  padding-bottom: 10px;
}

/*边框*/
.b-b:after,
.b-t:after {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  height: 0;
  content: '';
  transform: scaleY(0.5);
  border-bottom: 1px solid $border-color-dark;
}

.b-b:after {
  bottom: 0;
}

.b-t:after {
  top: 0;
}

/*** element-ui重置样式*/
.el-dialog__wrapper {
  .el-dialog {
    background: rgba($color: #000000, $alpha: 0.7);

    .el-dialog__header {
      padding: 10px;

      .el-dialog__title {
        color: #fff;
      }
    }

    .el-dialog__body {
      padding: 10px 20px;
    }

    .el-tabs__item {
      color: #fff;
    }

    .el-tabs__item.is-active {
      color: $basic-text-color;
    }

    .el-tabs__active-bar {
      background-color: $basic-text-color;
    }
  }
}

/**告警列表公用样式 */
.common_list_block {
  .common_b {
    .title {
      padding-left: 10px;
      padding-top: 2px;
      font-size: 14px;
      background: url('../public/img/sample/title_bg_text.png') 8px 5px no-repeat;

      .small {
        font-size: 12px;
        margin-top: 2px;
        transform: scaleY(0.4);
        color: #aaa;
      }

      .right-text-btn {
        cursor: pointer;
        margin-right: 5px;
        padding: 0 5px;
        border-radius: 3px;
        border: 1px solid #08656c;
      }
    }

    .text2 {
      font-size: 12px;
      margin-top: 2px;
      transform: scaleY(0.4);
      color: #aaa;
    }

    .b_content {
      height: calc(100% - 47px);

      .img_text_box {
        padding: 10px 10px 0 10px;

        img {
          width: 100%;
        }
      }
    }

    .search_box {
      padding: 0px 10px 10px 10px;
      position: relative;
      padding-left: 45px;

      img {
        position: absolute;
        width: 18px;
        height: 18px;
        left: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
      }

      input {
        height: 15px;
        width: 240px;
        color: #fff;
        outline-style: none;
        -webkit-appearance: none;
        border: none;
        background: none;
        margin-top: 5px;
      }

      .search_but {
        cursor: pointer;
        color: #fff;
        font-size: 12px;
        padding: 1px 5px;
        border: 1px solid #8fd5f3;
        border-radius: 5px;
        background-color: #19414a;
      }

      .search-text {
        background: #091d32;
        border: 1px solid #33f6ff;
        padding: 0 5px;
        cursor: pointer;
        margin-top: 5px;
        border-radius: 3px;
      }
    }

    .table_box {
      height: 100%;
      width: 98%;
      margin: 0 auto;
      color: #ffffff;
      margin-top: 10px;
      font-size: 12px;

      .table_head {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        border-bottom: 1px solid;
        border-top: 1px solid;
        -o-border-image: url('../public/img/images/x.png') 10 0 stretch;
        border-image: url('../public/img/images/x.png') 10 0 stretch;
        color: #fff;
        height: 0.375rem;
        line-height: 0.375rem;
      }

      .table_content {
        overflow: auto;
        height: calc(100% - .375rem);

        .item_content {
          display: flex;
          display: -webkit-flex;
          border-bottom: 1px solid #05454a;
          margin-bottom: 0.05rem;
          background-image: linear-gradient(90deg, rgba(23, 72, 100, 0.64) 0%, #09161c 100%);
          color: #00ecff;
          align-items: center;
          height: .45rem;

          .item-level-2 {
            border-left: 4px solid #dba218;
          }

          .item-level-1 {
            border-left: 4px solid #f43f3f;
          }

          .item-level-3 {
            border-left: 4px solid #00e9ff;
          }

          .item:last-child {
            cursor: pointer;
          }

          .item_2 {
            padding: 0;
          }

          .green {
            color: #00ff00;
          }

          .error {
            color: #ff0000;
          }

          .item:last-child {
            cursor: pointer;
          }
        }
      }

      .item,
      .item-title {
        flex: 1;
        text-align: center;

        .img_location {
          height: .275rem;
          width: .75rem;
        }
      }

      .item-title {
        height: .45rem;
        line-height: .45rem;
      }
    }
  }
}

/**普通列表公共样式 */
.block-list-2 {
  .block-list-2-head {
    display: flex;
    justify-content: space-between;
    padding: 0.125rem 0;
    height: .45rem;

    div {
      flex: 1;
      text-align: center;
    }
  }

  .block-list-2-content {
    .item-list {
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient(90deg, rgba(23, 72, 100, 0.64) 0%, #09161c 100%);
      height: .45rem;
      line-height: .45rem;

      div {
        flex: 1;
        text-align: center;
        color: #00ecff;
        font-size: .175rem;

        .el-switch {
          width: .375rem;
        }

        ::v-deep.is-checked {
          .el-switch__core {
            background: transparent;
            border-color: #00e235;

            &:after {
              margin-left: -0.175rem;
              background: #00e235;
            }
          }
        }

        ::v-deep.el-switch__core {
          width: .375rem;
          height: .2125rem;
          background: transparent;

          &:after {
            width: .15rem;
            height: .15rem;
            margin-left: 0;
          }
        }

        img {
          width: .8rem;
          height: .3rem;
          margin-top: .075rem;
          cursor: pointer;
        }
      }

      &:not(:last-child) {
        margin-bottom: .05rem
      }

      .green {
        color: #00ff00;
      }

      .error {
        color: #ff0000;
      }
    }
  }
}

/**标题头部样式 */
.title-common-box {
  padding: 6px;
  font-size: 0.2rem;
  border-bottom: 1px solid;
  -o-border-image: url('../public/img/images/line01.png') 10 0 stretch;
  border-image: url('../public/img/images/line01.png') 10 0 stretch;

  .text-common-1-level {
    display: flex;
    display: -webkit-flex;
    align-items: center;

    .text-left {
      padding-right: 8px;
    }

    .text-shu {
      color: #32eaf7;
      height: 16px;
    }

    .text-liner-bg {
      flex: 2;
      height: 6px;
      width: 76px;
      margin-left: -1px;
      background: linear-gradient(to right, #00ebff, #09161c 30%);
      background: -moz-linear-gradient(to right, #00ebff, #09161c 30%);
      background: -webkit-linear-gradient(to right, #00ebff, #09161c 30%);
      background: -o-linear-gradient(to right, #00ebff, #09161c 30%);
      background: -ms-linear-gradient(to right, #00ebff, #09161c 30%);
    }

    .text-more {
      width: .525rem;
      height: .275rem;
      border-radius: 4px;
      background: #2b425e;
      border: solid 1px #00566b;
      font-size: .175rem;
      text-align: center;
      cursor: pointer;
    }
  }

  .text-common-2-level {
    margin-top: 5px;
    border: 1px solid #176167;
    background: #333637;
    height: 6px;
    position: relative;

    span {
      position: absolute;
      font-size: 12px;
      transform: scaleY(0.4);
      color: #aaa;
      left: 5px;
      top: -5px;
      border-right: 2px solid #fff;
      padding-right: 15px;
    }
  }
}


.title-box-top {
  border-top: 1px solid;
  -o-border-image: url('../public/img/images/line01.png') 10 0 stretch;
  border-image: url('../public/img/images/line01.png') 10 0 stretch;
}

/**列表搜索框样式 */
.search-block {
  position: relative;

  .search-main {
    .el-input__inner {
      height: .525rem;
      line-height: .525rem;
      background: transparent;
      border: none;
      color: #fff;
    }

    el-input__icon {
      line-height: .525rem;
      color: #fff;
    }
  }

  .search-btn {
    position: absolute;
    right: 20px;
    background-color: #091d32;
    border-radius: 4px;
    border: solid 1px rgba(51, 246, 255, 0.47);
    width: .525rem;
    height: .3rem;
    text-align: center;
    font-size: .15rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

/**列表分割线样式 */
.split-line {
  margin: 0 10px;
  width: 4.975rem;
  height: 1px;
  position: relative;
  background-image: linear-gradient(#015c6f, #015c6f), linear-gradient(#ddc221, #ddc221);

  &::before {
    content: '';
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;
    background-image: linear-gradient(#24d1fc, #24d1fc), linear-gradient(#ddc221, #ddc221);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;
    background-image: linear-gradient(#24d1fc, #24d1fc), linear-gradient(#ddc221, #ddc221);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
}

.text-error {
  color: #ff0000;
}

.text-yellow {
  color: #f0ff00;
}

.text-green {
  color: #00ff30;
}
.text-normal {
  color: #00eeff;
}
.dialog-picker {
  z-index: 10002 !important;
  background-color: #0d3743 !important;
  border: 1px solid #00ffff !important;
  color: #eee;

  .el-picker-panel__sidebar {
    background-color: #0d3743 !important;

    .el-picker-panel__shortcut {
      color: #fff;
    }
  }

  .popper__arrow {
    border-bottom-color: #00ffff !important;

    &::after {
      border-bottom-color: #0d3743 !important;
    }
  }

  .el-date-table td.in-range div,
  .el-date-table td.in-range div:hover,
  .el-date-table.is-week-mode .el-date-table__row.current div,
  .el-date-table.is-week-mode .el-date-table__row:hover div {
    background-color: #05647f
  }

  .el-date-table td.end-date span,
  .el-date-table td.start-date span {
    background-color: #05647f;
  }

  .el-picker-panel__icon-btn {
    color: #fff;
  }
}

.height-100 {
  height: 100%;
}

.height-50 {
  height: 50%
}

.height-33 {
  height: 33%;
}

.height-67 {
  height: 67%;
}

.text-oveflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
