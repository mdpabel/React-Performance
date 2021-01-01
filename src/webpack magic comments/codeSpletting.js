// https://webpack.js.org/api/module-methods/#magic-comments

/**
 * webpackPrefetch: Tells the browser that the resource is probably needed for some navigation in the future.
 * When webpack sees this comment, it adds this to your document’s head:
 * <link rel="prefetch" as="script" href="/static/js/1.chunk.js">
 * With this, the browser will automatically load this JavaScript file into the browser cache so it’s ready ahead of time.
 */

import React, { lazy, Suspense, useState } from "react";

// Dynamic import
const One = lazy(() => import(/* webpackPrefetch: true */ "./one"));
const Two = lazy(() => import(/* webpackPrefetch: true */ "./two"));
const Three = lazy(() => import(/* webpackPrefetch: true */ "./three"));

// EagerLoading
// const eagerLoading = () => {
//   import("./one");
//   import("./two");
//   import("./three");
// };

const CodeSplitting = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        // onFocus={eagerLoading}
        // onMouseOver={eagerLoading}
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
