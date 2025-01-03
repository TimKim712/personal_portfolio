export default function HeroSection() {
  return (
    <section className = "hero-section grid-cols-2 pt-32 pb-32 px-20 items-center justify-between gap-8 bg-heading-color">
      <div className="hero-section-content-box">
        <div className="hero-section-content flex-col items-start gap-5">
          <p className="section-title text-heading-color text-center text-xl/8 flex font-semibold items-start">Timothy Kim</p>
          <h1 className="hero-section-title text-heading-color text-7xl/[90px] self-stretch">
            <span className="hero-section-title-color text-white">Title description</span>
          </h1>
          <p className="hero-section-description text-gray-200 text-2xl">Insert description text</p>
        </div>
      </div>
      <div className = "hero-section-img flex">
        <img className = "hero-img w-[100%] h-[100%]">

        </img>
      </div>

    </section>
  );
}
