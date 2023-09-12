<template>
  <div class="form-box">
        <input class="form-input" type="text" required
               minlength="6"
               placeholder="tester">
        <label for="" class="label">tester </label>
        <span class="error">Field Required</span>
      </div>
</template>
<script setup lang="ts">

</script>
<style>

.form-box{
  position:relative;
  width:50%;
  margin:20px 0;
  padding:0;
}
.form-input {
  position: relative;
  width:100%;
  border:none;
  border: 1px solid gray;
  border-radius:5px;
  padding: 16px 20px;
  font-size:22px;
  color:gray;
}
.form-input:placeholder-shown + .label{
  visibility: hidden;
  opacity: 0;
  transform: translateX(19px) translateY(-28px);
  transition: all .4s ease;
}
.label{
  display:inline-block;
  padding:0 5px;
  font-size:22px;
  transition: all 0.4s ease;
  transform: translateX(16px) translateY(-70px);
  opacity:1;
  background-color:#fff;
}
span.error{
  padding: 0;
  color: red;
  display:block;
  transform: translateX(4px) translateY(-20px);
}

.form-input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

.form-input:valid{
  background-image: linear-gradient(to right, green, lightgreen);
}
</style>