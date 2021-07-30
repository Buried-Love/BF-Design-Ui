<template>
  <div id="footerBar">
    <div class="footer_main">
      <ul>
        <li>
          <div class="title">相关生态</div>
          <div class="item">BF-Design-Admin</div>
        </li>
        <li>
          <div class="title">生态</div>
        </li>
        <li>
          <div class="title">生态</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerBar",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss'>
#footerBar {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #000;
  .footer_main {
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
    max-width: 1280px;
    margin: 0 auto;
    ul {
      display: flex;
      justify-content: space-between;
      text-align: center;
      li {
        width: 33.3%;
        list-style: none;
        min-width: 250px;
        .title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
        }
        .item {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
}
</style>