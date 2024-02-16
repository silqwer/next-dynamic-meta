import { ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

// 서버 코드
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  console.log(slug);

  const previousTitle = (await parent).title || "1111";
  console.log(previousTitle);

  return {
    title: `${previousTitle}`,
    description: "모델을 보여주는 페이지 입니다.",
    openGraph: {
      title: `오픈 그래프로 생성된 타이틀`,
      images: [
        {
          url: `https://via.placeholder.com/${slug}`,
          width: 600,
          height: 300,
        },
      ],
    },
  };
}

export default function page({ params: { slug } }: Props) {
  return (
    <div>
      <div>전달 받은 slug: {slug}</div>
    </div>
  );
}
