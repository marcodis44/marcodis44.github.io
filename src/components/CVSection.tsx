import { ReactNode } from "react";

interface CvSectionProps {
  title: string;
  children: ReactNode;
}

const CvSection = (props: CvSectionProps) => {
  return (
    <div className="w-full p-3 lg:p-10">
      <h3 className="text-tblue dark:text-light text-2xl font-bold">
        {props.title}
      </h3>
      <hr className="w-1/2 border-2 dark:border-light border-tblue" />
      <div className="pt-3">{props.children}</div>
    </div>
  );
};

export default CvSection;
