const FAQ = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">Frequently Asked Questions</span>
            <span className="text-orange-600"> {"(FAQ)"}</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 space-y-2">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title card-title text-lg md:text-xl">
            What services does Code Loom offer?
          </div>
          <div className="collapse-content text-sm">
            <ul>
              <li>Custom web/mobile app development</li>
              <li>AI/ML integration</li>
              <li>Cloud solutions & DevOps</li>
              <li>UI/UX design</li>
              <li>Software modernization</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title card-title text-lg md:text-xl">
            Do you work with startups/students?
          </div>
          <div className="collapse-content text-sm">
            <ul>
              <li>
                <span className="font-semibold text-indigo-600">Startups:</span>{" "}
                MVP-focused packages with scalable architecture
              </li>
              <li>
                <span className="font-semibold text-indigo-600">Students:</span>{" "}
                Academic project support with documentation
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title card-title text-lg md:text-xl ">
            How long does a typical project take?
          </div>
          <div className="collapse-content text-sm">
            <ul>
              <li>
                <span className="font-semibold text-indigo-600">
                  MVP (Minimum Viable Product):
                </span>{" "}
                3–6 weeks
              </li>
              <li>
                <span className="font-semibold text-indigo-600">
                  Mid-size app:
                </span>{" "}
                3–6 months
              </li>
              <li>
                <span className="font-semibold text-indigo-600">
                  Enterprise:
                </span>{" "}
                Phased rollout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
