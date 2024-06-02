import { CiLocationOn } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const { phone, email, address } = contact_information;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl gap-y-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt={job_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-left font-semibold">{company_name}</p>
          <div className="flex gap-5">
            <button className="btn btn-outline btn-primary">{job_type}</button>
            <button className="btn btn-outline btn-primary">
              {remote_or_onsite}
            </button>
          </div>
          <div className="flex gap-5 text-left text-lg">
            <p className="flex mr-5 item-center my-auto">
              <CiLocationOn className="my-auto text-xl"> </CiLocationOn>
              {location}
            </p>
            <p className="flex mr-5 item-center">
              <BiDollarCircle className="my-auto text-xl"></BiDollarCircle>
              {salary}
            </p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
