<template>
  <el-row type="flex" class="container" justify="center" align="middle">
    <div class="wrap">
      <h3>登录</h3>
      <el-form ref="form" :model="form" label-width="80px" class="form" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      rules:{
        username:[
          {required:true,message:"请输入用户名",trigger:"blur"}
        ],
        password:[
          {required:true,message:"请输入密码",trigger:"blur"}
        ]
      }
    };
  },

  methods: {
    submitForm() {
      console.log(this.form);
      this.$refs.form.validate( valid => {
        if(valid) {
          this.$axios({
            url:"/login",
            method:'POST',
            data:this.form
          }).then( res => {
            let {message,statusCode,data} = res.data;

            console.log(res.data);
            if(statusCode === 401) {
              this.$message.error(message);
              return;
            }

            this.$message.success(message);
            localStorage.setItem("user",JSON.stringify(data));
            setTimeout(() => {
              this.$router.push("/");
            },1600);
          })
        }
      })
    },
    resetForm() {
      console.log(222);
    }
  }
};
</script>

<style scoped lang="less">
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;

  .wrap {
    background: #f1f3f4;
    width: 400px;

    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form {
      background: #fff;
      padding: 20px 20px 20px 0;
      border-radius: 5px;
    }
  }
}
</style>