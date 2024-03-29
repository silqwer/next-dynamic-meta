import { ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 서버 코드
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  console.log("slug:", slug);

  const { url, title, description } = searchParams;
  console.log("url:", url);
  console.log("searchParams:", searchParams);

  return {
    title: `${title}`,
    description: "모델을 보여주는 페이지 입니다.",
    openGraph: {
      title,
      description,
      url: `https://twin.world`,
      images: [
        {
          url,
          width: 300,
          height: 300,
        },
      ],
    },
  };
}

export default function page({ params: { slug } }: Props) {
  return (
    <div>
      <h1>OGTag</h1>
      <div>전달 받은 slug: {slug}</div>
    </div>
  );
}
