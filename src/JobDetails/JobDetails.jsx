import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  //   console.log(job.job_description);
  return (
    <div>
      <div className=" grid grid-cols-4 lg:mb-20 mb-10 lg:mt-20 mt-10">
        <div className="col-span-3 space-y-8 text-xl">
          <p>
            <span className=" font-extrabold">Job description : </span>
            {job.job_description}
          </p>
          <p>
            <span className=" font-extrabold">Job responsibility :</span>
            {job.job_responsibility}
          </p>
          <p>
            <span className=" font-extrabold">Educational requirements : </span>{" "}
            <br />
            {job.educational_requirements}
          </p>
          <p>
            <span className=" font-extrabold">Experiences : </span> <br />
            {job.experiences}
          </p>
        </div>
        <div className="bg-blue-200 p-10 rounded-lg text-black">
          <p className="mb-2 font-bold text-xl">Job Details</p>
          <hr />
          <p>
            <span className="font-bold mt-2 text-xl">Salary : </span>
            {job.salary}
          </p>
          <p>
            <span className="font-bold mt-2 text-xl">Job Title : </span>
            {job.job_title}
          </p>
          <p className="mb-2 font-bold text-xl mt-10">Job Details</p>
          <hr />
          <p>
            <span className="font-bold mt-2 text-xl">Phone : </span>
            {job.contact_information.phone}
          </p>
          <p>
            <span className="font-bold mt-2 text-xl">Email : </span>
            {job.contact_information.email}
          </p>
          <p>
            <span className="font-bold mt-2 text-xl">Address : </span>
            {job.contact_information.address}
          </p>
          <button className="btn btn-primary mt-10">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
