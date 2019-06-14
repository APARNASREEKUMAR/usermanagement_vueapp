<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <router-link to="/home" class="navbar-brand">Laravel</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/users" class="nav-link">User Listing<span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users/create" class="nav-link">User Create</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/googlemap" class="nav-link">Google Map</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>