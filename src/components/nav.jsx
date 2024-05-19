// import { Link } from 'react-router-dom';
function Nav({toggleCart,cartItemCount})
    {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <>
            <div className="parent">
                <div className="inner">
                    <div className="name"><a href="">sneakerHead</a></div>
                    <div className="ham" id = "ham" onClick={Hamburger}><i className="fa-solid fa-bars"></i></div>
                    <ul>
                        <li><button onClick={() => scrollToSection('men')}>Men</button></li>
                        <li><button onClick={() => scrollToSection('women')}>Women</button></li>
                        <li><button onClick={() => scrollToSection('kids')}>Kids</button></li>
                        <li><button onClick={() => scrollToSection('footer')}>Contact Us</button></li>
                        <li className="theme-logo"><i className="fa-solid fa-sliders" id="logo-th" onClick={changeMode}></i></li>
                        <li><i className="fa-solid fa-cart-shopping" onClick = {toggleCart}>
                        </i>
                        {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
function Hamburger(){
    document.body.classList.toggle('ham-menu');
}
function changeMode(){
    document.body.classList.toggle('dark-mode');
}
export default Nav