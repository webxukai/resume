<template>
  <div>
    <h4>工作经验</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="company" label="公司" width="100"></el-table-column>
      <el-table-column prop="project" label="项目" width="150"></el-table-column>
      <el-table-column prop="rate" label="贡献度" width="80"></el-table-column>
      <el-table-column prop="detail" label="项目描述"></el-table-column>
      <el-table-column prop="detailMe" label="责任描述"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2018.9 - 2019.3",
          company: "上海友声",
          project: "精函商户版APP",
          rate: "90%",
          detail:
            "APP是公司主打项目，通过IP地址链接溯源秤，APP上可以编辑PLU(商品)，快捷键等功能加密导入到溯源秤中，也可以通过APP从溯源秤上回收PLU,快捷键等。APP统计商户每个溯源秤出售的商品，包括商品的支付方式，总金额，错误异常等。也提供商户绑定功能，供商户之间合作。",
          detailMe:
            "我主要负责①商户与溯源秤的设备解绑。②吉卡云支付会员板块，包括上级商户，下级商户开通吉卡云服务，下级商户向上级商户申请绑定与上级商户是否同意，商户店铺经营证，身份证加密保存上传，申请列表多条件筛选。③支付明细统计展示，包括不同类型（成功，未支付，错误，异常等）日志，交易金额，支付方式（微信，支付宝，卡付，现金等），支付状态以及溯源秤型号字符编码等。④PLU快捷键下发和回收，包括从不同店铺，用户，溯源秤ID等多重筛选。溯源秤与APP之间翻转加密等方式传输。快捷键通过图片保存等。⑤双语功能，参与部分。APP支持汉语，英语。⑥意见反馈，使用说明书PDF查看等功能。"
        },
        {
          date: "2018.9 - 2019.3",
          company: "上海友声",
          project: "吉卡云支付微信小程序",
          rate: "80%",
          detail:
            "小程序是配合APP的项目。首页广告轮播图，和滚动通知。核心业务是家庭组模块。用于吉卡云用户使用卡支付和组件家庭组功能，便于商户管理，主要包括一下几个页面：创建家庭组，加入家庭组，邀请家庭组成员，指定管理员并退出家庭组。卡绑定，卡解绑，卡支付，卡赠送，卡查询，卡免密设置，个人中心的意见反馈，版本介绍，修改密码，手机绑定等功能。",
          detailMe:
            "我主要使用wx.requestPayment和md5做了个支付接口。微信的交互API封装了一个tip.js工具库供所有页面使用，包括弹出提示框，弹出确认框，警告框，错误框，弹出加载提示，加载完毕，弹出下拉动作框，分享等。使用wx.request，Promise封装了一个net.js,包括GET,POST,PUT,DELETE请求。部分家庭组页面业务实现。"
        },
        {
          date: "2018.9 - 2019.3",
          company: "上海友声",
          project: "吉卡云后台管理与精函Web端开发与重构",
          rate: "80%",
          detail:
            "吉卡云后台管理系统是公司管理吉卡云会员卡的web端项目，主要负责会员卡的消费充值赠送等功能。精函后台管理系统是负责管理经销商的个人信息，对溯源秤的操作等。",
          detailMe:
            " 我负责把吉卡云后台管理系统从使用ice的第三方库重新使用Vue框架进行还原原网站，对精函后台管理系统使用的JQ框架重新用VUE框架进行还原。提升网站性能，单一技术栈，便于后期管理与开发。"
        },
        {
          date: "2018.9 - 2019.3",
          company: "上海友声",
          project: "智慧农贸",
          rate: "80%",
          detail:
            "智慧农贸是公司目前正在推广的产品，用于菜市场的每个摊位台头有显示器，轮播摊位卖家信息，菜价，信用度，和广告栏位的展示。菜市场进出口有大竖屏展示广告栏位，当天菜价，菜市地图等信息。",
          detailMe:
            "从0到1使用Vue技术栈，搭建项目，组件开发与复用。商户可选则展示页面。"
        },
        {
          date: " 2017.10 - 2018.7 ",
          company: "苏州德创",
          project: "OA管理系统",
          rate: "30%",
          detail:
            " 参与公司OA系统开发，主要包括考勤系统，报销系统，公司盈利的统计等功能。使用用H5和Bootstrup的十二栅格对页面进行布局，已达到自适用效果；页面的登录时表单验证，使用session实现登录和退出，所用的数据通过ajax异步请求。",
          detailMe:
            " 在职期间我不断学习前端知识，完成简单的考勤表格页面布局等，不断加强html,css,js的基础知识，为以后学习框架奠定了扎实基础。"
        },
        {
          date: " 2017.10 - 2018.7 ",
          company: "学习项目",
          project: "旅游网站",
          rate: "100%",
          detail:
            "参考去哪儿网的布局，实现根据不同城市选择不同景点的功能，首页实现多区域轮播功能和多区域列表的循环展示。城市选择页面实现城市展示，城市搜索，右侧字母与左侧区块动画联动的效果，城市切换之后首页也会变化。景点详情页面实现公用画廊组件，渐隐渐现的header组件和递归展示的列表组件。",
          detailMe:
            "熟悉了Vue的使用，理解整个Vue项目的开发流程，移动端页面布局技巧，规范的代码编写，增强了修改bug的能力，熟悉了npm和git的命令，以及码云网站的使用，ES6的语法。为上手中大型Vue开发做准备。"
        }
      ]
    };
  }
};
</script>

<style>
</style>