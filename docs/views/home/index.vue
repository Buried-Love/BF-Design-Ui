<template>
  <div id="home">
    <div class="banner">
      <div class="header">
        <div class="logo">
          <img src="../../assets/logo.png" alt />
          <div>BF-Design-Ui</div>
        </div>
        <div class="search_box">
          <div class="search">
            <div class="search_icon"></div>
            <input type="text" />
          </div>
        </div>
        <ul class="menu-row">
          <li>介绍</li>
          <li>文档</li>
          <li>组件</li>
        </ul>
        <div class="git">
          <a href target="_black">
            <div class="github"></div>
          </a>
          <a href="https://gitee.com/Buried-LoveBoy/bf-design-ui" target="_black">
            <div class="gitee"></div>
          </a>
        </div>
      </div>
      <h2
        class="slogan"
        style="transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"
      >
        <div>
          <span style="opacity: 1; transition: opacity 1300ms ease-in 373ms;">BF</span>
          <span style="opacity: 1; transition: opacity 1300ms ease-in 274ms;">-</span>
          <span style="opacity: 1; transition: opacity 1300ms ease-in 403ms;">Design</span>
          <span style="opacity: 1; transition: opacity 1300ms ease-in 527ms;">-</span>
          <span style="opacity: 1; transition: opacity 1300ms ease-in 341ms;">Ui</span>
        </div>
      </h2>
      <div class="tips">BF-Design-Ui 一套为开发者准备的基于 Vue 2.0 的UI件库 为您创造高效工作体验!</div>
      <div class="home-version">
        <div class="v-icon"></div>当前版本: v1.0.1
      </div>
      <div class="btn">
        <Button type="primary" size="large" @click="testClick">开始使用</Button>
        <Button type="default" size="large" @click="testClick">查看介绍</Button>
      </div>
    </div>
    <footerBar />
  </div>
</template>
<script>
import Button from "/src/components/button";
import Alter from "/src/components/alert";
import footerBar from "../../components/footer.vue";
export default {
  name: "home",
  components: {
    Button,
    Alter,
    footerBar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    testClick() {
      console.log(12312312312321);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='scss'>
#home {
  width: 100%;
  .banner {
    width: 100%;
    height: 648px;
    text-align: center;
    background: url("http://www.bufantec.com/site/manlv/static/img/bg2.jpg")
      no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
    .header {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1280px;
      height: 64px;
      margin-right: auto;
      margin-left: auto;
      margin: 20px auto 0;
      padding: 0 40px;
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      .logo {
        display: flex;
        align-items: center;
        width: 204px;
        height: 100%;
        padding-left: 40px;
        margin-right: 18px;
        overflow: hidden;
        font-weight: bold;
        font-size: 18px;
        color: #fff;
        font-family: webfont, sans-serif;
        letter-spacing: 2.5px;
        letter-spacing: -0.18px;
        white-space: nowrap;
        text-decoration: none;
        cursor: pointer;
        img {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
      }
      .search_box {
        width: 460px;
        height: 20px;
        border-left: 1px solid #f0f0f0;
        padding-left: 20px;
        .search {
          position: relative;
          width: 180px;
          height: 20px;
          border-radius: 30px;
          background-color: #f0f0f0;
          .search_icon {
            position: absolute;
            left: 5px;
            top: 2px;
            width: 18px;
            height: 18px;
            background: url("../../assets/svg/search.svg") no-repeat center;
            background-size: 100% 100%;
          }
          input {
            width: 100%;
            height: 100%;
            font-size: 12px;
            columns: #333;
            padding-left: 30px;
            background: none;
            outline: none;
            border: none;
            &:focus {
              border: none;
            }
          }
        }
      }
      .menu-row {
        display: flex;
        align-items: center;
        margin-left: auto;
        width: 210px;
        height: 100%;
        li {
          width: 64px;
          list-style: none;
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
        }
      }
      .git {
        display: flex;
        .github {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background: url("../../assets/svg/github.svg") no-repeat center;
          background-size: 100% 100%;
          cursor: pointer;
        }
        .gitee {
          width: 22px;
          height: 22px;
          background: url("../../assets/svg/gitee.svg") no-repeat center;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
    }
    .slogan {
      position: relative !important;
      margin-top: 150px;
      margin-bottom: 0.5em;
      font-weight: 500;
      color: #fff;
      font-size: 68px;
      font-family: webfont, sans-serif;
      line-height: 82px;
      letter-spacing: 2.5px;
      text-align: center;
      text-shadow: 0 6px 27px #02114c;
    }

    .tips {
      width: 100%;
      text-align: center;
      color: #f0f0f0;
      font-size: 18px;
      margin-top: 74px;
    }
    .home-version {
      position: relative;
      width: 175px;
      font-size: 16px;
      color: #f0f0f0;
      margin: 0 auto;
      margin-top: 55px;
      .v-icon {
        position: absolute;
        left: 0;
        top: 1px;
        width: 20px;
        height: 20px;
        background: url("../../assets/svg/version.svg") no-repeat center;
        background-size: 100% 100%;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      width: 238px;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
}
</style>