// ===== DIGITAÇÃO =====
const texto = "Ernandes Andrade";
let i = 0;
const titulo = document.getElementById("titulo");

function digitar() {
  if (i < texto.length) {
    titulo.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}
digitar();

// ===== PROJETOS =====
const projetos = [
  { nome: "Plataforma de Estudos", descricao: "Sistema educacional interativo." },
  { nome: "Gerador ENEM", descricao: "Criação automática de exercícios." },
  { nome: "Sistema de Treinos", descricao: "Planejamento fitness." },
  { nome: "Simulador de Notas", descricao: "Cálculo de médias." }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((p, index) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <a href="#" class="btn">Ver Projeto</a>
  `;

  container.appendChild(div);

  setTimeout(() => {
    div.classList.add("show");
  }, index * 300);

  // ===== EFEITO 3D =====
  div.addEventListener("mousemove", (e) => {
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    div.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  div.addEventListener("mouseleave", () => {
    div.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// ===== SCROLL =====
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// ===== TEMA =====
document.body.classList.add("dark");

document.getElementById("toggleTema").onclick = () => {
  document.body.classList.toggle("light");
};