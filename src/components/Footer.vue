<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        © 2026 Projet RUST. Site de presentation du logiciel de traitement
        d'images.
      </p>
      <ul class="footer-links">
        <li>
          <a href="/programmation">Traitement d'image</a>
        </li>
        <li>
          <a href="/graphisme">Interface graphique</a>
        </li>
        <li>
          <a href="/link">Ressources</a>
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
