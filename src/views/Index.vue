<template>
  <el-container class="wrap">
    <el-aside width="200px">
      <h3>黑马头条</h3>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/post_list">文章列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/post_add">发布文章</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <img :src="$axios.defaults.baseURL + user.head_img" alt />
        <span class="name">{{user.nickname}}</span>
        <span class="loginout">退出登录</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user")).user;
    console.log(this.user);
  }
};
</script>

<style scoped lang="less">
.wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #fff;
  text-align: right;
  line-height: 60px;

  * {
    vertical-align: middle;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
  }

  span {
    margin-left: 10px;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;

  h3 {
    text-align: center;
    color: #fff;
    margin-top: 10px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>