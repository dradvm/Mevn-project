<template>
    <div class="container mt-3">
       <h2 class="header">Thêm sản phẩm</h2>
       <form >
        <div class="File">
          <label for="formFile" class="form-label">Ảnh sản phẩm</label>
          <input class="form-control" type="file" id="formFile">
        </div>
        
        
        <div class="mb-3 mt-3">
           <label for="name">Tên Sản Phẩm:</label>
           <input type="name" class="form-control" id="name" placeholder="Nhập tên sản phẩm" name="name" v-model="name" required>
         </div>
         <div class="mb-3">
           <label for="text">Giá:</label>
           <input type="text" class="form-control" id="price" placeholder="Nhập giá sản phẩm" name="price" v-model="price" required>
         </div>
         
         <button type="button" class="btn btn-primary" @click="ValidateForm" >Thêm sản phẩm</button>
       </form>
     </div>
   
   </template>
   <style scoped>
   .header{
    text-align: center;
   }
   
   
   </style>
   <script>
  
  
  export default {
	name: "addproduct",
	data(){
		return {
			name: "",
			price: "",
			check: true,
		}

	},
  methods: {

ValidateForm(){
    console.log("a,b,dc")
    this.check = true;
    this.ValidateName();
    this.ValidatePrice();
  },

    ValidateName(){
          if(this.name == ""){
            alert("Vui lòng nhập tên sản phẩm");
            document.focus();
            this.check = false;
            return false;
          }
        },
    ValidatePrice(){
      if(this.price == ""){
            alert("Giá sản phẩm không được để trống");
            document.focus();
            this.check = false;
            return false;
    }

  }
 }
} 
  </script>