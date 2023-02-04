import '../App.css';

export default function About() {
  return (
    <div className="container">
      <span className="image"></span>
      <div className="hero-about">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. <br />
          (Hitch costs extra 😉) <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="explore">
          <h1>
            Your destination is waiting. <br />
            Your van is ready.
          </h1>
          <button className="ex-button">Explore our vans</button>
        </div>
      </div>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </div>
  );
}
