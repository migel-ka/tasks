<template>
    <div class="theme-settings">
      <h2>Настройки темы и шрифта</h2>
      
      <label for="theme">Выберите тему:</label>
      <select id="theme" v-model="selectedTheme" @change="changeTheme">
        <option value="light">Светлая</option>
        <option value="dark">Темная</option>
      </select>
  
      <label for="font">Выберите шрифт:</label>
      <select id="font" v-model="selectedFont" @change="changeFont">
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTheme: 'light',
        selectedFont: 'Arial'
      };
    },
    methods: {
      changeTheme() {
        document.body.className = this.selectedTheme;
      },
      changeFont() {
        document.body.style.fontFamily = this.selectedFont;
      }
    },
    mounted() {
      this.changeTheme();
      this.changeFont();
    }
  };
  </script>
  
  <style scoped>
  .theme-settings {
    margin: 20px;
    display: flex;
    flex-direction: column
  }
  
  </style>
  