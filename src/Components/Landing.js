import "./style.css";
import photo from '../assets/photo.jpg';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="left-logo">
           <a href="/"> <h1>AB</h1></a>
          </div>
          <div className="right-navs">
            <ul>
           <a href="#projects">  <li>Projects</li></a>
           <a href="#about">  <li>About</li></a>
           <a href="#socials">  <li>Socials</li></a>
              
            </ul>
          </div>
        </div>

        <div className="body-container">
          <div className="hero">
            <div className="left-hero">
              <div className="name-left-upper">
                <h2>Hello there.👋</h2>
               
                
              </div>
              <div className="name-left-bottom">
                <h3>
                  I'm Abraham. <br/>
                  when in need to build website with a modern and elegant design,<br/>
                  that's when I come handy! <br/>
                </h3>
              </div>
            </div>
            <div className="right-hero fade-in circular-motion">
              <img src={photo} alt=""/>
            </div>
          </div>

          <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project">
                <div className="playlify">
                    <Link to='https://addis.vercel.app/'>
                        <img id="img" src="https://cdn3.iconfinder.com/data/icons/multimedia-flat-icons-vol-1/256/26-512.png"  alt="" />
                    </Link>
            </div>
            <div className="modern-farm">
                <Link to='https://modern-farm.vercel.app/'>
                    <img id="img" src="https://th.bing.com/th/id/R.3b186fe91c7ed8475c58add5594ae8f9?rik=j%2bzkARBvQjq8Tw&pid=ImgRaw&r=0" alt=""/>
                </Link>
            </div> 
            </div>
           
          </div>

          <div className="about" id="about">
          <h2>About Me</h2>
      <p>
        Hello! I'm Abraham, a passionate front-end web developer based in Addis Ababa, Ethiopia.<br/>
        I specialize in crafting beautiful and user-friendly interfaces using React.js.<br/>
        With a keen eye for design and a love for coding, I bring ideas to life on the web.<br/>
      </p>
      <br/>
      
      <p>
        In addition to React.js, I'm proficient in HTML, CSS, and JavaScript.<br/>
         I'm always exploring new libraries and frameworks to stay up-to-date with the latest trends in front-end development.<br/>
        Whether it's creating responsive websites, optimizing performance, or collaborating with
        cross-functional teams, I'm passionate about delivering high-quality and visually appealing
        user experiences.<br/>
      </p>
      <br/>
      <p>
        Let's build something amazing together! Feel free to reach out for collaboration or questions.
      </p>
    
          </div>

          <footer>
           
            <div className="middle-footer">
              <div className="socials" id="socials">

             <i class='bx bx-envelope' style={{color:'#fa0606', marginRight:'1em'}}  ></i>
             <i class='bx bxl-instagram' style={{color:'#fa0606',marginRight:'1em'}}></i>
             <i class='bx bxl-twitter' style={{color:'#fa0606',marginRight:'1em'}} ></i>
             <i class='bx bxl-linkedin-square' style={{color:'#fa0606',marginRight:'1em'}} ></i>
             <i class='bx bxl-upwork' style={{color:'#fa0606',marginRight:'1em'}} ></i>
                
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="shape-container"></div>
    </>
  );
};

export default Landing;