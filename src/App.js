import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="navbar-wrapper">
            <div role="button" className="name">
              C.H.
            </div>
            <nav className="links-wrapper">
              <button>Work</button>
              <button>About</button>
              <button>Contact</button>
              <button>Resume</button>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="home">
          <div className="container">
            <div className="home-wrapper">
              <div className="heading-wrapper">
                <h1>Chloe Harris</h1>
              </div>
              <h2>Front-End Engineer & UX Designer </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                aliquam provident nobis quae ab neque tempore quis voluptas
                eius. Voluptatibus.
              </p>
              <a href="https://github.com/chloeharris1/portfolio_2023">
                Portfolio Repo
              </a>
            </div>
          </div>
        </section>
        <section className="work" alt="work">
          <div className="container">
            <div className="work-wrapper">
              <h1>Work</h1>
              <div className="grid"></div>
              <h1>UX Design</h1>
              <div className="grid"></div>
            </div>
          </div>
        </section>
        <section className="about-me" alt="about me">
          <div className="container">
            <div className="about-section">
              <div className="content">
                <h1>About Me</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Blanditiis, illo incidunt hic perspiciatis harum ab voluptate?
                  Quos molestias, aliquid ratione commodi dolores neque ipsa
                  natus corrupti eius voluptatum repellat praesentium nihil qui
                  deserunt dignissimos quae fuga consequuntur. Magnam inventore
                  necessitatibus corrupti esse ipsam neque delectus culpa
                  dolorem exercitationem incidunt omnis nulla officia
                  consectetur, illo dicta laudantium pariatur. Necessitatibus
                  praesentium inventore quasi animi omnis dolore, officiis
                  soluta temporibus fugit mollitia dignissimos. Dolores
                  excepturi laboriosam velit fugiat rem neque? Delectus atque,
                  est nihil facere laudantium omnis corrupti ex, perspiciatis
                  tempora accusamus esse rem magnam! Obcaecati quasi voluptatem
                  expedita quo animi assumenda reiciendis ipsa temporibus
                  doloremque cum rerum eius accusamus quia minima, molestiae
                  ipsam ea? Quo aut, quia nulla qui exercitationem illum beatae,
                  officiis similique veniam tempora et provident reiciendis
                  labore, ad amet distinctio nostrum? Corporis aut voluptatem
                  vitae quis eius? Distinctio modi magnam impedit, molestiae
                  vero qui? Repellat dolore tenetur natus quas labore et cumque
                  asperiores, aut unde harum quod soluta quisquam!
                </p>
              </div>
              <figure className="image-wrapper">
                <img src="" />
              </figure>
            </div>
          </div>
        </section>
        <section className="skills" alt="skills">
          <div className="container"></div>
        </section>
        <section className="testimonial" alt="testimonial">
          <div className="container">
            <div className="testimonial-container">
              <h1>Testimonial</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio praesentium et optio officia eligendi, minus officiis
                iste labore itaque eaque magni quaerat quas exercitationem
                fugiat expedita esse tempore ullam pariatur corporis accusamus.
                Sit ipsa, tenetur pariatur voluptate quisquam nihil inventore
                eveniet enim repudiandae. Totam, ut?
              </p>
            </div>
          </div>
        </section>
        <section className="contact" alt="contact">
          <div className="container">
            <div className="footer-container">
              <h1>Contact</h1>
              <div className="social-icons">
                <a>Email</a>
                <a href="https://github.com/chloeharris1" alt="GitHub">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/chloe-harris-51982322/"
                  alt="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.pinterest.com/C__h__l__o__e/"
                  alt="inspiration"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>Made with ❤️ in Seattle</footer>
    </div>
  );
}

export default App;
