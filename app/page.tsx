// 'use client'
// import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe/AboutMe";
import CallToAction from "@/components/CallToAction/CallToAction";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/Header/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
// import { supabase } from "@/createClient";

export default function Home() {
  // const [getData, setGetData] = useState([]);
  // const [viewsCount, setViewsCount] = useState(0);

  // useEffect(() => {
  //   fetchProjects();
  //   fetchAndUpdateViewsCount();
  // }, []);

  // async function fetchProjects() {
  //   const { data } = await supabase
  //     .from('projects')
  //     .select('*');
  //   setGetData(data);
  // }

  // async function fetchAndUpdateViewsCount() {
  //   const { data } = await supabase
  //     .from('projects')
  //     .select('views_count')
  //     .eq('id', '1') // Fetching the count for the specific project with id 1
  //     .single(); // Ensuring only one record is returned

  //   if (data) {
  //     const newViewsCount = data.views_count + 1;
  //     setViewsCount(newViewsCount);

  //     // Now update the views_count in the database
  //     await updateViewsCount(newViewsCount);
  //   }
  // }

  // async function updateViewsCount(value) {
  //   const { data } = await supabase
  //     .from('projects')
  //     .update({ views_count: value })
  //     .eq('id', '1') // Updating the count for the specific project with id 1
  //     .select();

  //   console.log("Updated Views Count:", data);
  // }

  return (
    <main className="w-full ">
      <HeroSection />
      <div className="bg-[#f1f6fa] dark:bg-[#272727] mx-auto max-w-[1440px] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl py-36">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <CallToAction />
      </div>
    </main>
  );
}
