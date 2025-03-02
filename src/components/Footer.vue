<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        © 2025 BLOAM Corporation. Rapport de projet SUP1.
      </p>
      <ul class="footer-links">
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener"
            >Instagram</a
          >
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterScreen",
};
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-text {
  margin: 0;
  font-size: 14px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  color: #a6a6a6;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
