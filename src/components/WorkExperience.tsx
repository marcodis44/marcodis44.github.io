import { ProfessionalExpProps } from "../types/types";

const WorkExperience = ({ props }: { props: ProfessionalExpProps }) => {
  return (
    <>
      <p className="my-0 py-0 text-tblue dark:text-light text-sm ">
        {props.fromTo}
      </p>
      <h3 className="font-bold text-xl text-tblue dark:text-light">
        {props.title}
      </h3>
      <p className="my-0 py-0 text-tblue dark:text-light">{props.employer}</p>
      <ul className="list-disc ml-5 pt-3 mb-8">
        {props.responsibilities.map((resp, i) => (
          <li key={i} className="text-tblue dark:text-light">
            {resp}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkExperience;
