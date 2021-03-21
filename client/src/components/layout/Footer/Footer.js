import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="social">
                <h2 style={{ margin: 0, fontSize: 1 }}>Contact: </h2>
                <a href="https://www.linkedin.com/in/carlos-prado-buesa/"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" alt="linkedin" /> </a>
                <a href="https://github.com/ceprado93"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github" /> </a>
                <a href="https://codepen.io/ceprado93"><img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="codepen" /> </a>
            </div>

            <p>Built by Carlos Prado 2021</p>
        </footer>

    )
}
export default Footer