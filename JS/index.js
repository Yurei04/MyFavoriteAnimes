window.addEventListener("scroll", ()=> {
                document.querySelector("#paper1").style.opacity = `${(-window.scrollY + 200) * .009}`
                document.querySelector("#paper2").style.opacity = `${(-window.scrollY + 250) * .009}`
                document.querySelector("#paper3").style.opacity = `${(-window.scrollY + 280) * .009}`
                document.querySelector("#paper4").style.opacity = `${(-window.scrollY + 200) * .009}`
                document.querySelector("#paper5").style.opacity = `${(-window.scrollY + 280) * .009}`
                document.querySelector("#paper6").style.opacity = `${(-window.scrollY + 250) * .009}`
})

window.addEventListener("scroll", (e)=> {
    document.querySelector("#paper1").style.top = `${window.scrollY * 0.5 + -200}px`
    document.querySelector("#paper2").style.top = `${window.scrollY * 0.5 + 120}px`
    document.querySelector("#paper3").style.top = `${window.scrollY * 0.5 + 100}px`
    document.querySelector("#paper4").style.top = `${window.scrollY * 0.5 + -120}px`
    document.querySelector("#paper5").style.top = `${window.scrollY * 0.5 + 180}px`
    document.querySelector("#paper6").style.top = `${window.scrollY * 0.5 + 180}px`
});