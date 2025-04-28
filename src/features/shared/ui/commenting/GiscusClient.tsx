"use client";

import Giscus from "@giscus/react";

export function GiscusClient({ title }: { title: string }) {
  return (
    <Giscus
      id="comments"
      repo="flsilva/flsilva.com"
      repoId="MDEwOlJlcG9zaXRvcnk3MjQwODY1="
      category="Announcements"
      categoryId="DIC_kwDOAG58oc4Cbr5k"
      mapping="title"
      term={title}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
      strict="1"
    />
  );
}
