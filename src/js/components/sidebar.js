import {
  onMounted,
  nextTick,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Só funciona 1 componente por página
export default {
  setup() {
    onMounted(() => {


      // Scrollspy -------------------------------------
      // para funcionar mobile no t2k e no geral
      const menuItens = document.querySelectorAll(".sidenav a[href^='#']");

      menuItens.forEach((link) => {
        link.addEventListener("click", scrollToIdOnClick);
      });

      function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute("href");
        const to = document.querySelector(id).offsetTop;

        window.scroll({
          top: to - 60,
          behavior: "smooth",
        });
      }


      // Use nextTick to ensure DOM updates are finished
      nextTick(() => {
        // Sidenav initialization
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems, {
          // specify options here
        });
      });
    });

    return {};
  },

  
  template://html 
  `

  <ul id="slide-out" class="sidenav">
    <li>
      <div class="user-view">
        <img src="src/img/core/logo-choices.webp" alt="Logo Choices" />
        <p class="sidenav__general-title">Choices 6º ano | Alimentação</p>
        <h3 class="sidenav__specific-title">
        Aula 09 | Por onde o alimento passa ao entrar no corpo?
        </h3>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div>
          <p class="body1">
            <span class="progress-box__number">1%</span> concluído
          </p>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: 😊Início</a>
    </li>
    <li>
      <a href="#introducao">02: 😀Introdução</a>
    </li>
    <li>
      <a href="#orgaos">03: 😯Órgãos</a>
    </li>
    <li>
      <a href="#boca">04: 🤤Boca</a>
    </li>
    <li>
      <a href="#faringe">05: 🤔Faringe e Esôfago</a>
    </li>
    <li>
      <a href="#estomago">06: 😆Estômago</a>
    </li>
    <li>
      <a href="#intestino">07: 🤯Intestino</a>
    </li>
    <li>
      <a href="#fezes">08: 💩Fezes?</a>
    </li>
    <li>
      <a href="#caminho">09: 😉Caminho completo</a>
    </li>
    <li>
      <a href="#reflexao">10: 😌É hora da reflexão...</a>
    </li>
    <li>
      <a href="#concluir">11: 😀Conclusão</a>
    </li>
  </ul>
  `,
};
