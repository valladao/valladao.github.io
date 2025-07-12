const cards = document.querySelectorAll("[data-project]")
const bg = document.getElementById("background") as HTMLElement

const colorMap: Record<string, string> = {
  decathlon: "#0072CE",
  terracotta: "#8F6D4B",
  pedro: "#B642F5"
}

cards.forEach((card) => {
  const id = card.getAttribute("data-project")
  if (!id) return

  card.addEventListener("mouseenter", () => {
    bg.style.backgroundImage = `url(assets/backgrounds/bg-${id}.svg)`
    bg.style.backgroundColor = colorMap[id]
  })

  card.addEventListener("mouseleave", () => {
    bg.style.backgroundImage = "url(assets/backgrounds/bg-default.svg)"
    bg.style.backgroundColor = "#0a0a0a"
  })
})
