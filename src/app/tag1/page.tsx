import React from "react";

export async function generateMetadata() {
  return {
    openGraph: {
      title: `오픈 그래프로 생성된 타이틀`,
      description: "오픈 그래프로 생성된 description",
      url: `https://twin.world`,
      images: [
        {
          url: `https://picsum.photos/300`,
          width: 300,
          height: 300,
        },
      ],
    },
  };
}

export default function Tag1() {
  return <div>Tag1</div>;
}
