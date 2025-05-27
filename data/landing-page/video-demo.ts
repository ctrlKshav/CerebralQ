import { VideoDemoData } from "@/types/landing-page/video-demo";

export const videoDemoData: VideoDemoData = {
  label: "Video Demo",
  title: "Personality Insights, Visualized",
  description:
    "Watch how Cerebral Quotient transforms complex personality data into intuitive, actionable insights through our interactive platform.",
  video: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    publicId: process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_ID_DEMO || "",
  },
};
