import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // control data of total card show in featured job section
  const [dataLength, setDataLength] = useState(4);

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
      <div className=" lg:my-20 my-10">
        <div className="grid grid-cols-2 gap-6 text-center">
          {jobs.slice(0, dataLength).map((job) => (
            <Job job={job} key={job.id}></Job>
          ))}
        </div>
        <div className="text-center mt-5 ">
          <div className={dataLength === jobs.length && "hidden"}>
            <button
              className="btn btn-primary"
              onClick={() => setDataLength(jobs.length)}
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
