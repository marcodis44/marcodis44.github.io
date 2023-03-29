import { EduProps } from "../types/types";

const Education = ({ props }: { props: EduProps }) => {
  return (
    <>
      <p className="my-0 py-0 text-tblue dark:text-light text-sm">
        {props.date}
      </p>
      <h3 className="font-bold text-xl text-tblue dark:text-light">
        {props.school}
      </h3>
      <p className="my-0 py-0 text-tblue dark:text-light mb-5">
        {props.description}
      </p>
    </>
  );
};

export default Education;
