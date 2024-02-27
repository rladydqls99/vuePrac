<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindingAttr">databindingAttr</router-link> |
    <router-link to="/databindingList">databindingAttr</router-link> |
    <router-link to="/eventClick">EventClick</router-link> |
    <router-link to="/eventChange">EventChange</router-link> |
    <router-link to="/computedAndWatch">computedAndWatch</router-link> |
    <router-link to="/dataBindingList2">dataBindingList2</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
