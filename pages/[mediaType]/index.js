import Router from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import GenreNav from "../../components/UI/GenreNav/GenreNav";
import { shuffleArray } from "../../components/utilities";
import axios from 'axios';
// import LazyLoad from "react-lazyload";
// import Placeholders from "../components/UI/Placeholders/Placeholders";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In Theaters & HBO Max. Streaming throughout May 31."
        linkUrl="/movie/460465"
        type="front"
      /> */}
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
      {/* <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      > */}
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
      {/* </LazyLoad> */}

    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try{
    genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=7e25105542df9cfb7f39489fe9aa8978&language=en-US`);
    featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=7e25105542df9cfb7f39489fe9aa8978&language=en-US`);
    console.log("genreData");
    console.log(genresData.data);
  } catch(error) {
    console.log("error");
    console.log(error);
  }
  console.log(genresData);
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query 
    }, // will be passed to the page component as props
  };
}