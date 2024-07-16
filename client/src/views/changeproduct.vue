<template>
 <div class="container mt-3">
    <h2>Chỉnh sửa sản phẩm</h2>
    <form action="/action_page.php">
      <div class="mb-3 mt-3">
        <label for="name">Tên Sản Phẩm:</label>
        <input type="name" class="form-control" id="name" placeholder="Nhập tên sản phẩm" name="name">
      </div>
      <div class="mb-3">
        <label for="text">Giá:</label>
        <input type="text" class="form-control" id="price" placeholder="Nhập giá sản phẩm" name="price">
      </div>
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

</template>
<style scoped>



</style>
