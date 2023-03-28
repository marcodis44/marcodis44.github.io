import { ReactNode } from "react";

interface CvSectionProps {
  title: string;
  children: ReactNode;
}

const CVSection = (props: CvSectionProps) => {
  return (
    <div className="w-full lg:w-1/2 p-3 lg:p-10">
      <h3 className="text-tblue dark:text-light text-xl font-bold">
        {props.title}
      </h3>
      <hr className="w-1/2 border-2 border-light" />
      <div className="pt-3">{props.children}</div>
    </div>
  );
};

export default CVSection;
