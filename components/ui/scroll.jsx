import React from "react";
import { ChevronDownIcon } from "components/ui/icons";

const ScrollDown = () => {
  return (
    <div className="sticky bottom-0 mx-auto">
      <div className="cursor-pointer text-center w-32 mx-auto pb-4">
        <h4 className=" font-normal leading-none">Scroll Down</h4>
        <div className="mx-auto w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;
