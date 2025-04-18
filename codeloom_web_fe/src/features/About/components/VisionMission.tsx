const VisionMission = () => {
  return (
    <div className="mt-20">
      <div className="flex w-full flex-col lg:flex-row mt-20">
        <div className="card rounded-box grid grow">
          {/* vision */}
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                <span className="font-light">Our </span>
                <span className="text-orange-600">Vision</span>
              </h1>
            </div>
          </div>
          <div>
            <p className="text-center mt-10 text-xl">
              To be the most trusted partner for transformative digital
              solutions where technology meets human potential.
            </p>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card rounded-box grid grow">
          {/* mission */}
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                <span className="font-light">Our </span>
                <span className="text-orange-600">Mission</span>
              </h1>
            </div>
          </div>
          <div>
            <p className="text-center mt-10 text-xl">
              To engineer transformative digital solutions that empower
              businesses and exceed expectations through technical mastery,
              relentless innovation, and partnership-driven development.
            </p>
          </div>
        </div>
      </div>

      <div className="divider mt-10"></div>

      {/* core values */}
      <div className="container mx-auto px-4 mt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">Our </span>
            <span className="text-orange-600">Core Values</span>
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <ul className="list bg-base-100 rounded-box divide-y divide-base-200">
          {/* Header */}
          <li className="p-6 pb-2 text-sm opacity-70 tracking-wider italic">
            The principles that guide every line of code we write
          </li>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1 */}
            <li className="list-row p-6 hover:bg-base-50 transition-colors">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                01
              </div>
              <div className="list-col-grow pl-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Excellence in Execution
                </h3>
                <p className="italic mb-3">
                  Good enough isn't in our vocabulary
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Obsession with clean, maintainable code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Rigorous QA and performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Continuous learning and tech stack evolution</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* Value 2 */}
            <li className="list-row p-6 hover:bg-base-50 transition-colors">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                02
              </div>
              <div className="list-col-grow pl-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Client Success First
                </h3>
                <p className="italic mb-3">We win when you win</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Deep collaboration from day one</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Transparent communication at all stages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>ROI-driven development priorities</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* Value 3 */}
            <li className="list-row p-6 hover:bg-base-50 transition-colors">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                03
              </div>
              <div className="list-col-grow pl-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Innovation with Purpose
                </h3>
                <p className="italic mb-3">
                  Solving real problems, not chasing trends
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Practical application of AI/ML, blockchain, IoT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Fail-fast experimentation mindset</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Future-proof architectural decisions</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* Value 4 */}
            <li className="list-row p-6 hover:bg-base-50 transition-colors">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                04
              </div>
              <div className="list-col-grow pl-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Ownership Mentality
                </h3>
                <p className="italic mb-3">
                  Every team member acts like a founder
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>End-to-end accountability for projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Proactive problem solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Pride in craftsmanship</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* Value 5 */}
            <li className="list-row p-6 hover:bg-base-50 transition-colors">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                05
              </div>
              <div className="list-col-grow pl-1">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Human-Centric Technology
                </h3>
                <p className="italic mb-3">
                  Code should serve people, not the other way around
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Accessibility-focused design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Ethical AI implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Intuitive user experiences</span>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
