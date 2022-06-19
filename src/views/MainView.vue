<template>
    <div id="secondpage" class="mainview" >
        <el-container style="height: 100vh;">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 100vh; ">
                <el-menu :default-openeds="['1','2']" style="height: 100vh;"
                        background-color="rgb(48,65,86)"
                        text-color="#fff">
                <div style="height:100px;line-height:100px;text-align:center;font-size: 30px;font-family: STXingkai;color: white;">
                    <img src="../assets/xiaohui.png" style="width:20px"/>
                    邮电东西
                </div>

                <div>
                <div style="height:40px;line-height:40px;text-align:center"><b style="color:#E9EEF3">信息来源</b></div>
                <div  style="height:30px;line-height:30px;text-align:center ;color: #E9EEF3;cursor:pointer;"
                @click="sourceClick(item)" v-for="(item,sindex) in sourceList" :key="sindex">
                    {{item}}
                </div>

                <div style="height:10px;line-height:10px;text-align:center"></div>
                </div>





                <div style="height:40px;line-height:40px;text-align:center"><b style="color:white">搜索记录</b></div>
                <div  style="height:30px;line-height:30px;text-align:center ;color: white;cursor:pointer;"
                @click="menuClick(item)" v-for="(item,subindex) in historyList" :key="subindex">
                    {{item}}
                </div>
            



                
                <!-- <el-submenu index="1">
                    <template slot="title"><i class="el-icon-s-claim"></i>历史搜索</template>
         
                    <el-menu-item @click="menuClick(subindex)" v-for="(item,subindex) in historyList" :key="subindex">{{item}}</el-menu-item>


                </el-submenu>
        
                <el-submenu index="2"  >
                    <template slot="title"><i class="el-icon-s-check"></i>所属网站</template>
                    <el-menu-item index="不限"  @click="sourceclick">不限</el-menu-item>
                    <el-menu-item index="猎聘">猎聘</el-menu-item>
                    <el-menu-item index="拉勾">拉勾</el-menu-item>
                    <el-menu-item index="智联招聘">智联招聘</el-menu-item>
                    <el-menu-item index="今日招聘">今日招聘</el-menu-item>
                    <el-menu-item index="58同城">58同城</el-menu-item>
                </el-submenu> -->
                




                </el-menu>

                   

            </el-aside>
            
            <el-container>
                <el-header style="text-align: right; font-size: 12px ;height: 20vh;">
                    <el-carousel :interval="1000" type="card" height="20vh">
                        <el-carousel-item>
                            <img src="../assets/1.png"/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/2.png"/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/3.png"/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/4.png"/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/5.png"/>
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../assets/6.png"/>
                        </el-carousel-item>
                        
                    </el-carousel>
                </el-header>
                
                <el-main style="height:80vh">
                    <el-scrollbar>
                        <el-row style="padding:5px" >
                            <el-input
                            style="width:60%"
                            v-model="search"
                            placeholder="搜索职位/公司/内容关键词"
                            prefix-icon="el-icon-search"
                            @input="change($event)">
                            </el-input>
                            <el-button style="margin-left:10px" type="primary" icon="el-icon-search" @click="searchLogin">搜索</el-button>
                        </el-row>
                        <div class="check" style="height:250px">
                            <div class="checkdetail" >
                                <div class="selecttitle">城市</div>
                                <el-radio-group v-model="city" size="medium" @change="cityChange">
                                    <el-radio-button label="不限"></el-radio-button>
                                    <el-radio-button label="北京"></el-radio-button>
                                    <el-radio-button label="上海" ></el-radio-button>
                                    <el-radio-button label="广州"></el-radio-button>
                                    <el-radio-button label="深圳"></el-radio-button>
                                    <el-radio-button label="杭州"></el-radio-button>
                                </el-radio-group>
                            </div>
                        
                            <div class="checkdetail" >
                                <div class="selecttitle">薪资要求</div>
                                <el-radio-group v-model="money" size="medium" @change="moneyChange">
                                    <el-radio-button label="不限"></el-radio-button>
                                    <el-radio-button label="3k以下" ></el-radio-button>
                                    <el-radio-button label="3k-5k"></el-radio-button>
                                    <el-radio-button label="5k-10k"></el-radio-button>
                                    <el-radio-button label="10k-20k"></el-radio-button>
                                    <el-radio-button label="20k以上"></el-radio-button>
                                </el-radio-group>
                                自定义
                                <el-input
                                style="width:10%"
                                v-model="money"
                                @input="change($event)">
                                </el-input>
                                <el-button style="margin-left:10px" type="primary" icon="el-icon-search" @click="moneyChange"></el-button>
                                
                            </div>

                            <div class="checkdetail" >
                                <div class="selecttitle">经验要求</div>
                                <el-radio-group v-model="exc" size="medium" @change="excChange">
                                    <el-radio-button label="不限"></el-radio-button>
                                    <el-radio-button label="应届生" ></el-radio-button>
                                    <el-radio-button label="1-3年"></el-radio-button>
                                    <el-radio-button label="3-5年"></el-radio-button>
                                    <el-radio-button label="5年以上"></el-radio-button>
                                </el-radio-group>
                            </div>
                            <div class="checkdetail" >
                                <div class="selecttitle">更多</div>
                                学历要求：
                                <el-select style="width:100px" v-model="school" placeholder="不限" size="small" @change="schChange"> 
                                    <el-option
                                    v-for="item in sch"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>

                                职业领域：
                                <el-select style="width:100px" v-model="posdomain" placeholder="不限" size="small" @change="posdomChange"> 
                                    <el-option
                                    v-for="item in posdom"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>

                                企业规模：
                                <el-select style="width:100px" v-model="scale" placeholder="不限" size="small" @change="scaleChange"> 
                                    <el-option
                                    v-for="item in sca"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>    
                            <div class="checkdetail" >
                                <div class="selecttitle">排序方式</div>
                                按照薪资排序
                                <el-radio-group v-model="money_pai" size="mini" placeholder="no" @change="money_paiChange">
                                    <el-radio-button label="↑"></el-radio-button>
                                    <el-radio-button label="↓"></el-radio-button>
                                </el-radio-group>
                                按照企业规模排序
                                <el-radio-group v-model="scale_pai" size="mini" placeholder="no" @change="scale_paiChange">
                                    <el-radio-button label="↑"></el-radio-button>
                                    <el-radio-button label="↓"></el-radio-button>
                                </el-radio-group>

                            </div>

                            


                        </div>
     
                        <el-card class="jobcard" shadow="hover" v-for="item in jobmain" :key="item.id" @click.native="toDetail(item)" >
                                <div style="border-bottom:1px solid gray;height:50px;line-height:50px ;">
                                    <div style="width:15%;display:inline-block;font-size:larger;font-weight: bolder" >[{{item.city}}]</div>
                                    <div style="width:40% ;display:inline-block;font-size:larger;font-weight: bolder" >{{item.pos_name}}</div>
                                    <div style="width:30%;display:inline-block;font-size: larger;font-weight: bolder;color:cornflowerblue;">{{item.salary_low_bound}}-{{item.salary_high_bound}}k/{{item.salary_fee_months}}薪</div>
                                    <div style="width:15%;display:inline-block;font-size: larger;font-weight: bolder;color:darkblue">来源：{{item.pos_source}}</div>
                                </div>
                                <div style="height:50px;line-height:50px ;">
                                
                                    <div class="posbottom" style="width:10%;">{{item.degree}}</div>
                                    <div class="posbottom" style="width:10%;">{{item.exp}}</div>
                                    <div class="posbottom" style="max-width:72%;font-size: x-small;">{{item.pos_keyword}}</div>

   
                                </div>
                                  
                                <div style="height:60px;line-height:60px">
                                    <div class="enterp"  >
                                        <i class="el-icon-suitcase"></i>
                                        {{item.enterprise}} |
                                    </div>
                                    <div class="enterp" >企业规模：{{item.enterprise_scale}}</div>
                                    <div class="hr">入库时间：{{item.create_time}}</div>
                                    <div class="hr">{{item.charge_pos}}</div>
                                    <div class="hr">
                                        <i class="el-icon-user-solid"></i>
                                        联系人：{{item.person_in_charge}} |</div>                                   
                                </div>
                        </el-card>

                        <div class="block">
                            <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-size="100"
                            layout="total, prev, pager, next"
                            :total="1000">
                            </el-pagination>
                        </div>
                    </el-scrollbar>
                        
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import { Result } from 'element-ui';
    export default{
        name:"MainView",
        data() {
            return {
                city:"不限",
                money:"不限",
                exc:"不限",
                search:this.$route.query.searchwhat,
                currentPage1: 1,
                school:"不限",
                posdomain:"不限",
                scale:"不限",
                money_pai:"no",
                moneypai:"no",
                scale_pai:"no",
                scalepai:"no",
                pos_source:"不限",



                sch:[{
                    value:"不限",
                    label:"不限"
                },{
                    value:"大专",
                    label:"大专"
                },{
                    value:"本科",
                    label:"本科"
                },{
                    value:"硕士",
                    label:"硕士"
                },{
                    value:"博士",
                    label:"博士"
                }],
                posdom:[{
                    value:"不限",
                    label:"不限"
                },{
                    value:"后端开发",
                    label:"后端开发"
                },{
                    value:"前端开发",
                    label:"前端开发"
                },{
                    value:"移动端开发",
                    label:"移动端开发"
                },{
                    value:"人工智能",
                    label:"人工智能"
                },{
                    value:"测试运维",
                    label:"测试运维"
                },{
                    value:"数据库",
                    label:"数据库"
                },{
                    value:"硬件开发",
                    label:"硬件开发"
                },{
                    value:"其他",
                    label:"其他"                   
                }],


                sca:[{
                    value:"不限",
                    label:"不限"
                },{
                    value:"1-49人",
                    label:"1-49人"
                },{
                    value:"20-99人",
                    label:"20-99人"
                },{
                    value:"100-499人",
                    label:"100-499人"
                },{
                    value:"500-999人",
                    label:"500-999人"
                },{
                    value:"1000-2000人",
                    label:"1000-2000人"
                },{
                    value:"2000-5000人",
                    label:"2000-5000人"
                },{
                    value:"5000-10000人",
                    label:"5000-10000人"
                },{
                    value:"10000人以上",
                    label:"10000人以上"
                }],
                jobmain:[],
                historyList:[],
                sourceList:['猎聘','拉勾','智联招聘','今日招聘','58同城'],

            };
        },
        created(){
            const _this = this
            _this.$axios.get("http://39.106.22.94:8081/search",{
            params:{
                'posKeyword':this.search,
                'city':this.city,
                'salaryStr':this.money,
                'salarySort':this.moneypai,
                'exp':this.exc,
                'degree':this.degree,
                'posDomain':this.posdomain,
                'enterScale':this.scale,
                'scaleSort':this.scalepai,
                'posSource':this.pos_source,
                'pageNo':this.currentPage1,
                'pageSize':20,
            }
            }).then((res)=>{
                console.log(res);
                this.showJob(res);
            })

        },



        methods: {
            showJob(res){
                console.log(res)
                const data = res.data.data
                this.jobmain = data
            },
            
            postToEnd(){
                alert("发后端");
                this.$axios.get("http://39.106.22.94:8081/search",{
                params:{
                    'posKeyword':this.search,
                    'city':this.city,
                    'salaryStr':this.money,
                    'salarySort':this.moneypai,
                    'exp':this.exc,
                    'degree':this.degree,
                    'posDomain':this.posdomain,
                    'enterScale':this.scale,
                    'scaleSort':this.scalepai,
                    'posSource':this.pos_source,
                    'pageNo':this.currentPage1,
                    'pageSize':20,
                }
              }).then((res)=>{
                    console.log(res);
                    this.showJob(res);
                })
            },


            searchLogin(){
                if (!this.historyList.includes(this.search)) {
                  this.historyList.unshift(this.search);
                  localStorage.setItem("historyList", JSON.stringify(this.historyList));
                  if(this.historyList.length > 5) this.historyList.pop();
                }else{
                    let i =this.historyList.indexOf(this.search);
                    this.historyList.splice(i,1)
                    this.historyList.unshift(this.search);
                    localStorage.setItem("historyList", JSON.stringify(this.historyList));
                }

                // 全局搜索点击这
                this.postToEnd();
                // this.historyList

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);

            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.postToEnd()
            },
            sourceClick(val){
                console.log(val);
                this.pos_source = val;
                this.postToEnd();

            },

            change(e){
                this.$forceUpdate();
            },

            menuClick(val){
                console.log(val);
                this.search = val;
                this.postToEnd();

            },

            cityChange(val){
                console.log(`城市改 ${val}`);
                this.postToEnd();

 
            },
            moneyChange(val){
                console.log(`薪资改 ${val}`);
                this.postToEnd();
            },
            excChange(val){
                console.log(`经验改 ${val}`);
                this.postToEnd();
            },
            schChange(val){
                console.log(`学历改 ${val}`);
                this.postToEnd();
            },
            posdomChange(val){
                console.log(`领域改 ${val}`);
                this.postToEnd();
            },
            scaleChange(val){
                console.log(`企业规模改 ${val}`);
                this.postToEnd();
            },
            money_paiChange(val){
                if(this.money_pai == "↑"){
                    this.moneypai = "asc"
                }else if(this.money_pai == "↓"){
                    this.moneypai = "desc"
                }
                console.log(`金额排序改 ${this.money_pai}`);
                this.postToEnd();
            },
            scale_paiChange(val){
                if(this.scale_pai == "↑"){
                    this.scalepai = "asc"
                }else if(this.money_pai == "↓"){
                    this.scalepai = "desc"
                }
                console.log(`金额排序改 ${this.money_pai}`);
                this.postToEnd();
            },

            toDetail(val){
                console.log(val)
                this.$router.push({path:"/jobsearch/detail",query:{jobdetailquery:val}}).then(res =>{
                    console.log(res)
                 })
            }

        },

        

    }
