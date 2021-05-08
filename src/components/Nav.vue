<template>
  <div class="">
    <img src="../assets/logo-productos-tottus-200x200.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 150px;
  height: 150px;
  margin-left: 150px;
  margin-top: 0;
  position: absolute;
}

@media only screen and (max-width: 600px) {
  img {
    max-width: 50px;
    height: 70px;
    margin-left: 15px;
    margin-top: 0;
  }

  .in{

align: center;
width: 230px;
margin-bottom:3px
}



}
</style>
