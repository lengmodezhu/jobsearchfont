<template>
    <div id="thirdpage" class="detail" >
        <el-container style="height: 100vh;">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100vh; ">
                <el-menu :default-openeds="['1']" style="height: 100vh;"
                        background-color="rgb(48,65,86)"
                        text-color="#fff">
                <div style="height:100px;line-height:100px;text-align:center">
                    <img src="../assets/xiaohui.png" style="width:20px"/>
                    <b style="color:white">邮电东西</b>
                </div>
    
                </el-menu>
            </el-aside>

            <el-container>
                <el-main style="height:100vh">
                    <el-scrollbar>
                       <el-card class="box-card" style="height:500px">
                            <div  class="clearfix">
                                <div style="padding: 14px;">
                                <el-col :span="12">
                                    <div class="sub-title"><span style="float: left; padding: 3px 0">职位详情</span></div>

                                    <div class="sub-title"><el-col><span style="float: left; padding: 3px 0">{{searchmore.pos_name}}</span></el-col></div>
                                    <el-col>
                                        <el-row style="text-align: left;">
                                          <el-button size="mini">{{searchmore.pos_keyword}}</el-button>
                                          <el-button size="mini">{{searchmore.city}}</el-button>
                                          <el-button size="mini">{{searchmore.degree}}</el-button>
                                        </el-row>
                                    </el-col>
                                    <el-col>
                                        <el-row :gutter="10">
                                          <el-col :span="6"><div class="grid-content">
                                            <div class="demo-image__preview">
                                              <el-image
                                                style="width: 100px; height: 100px;border-radius: 50%"
                                                :src="url"
                                                :preview-src-list="srcList">
                                              </el-image>
                                            </div></div></el-col>
                                          <el-col :span="16"><div class="grid-content">
                                            <el-descriptions :column="2" >

                                                <el-descriptions-item  label="联系人">
                                                    <span style="font-weight:bolder;"> {{searchmore.person_in_charge}}</span>   
                                                </el-descriptions-item>
                                                <el-descriptions-item label="联系方式"><el-button type="success" icon="el-icon-phone" circle plain></el-button></el-descriptions-item>
                                                <el-descriptions-item label="公司">
                                                    <span style="font-weight:bolder;"> {{searchmore.enterprise}}</span>
                                                </el-descriptions-item>
                                                <el-descriptions-item label="职位">
                                                    <span style="font-weight:bolder;"> {{searchmore.charge_pos}}</span>
                                                </el-descriptions-item>
                                            </el-descriptions>
                                          </div></el-col>
                                        </el-row>
                                    </el-col>
                                </el-col>
                                </div>
                            </div>
                       </el-card>
                       <el-card class="box-card" style="height:900px">
                            <div>
                                <div slot="header" style="padding: 14px;">
                                    <div class="sub-title"><span style="float: left; padding: 3px 0">岗位关键词</span></div>
                                    <el-col>
                                        <el-row style="text-align: left;">
                                          <el-button plain>{{searchmore.pos_keyword}}</el-button>
                                        </el-row>
                                    </el-col>
                                </div>
                                <div slot="header" style="padding: 14px;">
                                    <div class="sub-title"><span style="float: left; padding: 3px 1">岗位详情</span></div>

                                    <el-col>
                                        <el-row >
                                        <div>{{searchmore.pos_detail}}</div>
                                        </el-row>
                                    </el-col>
                                </div>
                            </div>
                       </el-card>
                    </el-scrollbar>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default{
        name:"Detail",
        data() {
            return {
                url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fd058ccbf6c81800a74828894bb3533fa838b47c0&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657854714&t=24390709bec6512a20004e359e9fb9a8',
                srcList: [
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fd058ccbf6c81800a74828894bb3533fa838b47c0&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657854714&t=24390709bec6512a20004e359e9fb9a8',
                ],
                searchmore: this.$route.query.jobdetailquery
              }
        },
        methods: {

        },
    }
</script>
<style>

    .el-row {
        margin: 30px auto;
        text-align:center;
        width:100%;

    }

    .el-scrollbar {
        height: 100%;
    }
    .el-scrollbar__wrap {
        overflow: hidden;
    }


    .sub-title{
        font-weight: bolder;
        font-size:150%;
    }
</style>