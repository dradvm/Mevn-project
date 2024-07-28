<template>
  <div class="" style="min-height: 400px">
      <div class="w-100 d-flex">
          <div class="shadow-sm" style="width: 15%">
              <div class="h-100 vstack mx-3 my-4">
                  <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" to="/myaccount/information">
                      <font-awesome-icon :icon="['fas', 'circle-info']" />  Information
                  </RouterLink>
                  <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" to="/myaccount/changePass">
                  <font-awesome-icon :icon="['fas', 'key']" />  Change Password
                  </RouterLink>
              </div>
          </div>
          <div style="width: 85%">
              <RouterView/>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .routerItemNav {
      transition: .2s;
      color: black;
  }
  .routerItemNav:hover {
      color: white;
      background: rgb(255, 201, 53);
  }
  .routerItemNavActive {
      color: white;
      background: orange
  }
  .routerItemNavActive:hover {
      background: orange
  }
</style>