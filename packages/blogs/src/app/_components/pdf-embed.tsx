import React from "react";

export default function PdfEmbed({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="600px"
      style={{ border: "none" }}
      title="PDF Preview"
    />
  );
}
