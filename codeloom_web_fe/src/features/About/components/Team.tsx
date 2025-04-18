const Team = () => {
  return (
    <section className="px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start container mx-auto">
        {/* Team Image */}
        <div className="lg:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
            alt="Our software team collaborating"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Team Content */}
        <div className="lg:col-span-2">
          <div className="text-left lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="font-light">Meet Our</span>{" "}
              <span className="text-orange-600">Digital Specialists</span>
            </h1>

            {/* Description with list */}
            <div className="text-lg">
              <p className="mb-6">
                At Code Loom, we've assembled a powerhouse of technical talent
                dedicated to crafting exceptional software.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:text-base text-sm">
                {[
                  "Frontend Developers",
                  "Backend Engineers",
                  "QA Analysts",
                  "UI/UX Designers",
                  "Business Analysts",
                  "Solution Architects",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Together, we combine specialized expertise with seamless
                collaboration to deliver software that exceeds expectations.
              </p>

              <p className="italic mt-4">
                <span className="font-bold text-indigo-600">
                  We transform ideas into powerful digital solutions.
                </span>
                <br />
                Our full-stack team designs, builds, and optimizes custom
                software that solves real business challenges. From sleek web
                applications to robust enterprise systems, we handle every
                aspect of development - including UI/UX design, backend
                architecture, quality assurance, and ongoing support. Whether
                you need an MVP to validate your concept or a scalable platform
                to power your growth, we deliver technology that performs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
