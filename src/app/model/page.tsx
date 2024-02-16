import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Page",
  description: "모델을 보여주는 페이지 입니다.",
};

export default function page() {
  return (
    <div>
      <h1>Model Page</h1>
      <p>모델을 보여주는 페이지 입니다.</p>
    </div>
  );
}
