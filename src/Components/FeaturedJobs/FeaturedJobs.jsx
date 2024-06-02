import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-extrabold">
          Featured jobs section
        </h1>
        <p className="font-medium text-xl text-center mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 text-center lg:my-20 my-20">
        {jobs.map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
