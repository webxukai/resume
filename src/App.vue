<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/">个人能力</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{name:'work'}">工作经验</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link :to="{name:'use'}">组件使用</router-link>
          </el-menu-item>

        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style>

</style>
