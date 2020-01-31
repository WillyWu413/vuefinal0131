<template>
  <div>
      <loading :active.sync="isLoading"></loading>
    <div>
      <button class="btn btn-primary mt-4" @click="openModal(true)">建立新產品</button>
      <table class="table mt-4">
        <thead>
          <th width="120">分類</th>
          <th width="120">產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="80">編輯</th>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price | currency}}</td>
            <td class="text-right">{{ item.price | currency}}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false , item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
          <pagenation :pagenations="pagenations" @changeCurrPage="getProducts" />
          <editmodal :product-props="tempProduct" :status-props="status" @updateproduct_emit="updateProduct"></editmodal>
          <delmodal :del-product-props="tempProduct" @getproduct_emit="getProducts"></delmodal>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import pagenation from "./childpage/pagenation";
import editmodal from "./childpage/editmodal";
import delmodal from "./childpage/delmodal";


export default {
  data() {
    return {
      products: [],
      pagenations: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status:{
        fileUploading: false,
      },
    };
  },
  components:{
    pagenation,
    editmodal,
    delmodal,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagenations = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        (this.tempProduct = {}), (this.isNew = true);
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    openDelModal(item){
        this.tempProduct = item;
        $("#delProductModal").modal("show");
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api).then(response => {
        // console.log(response.data);
        vm.products = response.data.products;
        if(response.data.success){
          $('#delProductModal').modal('hide');
          vm.getProducts();
        }
        else{
          $('#delProductModal').modal('hide');
          vm.getProducts();
          console.log('刪除失敗');
        }
      });
    },
    updateProduct() {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      let httpMethod = "post";
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http[httpMethod](api, { data: vm.tempProduct }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        } else {
          $("#productModal").modal("hide");
          vm.getProducts();
          console.log("新增失敗");
        }
        // vm.products = response.data;
      });
    },
    uploadFile(){
        console.log(this);
        const uploadedFile = this.$refs.files.files[0];
        const vm = this;
        const formData = new FormData();
        formData.append('file-to-upload', uploadedFile);
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
        vm.status.fileUploading = true;
        this.$http.post(url, formData,{
            headers: {
               'Content-Type' : 'multipart/form-data'
            }
        }).then((response) => {
        console.log(response.data);
        vm.status.fileUploading = true;
    if (response.data.success){
         vm.tempProduct.imageUrl = response.data.imageUrl;
          console.log(vm.tempProduct);
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
    }else{
      this.$bus.$emit('message:push' , 'response.data.message' , 'danger');
    }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>