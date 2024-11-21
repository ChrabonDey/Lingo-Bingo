import About from "./About";
import Banner from "./Banner";
import Hero from "./Hero";
import Success from "./Success";


const Home = () => {
    return (
        <div>
            <section className="">
                <Hero></Hero>
            </section>
           <Banner></Banner>
           <About></About>
           <section className="mt-6">
              <Success></Success>
           </section>
        </div>
    );
};

export default Home;