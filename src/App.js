import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav-links">
          <button>Work</button>
          <button>About</button>
          <button>Contact</button>
          <button>Resume</button>
        </nav>
      </header>
      <main>
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
        <section className="about-me" alt="about me"></section>
        <section className="skills" alt="skills"></section>
        <section className="testimonial" alt="testimonial"></section>
        <section className="contact" alt="contact"></section>
      </main>
      <footer>Made with ❤️ by Chloe Harris</footer>
    </div>
  );
}

export default App;
