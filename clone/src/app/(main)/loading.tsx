import { Spinner } from "../../components/spinner";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    </div>
  );
};

export default loading;
