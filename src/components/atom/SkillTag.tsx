import cc from "classcat";
import type { DOMAttributes, ReactNode, VFC } from "react";

type TagType = {
  id?: number;
  spanColor?: "red" | "blue" | "purple" | "yellow" | "green";
  children?: ReactNode;
  className?: string;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
  src?: string;
};

export const SkillTag: VFC<TagType> = (props) => {
  const spanClasses = cc([
    "inline-block items-center py-1.5 px-3 mr-1 text-xs font-medium leading-none text-white uppercase bg-opacity-50 rounded-full",
    {
      "bg-red-400": props.spanColor === "red",
      "bg-blue-400": props.spanColor === "blue",
      "bg-purple-400": props.spanColor === "purple",
      "bg-yellow-400": props.spanColor === "yellow",
      "bg-green-400": props.spanColor === "green",
    },
  ]);
  return <span className={cc([spanClasses])}>{props.children}</span>;
};
export const SkillTagSolid: VFC<TagType> = (props) => {
  const spanClasses = cc([
    "inline-block items-center py-1.5 px-3 mr-1 text-xs font-medium leading-none text-white uppercase rounded-full",
    {
      "bg-red-400": props.spanColor === "red",
      "bg-blue-400": props.spanColor === "blue",
      "bg-purple-400": props.spanColor === "purple",
      "bg-yellow-400": props.spanColor === "yellow",
      "bg-green-400": props.spanColor === "green",
    },
  ]);
  return <span className={cc([spanClasses])}>{props.children}</span>;
};
