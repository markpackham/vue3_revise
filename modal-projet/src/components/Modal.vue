<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal Title</h1>
      <p>Modal content</p>
    </div>
  </div>
</template>

<!-- <style scoped> using scoped causesa performance hit so more specific CSS selectors tend to be better -->
<!-- for global styling using the assets forlder -->
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>