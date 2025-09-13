<template>
  <footer>
    <div class="footer__main">
      <div class="footer_left">
        <div class="footer__logo-email">
          <div class="footer__logo">
            <NuxtLink to="/"
              ><img src="~/assets/img/logo.png" alt="logo"
            /></NuxtLink>
          </div>
          <div class="footer__email">
            <a href="mailto:tfajar321321@gmail.com">tfajar321321@gmail.com</a>
          </div>
        </div>
        <p class="footer__job">Fullstack Developer</p>
      </div>
      <div class="footer__right">
        <p>Media</p>
        <div class="media__logo">
          <div class="media__item">
            <a href="https://github.com/tfajar123" target="_blank">
              <Icon name="simple-icons:github" />
            </a>
          </div>
          <div class="media__item">
            <a href="https://www.linkedin.com/in/tfajar123/" target="_blank">
              <Icon name="simple-icons:linkedin" />
            </a>
          </div>
          <div class="media__item">
            <a href="https://www.instagram.com/tfk_drn/" target="_blank">
              <Icon name="simple-icons:instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p>© 2025 Taufik Fajar. All rights reserved. | Design by Elias</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  width: 100%;
  border-top: 1px solid var(--secondary-color);
  padding: 0 10rem;
  background-color: var(--bg-color);
  color: var(--primary-color);
  transition: background 0.3s, color 0.3s;
}

.footer__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

.footer__logo-email {
  display: flex;
  gap: 2rem;
}

.footer__logo-email img {
  width: 2rem;
  height: 2rem;
}

.footer__job {
  padding-top: 0.5rem;
  color: var(--primary-color);
}

span {
  color: var(--secondary-color);
}

.footer__right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__right .media__logo {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: var(--primary-color);
}

.footer__copyright {
  text-align: center;
  padding: 1rem 0 2rem 0;
}

@media screen and (max-width: 768px) {
  footer {
    padding: 0 1rem;
  }

  .footer__main {
    flex-direction: column;
  }

  .footer__right p {
    display: none;
  }
  .footer__right {
    padding-top: 2rem;
  }
}
</style>
