<template>
  <div class="container mt-4">
    <h2 class="header">Thêm sản phẩm</h2>
    <form @submit.prevent="submitForm">
      <!-- Ảnh sản phẩm -->
      <div class="form-group">
        <label for="coverPhoto" class="form-label">Ảnh bìa sản phẩm</label>
        <input class="form-control" type="text" id="coverPhoto" v-model="product.display.coverPhoto" placeholder="Nhập URL ảnh bìa sản phẩm" required />
      </div>

      <!-- Tên sản phẩm -->
      <div class="form-group mt-3">
        <label for="name">Tên Sản Phẩm:</label>
        <input type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm" v-model="product.name_product" required />
      </div>

      <!-- Mô tả sản phẩm -->
      <div class="form-group mt-3">
        <label for="description">Mô tả:</label>
        <textarea class="form-control" id="description" placeholder="Nhập mô tả sản phẩm" v-model="product.description" required></textarea>
      </div>

      <!-- Giá sản phẩm -->
      <div class="form-group mt-3">
        <label for="price">Giá:</label>
        <input type="number" class="form-control" id="price" placeholder="Nhập giá sản phẩm" v-model.number="product.price" required />
      </div>

      <!-- Danh mục sản phẩm -->
      <div class="form-group mt-3">
        <label for="categories">Danh mục:</label>
        <input type="text" class="form-control" id="categories" placeholder="Nhập danh mục sản phẩm" v-model="product.categories" required />
      </div>

      <!-- Display video -->
      <div class="form-group mt-3">
        <label for="displayvideo">Display Video</label>
        <input type="text" class="form-control" id="displayvideo" placeholder="Nhập URL display video" v-model="product.display.video" required />
      </div>

      <!-- Ảnh sản phẩm (mảng) -->
      <div class="form-group mt-3">
        <label for="images">Ảnh sản phẩm</label>
        <div v-for="(image, index) in product.display.images" :key="index" class="image-group mb-2">
          <input type="text" class="form-control" :id="'image' + index" v-model="product.display.images[index]" placeholder="Nhập URL ảnh sản phẩm" required />
          <button type="button" class="btn btn-danger mt-2" @click="removeImage(index)">Xóa ảnh</button>
        </div>
        <button type="button" class="btn btn-secondary mt-2" @click="addImage">Thêm ảnh</button>
      </div>

      <!-- Chi tiết sản phẩm -->
      <div class="form-group mt-3">
        <div v-for="(detail, index) in product.detail" :key="index" class="detail-item mb-3">
          <label :for="'key' + index">Tên chi tiết:</label>
          <input type="text" class="form-control" :id="'key' + index" v-model="detail.key" placeholder="Nhập tên chi tiết" required />
          <label :for="'value' + index">Giá trị chi tiết:</label>
          <input type="text" class="form-control" :id="'value' + index" v-model="detail.value" placeholder="Nhập giá trị chi tiết" required />
          <button type="button" class="btn btn-danger mt-2" @click="removeDetail(index)">Xóa chi tiết</button>
        </div>
        <button type="button" class="btn btn-secondary mb-3" @click="addDetail">Thêm chi tiết sản phẩm</button>
      </div>

      <!-- Thuộc tính và số lượng -->
      <div class="form-group mt-3">
        <div v-for="(item, index) in product.quantityList" :key="index" class="quantity-item mb-3">
          <label :for="'properties' + index">Thuộc tính:</label>
          <input type="text" class="form-control" :id="'properties' + index" v-model="item.properties" placeholder="Nhập thuộc tính" required />
          <label :for="'quantity' + index">Số lượng:</label>
          <input type="number" class="form-control" :id="'quantity' + index" v-model.number="item.quantity" placeholder="Nhập số lượng" required />
          <button type="button" class="btn btn-danger mt-2" @click="removeQuantity(index)">Xóa thuộc tính</button>
        </div>
        <button type="button" class="btn btn-secondary mb-3" @click="addQuantity">Thêm thuộc tính sản phẩm</button>
      </div>

      <!-- Nút gửi -->
      <button type="submit" class="btn btn-primary mt-3">Thêm sản phẩm</button>
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
        display: { coverPhoto: '', video: '', images: [''] },
        detail: [{ key: '', value: '' }],
        quantityList: [{ properties: '', quantity: null }]
      },
      check: true
    };
  },
  methods: {
    submitForm() {
      this.ValidateForm();
      if (this.check) {
        ProductService.createProduct(this.product)
          .then((res) => {
            alert("Thêm sản phẩm thành công");
            this.$router.push('/myshop');
          })
          .catch((err) => alert("Thêm sản phẩm thất bại"));
      }
    },
    ValidateForm() {
      this.check = true;
      this.ValidateName();
      this.ValidatePrice();
      this.ValidateCategories();
      this.ValidateDetails();
      this.ValidateQuantities();
      this.ValidateImages();
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
    ValidateImages() {
      for (const image of this.product.display.images) {
        if (image.trim() === "") {
          alert("Vui lòng nhập tất cả các URL ảnh sản phẩm");
          this.check = false;
          break;
        }
      }
    },
    addImage() {
      this.product.display.images.push('');
    },
    removeImage(index) {
      this.product.display.images.splice(index, 1);
    },
    addDetail() {
      this.product.detail.push({ key: '', value: '' });
    },
    removeDetail(index) {
      this.product.detail.splice(index, 1);
    },
    addQuantity() {
      this.product.quantityList.push({ properties: '', quantity: null });
    },
    removeQuantity(index) {
      this.product.quantityList.splice(index, 1);
    }
  }
}
</script>

<style scoped>
/* Container styling */
.container {
  margin: 20px auto;
  width: 80%;
  max-width: 900px; /* Adjusted for consistency with "Edit Product" page */
  padding: 20px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Header styling */
.header {
  color: #225771;
  font-size: 2.5em; /* Larger to match the "Edit Product" page */
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #EF8121;
  margin-bottom: 20px;
}

/* Form label styling */
.form-label {
  color: #225771;
  font-weight: bold;
}

/* Input and textarea styling */
input, textarea, select {
  width: 100%;
  height: 45px;
  padding: 12px 16px;
  border: 1px solid #225771;
  border-radius: 4px;
  margin-bottom: 15px;
  outline: none;
}

textarea {
  height: auto;
  resize: vertical;
}

/* Focus styles */
input:focus, textarea:focus, select:focus {
  border-color: #01cc40;
}

/* Button styling */
button {
  width: 100%;
  height: 45px;
  color: #fff;
  background: #225771;
  font-size: 1em;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  transition: .2s ease-in;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background: #F3FBFF;
  color: #225771;
}

/* Additional button styling */
.btn-danger {
  background-color: #ff6b6b;
  color: #fff;
}

.btn-danger:hover {
  background-color: #ff4d4d;
}

.btn-secondary {
  background-color: #d0d0d0;
  color: #225771;
}

.btn-secondary:hover {
  background-color: #b3b3b3;
}

/* Detail and quantity groups */
.detail-group, .quantity-group {
  margin-bottom: 20px; /* Adjusted for consistency */
}

.detail-item, .quantity-item {
  margin-bottom: 15px;
}

/* Error and success message styling */
.error {
  color: red;
  font-size: 0.9em;
}

.input-1 {
  border: 1px solid #01cc40;
}

.input-2 {
  border: 1px solid red;
}

</style>
