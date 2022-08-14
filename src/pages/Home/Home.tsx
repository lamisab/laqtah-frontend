import "./Home.css";
import { Link } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__left">
          <div className="home__left-text">
            <h1>
              Discover your favorite <span>photographer</span>
            </h1>
            <p>
              Laqtah is a program that serve the photographer to make thire
              hobbies as work and easy to reach
            </p>
          </div>
          <div className="home__left-btns">
            <button><Link to="/login"className="btn-text">Login</Link></button>
            <button><Link to="/sign" className="btn-text1">Signin</Link></button>
          </div>
        </div>
        <div className="home__right">
          <img src={require("../../images/homeImg.jpg")} alt="HomeImage" />
        </div>
      </div>
      <div className="home__bot">
        <div className="home__bot-title">
          <h1>Top Artists</h1>
          <Link to="/portress">View all</Link>
        </div>
        <div className="home__bot-artists">
          <ArtistCard username={"abdullah2010"} eth={"900"} />
          <ArtistCard username={"lamisab"} eth={"800"} />
          <ArtistCard username={"nami"} eth={"900"} />
          <ArtistCard username={"jakob"} eth={"1000"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
