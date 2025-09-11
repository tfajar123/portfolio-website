<template>
  <footer>
    <div class="footer__main">
      <div class="footer_left">
        <div class="footer__logo-email">
          <div class="footer__logo">
            <NuxtLink to="/">TFM</NuxtLink>
          </div>
          <div class="footer__email">
            <a href="mailto:tfajar321321@gmail.com">tfajar321321@gmail.com</a>
          </div>
        </div>
        <p>Fullstack Developer</p>
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
              <Icon name="logos:instagram-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p>© 2023 TFM. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style>
footer {
  width: 100%;
  border-top: 1px solid var(--gray-color);
  padding: 0 10rem;
  background-color: var(--bg-color);
  color: var(--white-color);
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
.footer__left p {
  margin-top: 1rem;
  color: var(--white-color);
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
  color: var(--white-color);
}
</style>
