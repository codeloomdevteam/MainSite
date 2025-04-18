const DevCycle = () => {
  return (
    <div className="my-15">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-light">Your Project,</span>
            <span className="text-orange-600"> Our Process</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start text-lg md:text-xl mx-5 text-right card-title">
              Discovery Workshop
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <ul>
                <li>Requirement gathering</li>
                <li>Goal alignment</li>
                <li>Scope definition</li>
              </ul>
            </div>
            <hr className="bg-indigo-600" />
          </li>
          <li>
            <hr className="bg-indigo-600" />
            <div className="timeline-start text-lg md:text-xl mx-5 text-right card-title">
              Strategic Design
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <ul>
                <li>Wireframe</li>
                <li>UI/UX mockups</li>
                <li>Client approvals</li>
              </ul>
            </div>
            <hr className="bg-indigo-600" />
          </li>
          <li>
            <hr className="bg-indigo-600" />
            <div className="timeline-start text-lg md:text-xl mx-5 text-right card-title">
              Agile Development
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <ul>
                <li>Sprint planning</li>
                <li>Weekly builds</li>
                <li>Continuous feedback</li>
              </ul>
            </div>
            <hr className="bg-indigo-600" />
          </li>
          <li>
            <hr className="bg-indigo-600" />
            <div className="timeline-start text-lg md:text-xl mx-5 text-right card-title">
              Quality Assurance
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <ul>
                <li>Automated testing</li>
                <li>User acceptance testing</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <hr className="bg-indigo-600" />
          </li>
          <li>
            <hr className="bg-indigo-600" />
            <div className="timeline-start text-lg md:text-xl mx-5 text-right card-title">
              Launch & Scale
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <ul>
                <li>Deployment</li>
                <li>Training</li>
                <li>Ongoing support</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DevCycle;
