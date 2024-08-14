import MyFooter from "../Components/MyFooter";
import Navbar from "../Components/Navbar";
import WidgetBox from "../Components/WidgetBox";
import Men1 from "./../Images/TheyLove1.jpg"
import Men2 from "./../Images/TheyLove2.jpg"
import Men3 from "./../Images/TheyLove3.jpg"
import Men4 from "./../Images/TheyLove4.jpg"
import Men5 from "./../Images/TheyLove5.jpg"
import Men6 from "./../Images/TheyLove6.jpg"
import logoImage from "./../Images/Logo-White.png"



function About() {
  let TheyLoveData = [
    {
      image: {Men1},
      name: "Stella Jones",
      Profession: "Super Model",
    },
    {
      image: {Men2},
      name: "Carlos Hughes",
      Profession: "Student",
    },
    {
      image: {Men3},
      name: "Mark Adams",
      Profession: "Entrepreneur",
    },
    {
      image: {Men4},
      name: "James Hobbs",
      Profession: "Businessman",
    },
    {
      image: {Men5},
      name: "Chloe Newts",
      Profession: "Student",
    },
    {
      image: {Men6},
      name: "Brianna Stark",
      Profession: "Fashion Designer",
    },
  ];

  return (
    <>
      <header>
        <div className="AboutHero HeroDiv">
          <div className="HeroOverlay">
            <Navbar
              logo={logoImage}
              transparent={true}
              isActive="About"
            />
            <div className="AboutHeroText mt-5 pt-4">
              <h1 className="text-white display-2 text-center">About Us</h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="LatestTrends section-padding row container mx-auto">
          <div className="LatestCard col-md-6 d-flex gap-3 align-items-center justify-content-center">
            <div className="latestImg">
              <img src="./../src/Images/Clothes.png" />
            </div>
            <div className="LatestText">
              <h2>Latest Trends For All</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>

          <div className="LatestCard col-md-6 d-flex gap-4 align-items-center justify-content-center">
            <div className="latestImg">
              <img src="./../src/Images/Discount.png" />
            </div>
            <div className="LatestText">
              <h2>Sale on latest fashion</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="TheyLoveUs section-padding">
          <h2 className="fs-1 text-center">They Love Us!!!</h2>
          <p className="text-center fs-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <div className="TheyLoveCards mt-5 row container row-gap-4 mx-auto">
            {TheyLoveData.map((item, index) => (
              <div key={index} className="col-md-4 TheyLoveCard position-relative">
                <div className="TheyLoveCardImg overflow-hidden rounded">
                  <img src={item.image} />
                </div>
                <div className="TheyLoveCardText position-absolute">
                  <h3 className="fs-5 fw-bold">{item.name}</h3>
                  <p>{item.Profession}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="WdigetBoxSection section-padding">
          <WidgetBox />
        </section>
      </main>

      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default About;
