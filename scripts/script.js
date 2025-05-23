const projectMenuIcon = document.querySelectorAll(".project-card-menu");
const projectLinks = document.getElementById("projects-links");

// projectMenuIcon.addEventListener("click",() => {
//     projectLinks.classList.toggle("hide");
// })

projectMenuIcon.forEach((el) => {
    el.addEventListener("click",() => {
        projectLinks.classList.toggle("hide");
    })
})

console.log(projectMenuIcon.forEach((el) => {
    console.log(el)
}))