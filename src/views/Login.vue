<template slot-scope="scope">
    <div id = "firstpage" style="min-height: 100vh;">
        <el-container style="height:100vh">
            <el-main style="height:100vh">
                <el-form :model="searchForm" class="searchContain" style="height:90vh" >
                    <img alt="Vue logo" style="width: 400px; height: 400px"  src="../assets/xiaohui.png">
                    <h1 clsss="h1" style="font-size:40px">邮电东西</h1>
                    <el-form-item>
                        <el-input  class="firstsearch" type="text" v-model="searchForm.search1" placeholder="请输入岗位名称或关键词"></el-input>
                        <el-button  type="primary" @click="submitLogin">查找</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default{
        name:"Login",
        data() {
            return {
                searchForm:{
                    search1:'',
                },
                
            };
        },
        methods: {
            submitLogin(){
                const _this = this

         
                 _this.$router.push({path:"/jobsearch",query:{searchwhat:this.searchForm.search1}}).then(res =>{
                    console.log(res)
                 })
            }
        },
    }
</script>
<style>
    .searchContain{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 15px auto;
        width:1000px;
        height: 800px;
        padding: 15px 35px 15px 35px;
        background-color:white;
        border:1px solid gray;
        box-shadow: 0 0 25px gray;
        
    }
    
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .firstsearch{
        max-width: 500px;
        margin: 30px auto;
    }

   
</style>
