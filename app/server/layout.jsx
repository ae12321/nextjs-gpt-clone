import React from "react";

export default function layout({ children }) {
  return (
    <div className="max-w-xl">
      <div className="mockup-code my-8">
        <pre data-prefix="$">
          <code># コンポーネント専用のレイアウト</code>
        </pre>
        <pre data-prefix="$">
          <code># 適当なコードモックに適当なコード</code>
        </pre>
        <pre data-prefix="$">
          <code lang="bash">npm install react react-dom</code>
        </pre>
      </div>
      <div>{children}</div>
    </div>
  );
}
