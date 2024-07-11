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
</template>


<style scoped>
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
    margin-right: 5px;
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
/* .page-button:first-child{
    border-right: 1px solid #eee;

} */
</style>
<script>
export default {
    name: "MyShop"
}
</script>