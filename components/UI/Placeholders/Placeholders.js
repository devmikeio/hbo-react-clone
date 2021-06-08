import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from '../../utilities';

const placeholderss = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  return (
    <div className={`placeholders ${props.type}`}>
      <h3 className="placeholders__title">{props.title}</h3>
      <div className="placeholders__thumbnails">
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
        <div className="placeholders__thumbnail-skeleton">
          <div className="placeholders__thumbnail-skeleton-img"></div>
        </div>
      </div>
    </div>
  );
};

export default placeholderss;
