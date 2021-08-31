const onLoad = () => {
    const menuToggle = () => {
        document.getElementById("menu").classList.toggle("open");
        document.getElementById("navlist").classList.toggle("open");
    }

    document.getElementById("menu").addEventListener("click", menuToggle)

}
window.addEventListener("load", onLoad)