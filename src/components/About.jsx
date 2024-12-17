import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/neha-gupta-839497260"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Neha Gupta
        </a>
        {/* {' '} */}
        , a final-year B.Tech student, passionate about Competitive Programming, development, and mastering DSA. I thrive on delivering state-of-the-art software solutions. When I&apos;m not coding, you&apos;ll find me exploring the fascinating worlds of Movies, Web Series, K-Dramas and Music.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
      I’ve solved 450+ problems across platforms like 

      {' '}
      <a
          href="https://www.geeksforgeeks.org/user/gupta94a87/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          GeeksforGeeks
        </a>
      ,

      {' '}
      <a
          href="https://leetcode.com/u/nehabts/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          LeetCode
        </a>
       ,
        and 
        {' '}
         <a
          href="https://www.naukri.com/code360/profile/dd117be9-0002-406a-8046-fb5c326667e9"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {/* {' '} */}
          Coding Ninjas
        </a>
        , and reached a highest rating of 1616 on 
        {' ' }
        <a
          href="https://www.codechef.com/users/nehabts"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          CodeChef
        </a>
       
        
        . C++ is my go-to language for tackling challenging problems. 
        {' '}
       
        {/* <a
          href="https://github.com/Rhaegar121"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          2500+ contributions on GitHub
        </a>
        {' '} */}
        I was the Competitive Programming (CP) Lead for RTU Coders, a college club, and I’m currently a coordinator for the VSC Club. These roles have helped me grow in both problem-solving and leadership.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1pMbHucJT5zIo2QLJxhcxgXp-j-F0BUrA/view?usp=drive_link"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
