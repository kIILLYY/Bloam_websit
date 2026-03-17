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
  background: #111827;
  color: white;
  padding: 1.5rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-text {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.78);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.footer-links a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