</script>
<style>
    .el-row {
        margin: 30px auto;
        text-align: center;
    }
    
    .el-scrollbar {
        height: 100%;
    }
    .el-scrollbar__wrap {
        overflow: hidden;
    }
    .check{
        background-color:rgb(255, 255, 255);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        margin: 30px 50px;
    }

    .checkdetail{
        height: 45px;
        text-align: left;
        padding: 0px ;
        margin:0 0 0 10px;
    }
    .selecttitle{
        float: left;
        height: 45px;
        width: 100px;
        text-align: center;
        font-weight: bold;
    }
    .jobcard{
        height: 200px;
        text-align: center;
        margin: 30px 50px;
        padding: 0px;
        background-color:rgb(255, 255, 255);
        border-radius: 30px
    }
    .posbottom{
        
        height: 40px;
        line-height:40px;
        font-size:medium;
        border-radius: 10px;
        background-color: #eef1f5;
        margin: 5px 10px;
        vertical-align: middle;
        float: left;
        padding:0px 10px;
        /* display:inline-block; */
       
    }
    .enterp{
        height: 60px;
        /* display:inline-block; */
        line-height:60px;
        vertical-align: middle;
        text-align: left;
        margin: 5px 0px 5px 15px;
        float: left;
        font-weight: bold;
    }

    .hr{
        height: 60px;
        /* display:inline-block; */
        line-height:60px;
        vertical-align: middle;
        text-align: left;
        margin: 5px 0px 5px 15px;
        float: right;;
        font-weight: bold;
    }

    .el-radio-group{
        margin:0px 30px 0px 0px;
    }
    .el-select{
        margin:0px 30px 0px 0px;
    }
</style>