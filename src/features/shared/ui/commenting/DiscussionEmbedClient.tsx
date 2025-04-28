"use client";

import { DiscussionEmbed } from "disqus-react";

export function DiscussionEmbedClient({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <DiscussionEmbed
      config={{
        identifier: `/blog/${slug}/`,
        title,
      }}
      shortname={process.env.NEXT_PUBLIC_DISQUS_NAME || ""}
    />
  );
}
