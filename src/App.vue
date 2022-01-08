<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 62.5%;

  h2, h3, p {
    margin: 0;
  }

  p {
    line-height: 2rem;
  }

  label {
    padding: 0;
  }

  .el-form-item {
    margin-bottom: 0.5rem;
  }
}
</style>
