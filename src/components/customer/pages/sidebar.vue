<template>
    <div>   
        <div class="list-group sticky-top list-group-flush" id="list-tab" role="tablist">
            <li class="list-group-item list-group-item-action list-group-item-info" id="list-home-list" data-toggle="list"
            href="#" role="tab" aria-controls="home" @click.prevent="AllProduction" :class="{'active': Keytxt === 'all'}">
            全部商品
            </li>
            <li class="list-group-item list-group-item-action list-group-item-info" id="list-home-list" data-toggle="list"
            href="#" role="tab" aria-controls="home" @click.prevent="Production" :class="{'active': Keytxt === 'Production'}">周邊商品</li>
            <li class="list-group-item list-group-item-action list-group-item-info" id="list-profile-list" data-toggle="list"
            href="#" role="tab" aria-controls="profile" @click.prevent="Performance" :class="{'active': Keytxt === 'Performance'}">表演</li>
            <li class="list-group-item list-group-item-action list-group-item-info" id="list-messages-list" data-toggle="list"
            href="#" role="tab" aria-controls="messages" @click.prevent="Lesson" :class="{'active': Keytxt === 'Lesson'}">課程</li>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data() {
    return {
      Keytxt: "",
      isLoading: false,
      AllProduct: [],
    }
    },
    methods: {
    AllProduction(){
      const vm = this;
      vm.Keytxt = 'all';
      vm.getAllProduct();
    },
    Production(){
      const vm = this;
      vm.Keytxt = 'Production';
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.$http.get(url).then(response =>{
        const newproduct = response.data.products;
        vm.AllProduct = newproduct.filter(item =>{
          return item.category == "Production";
        });
        console.log(vm.AllProduct);
      });
    },
    Performance(){
      const vm = this;
      vm.Keytxt = 'Performance';
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.$http.get(url).then(response =>{
        const newproduct = response.data.products;
        vm.AllProduct = newproduct.filter(item =>{
          return item.category == "Performance";
        });
        console.log(vm.AllProduct);
      });
    },
    Lesson(){
      const vm = this;
      vm.Keytxt = 'Lesson';
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      this.$http.get(url).then(response =>{
        const newproduct = response.data.products;
        vm.AllProduct = newproduct.filter(item =>{
          return item.category == "Lesson";
        });
        console.log(vm.AllProduct);
      });
    },
    getAllProduct(){
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
        this.$http.get(url).then(response =>{
            const AllProduct = response.data.products;
            console.log(AllProduct);
            vm.AllProduct = response.data.products;
        })
    }
    },
}
</script>

