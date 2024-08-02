<template>
    <div>
      <h2>Quên mật khẩu</h2>
      <form @submit.prevent="submitForm">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <button type="submit">Gửi yêu cầu</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:3000/forgot-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.email })
          });
  
          if (response.ok) {
            alert('Email đã được gửi. Vui lòng kiểm tra hộp thư đến của bạn.');
          } else {
            alert('Đã có lỗi xảy ra khi gửi email.');
          }
        } catch (error) {
          console.error('Đã có lỗi xảy ra:', error);
          alert('Đã có lỗi xảy ra khi gửi email.');
        }
      }
    }
  };
  </script>