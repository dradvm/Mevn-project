<template>
  <div class="container mt-3">
    <h2 class="header">Thêm sản phẩm</h2>
    <form @submit.prevent="submitForm">
      <!-- Ảnh sản phẩm -->
      <div class="mb-3">
        <label for="coverPhoto" class="form-label">Ảnh sản phẩm</label>
        <input class="form-control" type="text" id="coverPhoto" v-model="product.display.coverPhoto" placeholder="Nhập URL ảnh bìa sản phẩm" required />
      </div>

      <!-- Tên sản phẩm -->
      <div class="mb-3 mt-3">
        <label for="name">Tên Sản Phẩm:</label>
        <input type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm" v-model="product.name_product" required>
      </div>

      <!-- Mô tả sản phẩm -->
      <div class="mb-3">
        <label for="description">Mô tả:</label>
        <textarea class="form-control" id="description" placeholder="Nhập mô tả sản phẩm" v-model="product.description" required></textarea>
      </div>

      <!-- Giá sản phẩm -->
      <div class="mb-3">
        <label for="price">Giá:</label>
        <input type="number" class="form-control" id="price" placeholder="Nhập giá sản phẩm" v-model.number="product.price" required>
      </div>

      <!-- Danh mục sản phẩm -->
      <div class="mb-3">
        <label for="categories">Danh mục:</label>
        <input type="text" class="form-control" id="categories" placeholder="Nhập danh mục sản phẩm" v-model="product.categories" required>
      </div>

      <!-- From Shop ID -->
      <div class="mb-3">
        <label for="displayvideo">display video</label>
        <input type="text" class="form-control" id="displayvideo" placeholder="Nhập display video" v-model="product.display.video" required>
      </div>

      <!-- Chi tiết sản phẩm -->
      <div class="detail-group">
        <div v-for="(detail, index) in product.detail" :key="index" class="mb-3 detail-item">
          <label :for="'key' + index">Tên chi tiết:</label>
          <input type="text" class="form-control" :id="'key' + index" v-model="detail.key" placeholder="Nhập tên chi tiết" required />
          <label :for="'value' + index">Giá trị chi tiết:</label>
          <input type="text" class="form-control" :id="'value' + index" v-model="detail.value" placeholder="Nhập giá trị chi tiết" required />
        </div>
        <button type="button" class="btn btn-secondary mb-3 add-detail-btn" @click="addDetail">Thêm chi tiết sản phẩm</button>
      </div>

      <!-- Thuộc tính và số lượng -->
      <div class="quantity-group">
        <div v-for="(item, index) in product.quantityList" :key="index" class="mb-3 quantity-item">
          <label :for="'properties' + index">Thuộc tính:</label>
          <input type="text" class="form-control" :id="'properties' + index" v-model="item.properties" placeholder="Nhập thuộc tính" required />
          <label :for="'quantity' + index">Số lượng:</label>
          <input type="number" class="form-control" :id="'quantity' + index" v-model.number="item.quantity" placeholder="Nhập số lượng" required />
        </div>
        <button type="button" class="btn btn-secondary mb-3 add-quantity-btn" @click="addQuantity">Thêm thuộc tính sản phẩm</button>
      </div>

      <!-- Nút gửi -->
      <button type="submit" class="btn btn-primary">Thêm sản phẩm</button>
    </form>
  </div>
</template>

<script>

import ProductService from '@/services/ProductService';


export default {
  name: "addproduct",
  data() {
    return {
      product: {
        name_product: '',
        description: '',
        price: null,
        categories: '',
        detail: [{ key: '', value: '' }],
        display: { coverPhoto: '', video: '' },
        quantityList: [{ properties: '', quantity: null }]
      },
      check: true
    };
  },
  methods: {
    submitForm() {
    if(this.check == true){
      ProductService.createProduct(this.product)
      .then((res)=>{
        alert("them san pham thanh cong");
        this.$router.push('/myshop');
      })
      .catch((err) => alert("Them san pham that bai"))
    }
    },
    ValidateForm() {
      this.check = true;
      this.ValidateName();
      this.ValidatePrice();
      this.ValidateCategories();
      this.ValidateDetails();
      this.ValidateQuantities();
    },
    ValidateName() {
      if (this.product.name_product.trim() === "") {
        alert("Vui lòng nhập tên sản phẩm");
        this.check = false;
      }
    },
    ValidatePrice() {
      if (this.product.price === null || isNaN(this.product.price)) {
        alert("Giá sản phẩm không được để trống và phải là số");
        this.check = false;
      }
    },
    ValidateCategories() {
      if (this.product.categories.trim() === "") {
        alert("Vui lòng nhập danh mục sản phẩm");
        this.check = false;
      }
    },
    ValidateDetails() {
      for (const detail of this.product.detail) {
        if (detail.key.trim() === "" || detail.value.trim() === "") {
          alert("Vui lòng nhập tất cả các chi tiết sản phẩm");
          this.check = false;
          break;
        }
      }
    },
    ValidateQuantities() {
      for (const item of this.product.quantityList) {
        if (item.properties.trim() === "" || item.quantity === null || isNaN(item.quantity)) {
          alert("Vui lòng nhập tất cả các thuộc tính và số lượng sản phẩm");
          this.check = false;
          break;
        }
      }
    },
    addDetail() {
      this.product.detail.push({ key: '', value: '' });
    },
    addQuantity() {
      this.product.quantityList.push({ properties: '', quantity: null });
    }
  }
}
</script>