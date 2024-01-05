const grid: HTMLElement = document.querySelector(".grid")!;
const d = 12;

function init(grid: HTMLElement, d: number) {
  const rect = grid.getBoundingClientRect();

  grid.style.setProperty("--s", `${rect.width}px`);
  grid.style.setProperty("--d", `${d}`);

  grid.innerHTML = "";

  set_up_grid(Number(rect.width), d, grid);
}

function set_up_grid(s: number, d: number, grid: HTMLElement) {
  for (let y = 0; y < d; y++)
    for (let x = 0; x < d; x++) {
      const cell = document.createElement("div");
      const inner = document.createElement("div");
      const front = document.createElement("div");
      const back = document.createElement("div");
      const xP = x / d;
      const yP = y / d;
      const xM = -s * xP;
      const yM = -s * yP;

      cell.style.setProperty("--delay", `${(x + y * d) / 150}s`);
      front.style.setProperty("--x", `${xM}px`);
      front.style.setProperty("--y", `${yM}px`);

      cell.classList.add("cell");
      inner.classList.add("inner");
      front.classList.add("face", "front");
      back.classList.add("face", "back");

      inner.append(front, back);
      cell.append(inner);

      grid.append(cell);
    }
}

window.addEventListener("resize", () => init(grid, d));

init(grid, d);
