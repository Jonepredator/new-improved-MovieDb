import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';


const Headline = styled.div`
   display: flex;
   justify-content: center;
   margin: 0;

   h1 {
      font-size: 2rem;
      margin: 5px 0 10px;
      letter-spacing: .2rem;
      font-weight: 400;
   }
`;

const MovieSection = styled.section`
   display: flex;
   position: relative;
   justify-content: center;
   overflow: hidden;
   height: 100vh;
   width: 100vw;
   max-height: 720px;
   /* border: 2px solid white; */

   @media (max-width: 1450px){
      max-height: 480px;
   }
`;

const MovieWrapper = styled.div`
   position: relative;
   width: 1280px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   position: relative;
   /* border: 2px solid red; */

   @media (max-width: 1450px){
      width: 720px;
   }
`;

const MovieSlide = styled.div`
   z-index: 1;
   width: 50%;
   height: 100%;
`;

const MovieSlider = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   &::before {
      content: '';
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      bottom: 0vh;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.2) 100%);
   }
`;

const MovieImage = styled(motion.img)`
   position: absolute;
   max-width: 1280px;
   height: 720px;
   object-fit: cover;

   @media (max-width: 1450px){
      max-width: 720px;
      height: 480px;
   }
`;

const MovieContent = styled.div`
   position: absolute;
   z-index: 10;
   background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.0) 90%, rgba(0,0,0,0) 100%);
   /* display: flex; */
   /* flex-direction: row; */
   min-width: 100%;
   /* width: calc(100% - 100px); */
   /* align-items: center; */
   color: #fff;
   bottom: 20px;

   h1 {
      margin-left: 60px;
      letter-spacing: .2rem;
      font-weight: 400;
   }
`;

const SliderButtons = styled.div`
   position: absolute;
   display: flex;
   min-width: 1280px;
   justify-content: space-between;
   z-index: 10;
   /* border: 2px solid white; */
`;

const PrevArrow = styled(RiArrowLeftSLine)`
   width: 80px;
   height: 720px;
   top: 50%;
   user-select: none;
   padding: 10px;
   color: #fff;
   background: #000d1a;
   cursor: pointer;
   opacity: .8;
   background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%);
   transition: 0.4s;

   &:hover {
      background: linear-gradient(to right, rgba(205,133,63,0.8) 0%, rgba(205,133,63,0.4) 50%, rgba(205,133,63,0.2) 70%, rgba(205,133,63,0.1) 80%, rgba(205,133,63,0) 100%);
      /* #cd853f; */
      opacity: 1;
      transform: scale(1.05);
   }
`;
const NextArrow = styled(RiArrowRightSLine)`
   width: 80px;
   height: 720px;
   top: 50%;
   user-select: none;
   padding: 10px;
   color: #fff;
   background: #000d1a;
   cursor: pointer;
   opacity: .8;
   background: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%);
   transition: 0.4s;

   &:hover {
      background: linear-gradient(to left, rgba(205,133,63,0.8) 0%, rgba(205,133,63,0.4) 50%, rgba(205,133,63,0.2) 70%, rgba(205,133,63,0.1) 80%, rgba(205,133,63,0) 100%);;
      opacity: 1;
      transform: scale(1.05);
   }
`;



const apiKey = 'fbf0238042e831e97ad243b9cf994e70';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing?&api_key=${apiKey}`;
const posterURL = 'https://image.tmdb.org/t/p/w1280/';

const NowPlaying = () => {
   const [npMovies, setNpMovies] = useState([]);
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      fetch(nowPlayingUrl)
         .then(res => res.json())
         .then(data => {
            console.log(data.results);
            setNpMovies(data.results);
         });
   }, []);


   const length = npMovies.length;
   const timeout = useRef(null);

   useEffect(() => {
      const nextSlide = () => {
         setCurrent(current => (current === length - 1 ? 0 : current + 1));
      };

      timeout.current = setTimeout(nextSlide, 3500);

      return function () {
         if (timeout.current) {
            clearTimeout(timeout.current);
         }
      };
   }, [current, length]);

   const nextSlide = () => {
      if (timeout.current) {
         clearTimeout(timeout.current);
      }

      setCurrent(current === length - 1 ? 0 : current + 1);
      // console.log(current);
   };

   const prevSlide = () => {
      if (timeout.current) {
         clearTimeout(timeout.current);
      }

      setCurrent(current === 0 ? length - 1 : current - 1);
      // console.log(current);
   };

   if (!Array.isArray(npMovies) || SliderButtons.length <= 0) {
      return null;
   }

   const fadeAnimation = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0 }
   };

   return (
      <>
         <Headline>
            <h1>Now Playing</h1>
         </Headline>

         <MovieSection>
            <MovieWrapper>
               <AnimatePresence>
                  {/* if you want less movies to show in the slide. the amount received is by default 20 */}
                  {/* {npMovies.length > 0 && npMovies.slice(0, 6).map((movie) => { */}
                  {npMovies.map((slide, index) => {
                     return (
                        <MovieSlide key={index}>
                           {index === current && (
                              <MovieSlider>
                                 <MovieImage
                                    src={posterURL + slide.backdrop_path}
                                    alt={slide.original_title}
                                    initial='hidden'
                                    animate='visible'
                                    exit='exit'
                                    variants={fadeAnimation}
                                 />
                                 <MovieContent>
                                    <h1>{slide.title}</h1>
                                 </MovieContent>
                              </MovieSlider>
                           )}
                        </MovieSlide>
                     );
                  })}
               </AnimatePresence>
               <SliderButtons>
                  <PrevArrow onClick={prevSlide} />
                  <NextArrow onClick={nextSlide} />
               </SliderButtons>
            </MovieWrapper>
         </MovieSection>

      </>
   );
};

export default NowPlaying;
