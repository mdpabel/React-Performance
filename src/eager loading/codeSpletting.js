import React, { lazy, Suspense, useState } from "react";

// Dynamic import
const One = lazy(() => import("./one"));
const Two = lazy(() => import("./two"));
const Three = lazy(() => import("./three"));

// EagerLoading
const eagerLoading = () => {
  import("./one");
  import("./two");
  import("./three");
};

const CodeSplitting = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onFocus={eagerLoading}
        onMouseOver={eagerLoading}
        onClick={() => setShow(!show)}
      >
        {show ? "HIDE" : "SHOW"}
      </button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <One />
          <Two />
          <Three />
        </Suspense>
      )}
    </div>
  );
};

export default CodeSplitting;
