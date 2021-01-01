import React, { lazy, Suspense, useState } from "react";

// Dynamic import
const One = lazy(() => import("./one"));
const Two = lazy(() => import("./two"));
const Three = lazy(() => import("./three"));

const CodeSplitting = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
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
