<template>
    <div>
        <div class="filter">
            <span class="filter-label">Sắp xếp theo</span>
           
            <button class="btn">Phổ biến</button>
            <button class="btn">Mới nhất</button>
            <button class="btn">Bán chạy</button>
            
            <div class="select">
                <span class="salect-label">
                    Giá
                </span>
                <ul class="sellect-list">
                    <li><a href="" class="select-input" >Giá từ cao đến thấp</a></li>
                    <li><a href="" class="select-input" >Giá từ thấp đến cao</a></li>
                </ul>
                <i>></i>
                
            </div>
            <router-link to="/myshop/addproduct">
                <button class="btn">Thêm sản phẩm</button>
            </router-link>
            
            <div class="filter-page">
                <span class="page-num">
                    <span class="page-current">1</span>/1
                </span>
                <div class="page-control">
                    <a  href="" class="page-button page-button--disabled">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </a>
                    <a  href="" class="page-button">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="home-product">
        <div class="row">
            <div class="column2">
                <!-- product item -->
                <div class="home-product-item" v-if="items && items.length" v-for="item of items" :key="item.name_product">
                    <div class="home-product-item-img">
                        <img class="img" :src=" item.display.coverPhoto ">
                        <h4 class="home-product-item-name">{{ item.name_product}}</h4>
                        <div class="home-product-item-price">{{ item.price }}</div>
                        <div class="change">
                           <router-link to="/myshop/changeproduct">
                              <button>
                                <font-awesome-icon :icon="['fas', 'pen']" />
                            </button>
                        </router-link>
                        </div>
                        <div class="delete">
                          <button>  <font-awesome-icon :icon="['fas', 'delete-left']" /></button>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    </div>
</template>


<style scoped>


.row{
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
}
.column2{
    padding-left: 12px;
    padding-right: 5px;
    width: 20%;
    
}



/* product */
.home-product-item{
    position: relative;
    background: white;
    margin-top: 10px;
}
.home-product-item-img{
    padding-top: 0;
    background-repeat: no-repeat;
    background-size: contain;
    

}
.img{
   height: 240px;
   width: 240px;
   padding-top: -150px;
}
.home-product-item-name{
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-color);
    line-height: 1.4rem;
    height: 2.8rem;
    margin: 10px 10px;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    text-overflow: ellipsis;

}
.home-product-item-price{
    display: flex;
    margin-left: 10px;
    color: red;
    font-size: 1.4rem;
}
.change{
    position: absolute;
    top: 0%;
    background-color: blue;
    border-radius: 0 4px 4px 0;
}
.delete{
    position: absolute;
    top: 0%;
    right: 0%;
    background-color: #dc3545;
    border-radius: 4px 0 0 4px;
}




/* filter */
.filter{
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    padding: 12px 22px;
    border-radius: 5px;
}
.filter-label{
    font-size: 1rem;
    color: 5555;
    margin-right: 14px;
}
.btn{
    margin-right: 15px;
    min-width: 100px;
    height: 34px;
    text-decoration: none;
    border: none;
    border-radius: 2px;
    font-size: 1rem;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.6rem;
}
.filter-page{
    display: flex;
    align-items: center;
    margin-left: auto;
}
.select{
    position: relative;
    min-width: 200px;
    height: 34px;
    padding: 0 12px;
    border-radius: 2px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.salect-label{
    font-size: 1rem;

}
.sellect-list{

    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    border-radius: 2px;
    background-color: white;
    padding: 8px 16px;
    list-style: none;
    display: none;
  
    

}
.select-input{
    font-size: 1rem;
    text-decoration: none; 
    color: var(--text-color);
    display: block;
    padding: 4px 0;
}
.select-input:hover{
    color: #FFA500;
}

.select:hover .sellect-list{
    display: block;
}

.page-num{
    font-size: 1rem;
    color: var(--text-color);
    margin-left: 20px;
}
.page-current{
    color:#FFA500;
}
.page-button{
    text-decoration: none;
    color: var(--text-color);
    flex: 1;
    margin: auto;
}
.page-button page-button--disabled{
    background-color: #f9f9f9;
}

.page-control{
    padding-left: 25px;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    width: 72px;
    height: 25px;
}
</style>
<script>
    import ProductService from '@/services/ProductService';
    // import { toast } from 'vue3-toastify';
    export default {
      name: "MyShop",
      data() {
        return {
            items: [],
        }
      },
        created() {
          ProductService.getAll()
            .then((res) => {
              this.items = res.data
            })
            .catch((err) => console.log(err))
        },
}

</script>