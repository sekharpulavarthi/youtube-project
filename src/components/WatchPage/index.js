import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/stores/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../CommentsContainer";

const WatchPage = () => {
  const dispath = useDispatch();
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispath(closeMenu());
  }, []);

  return (
    <div className="px-5 pt-24">
      <iframe
        className="rounded-lg"
        width="900"
        height="550"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
