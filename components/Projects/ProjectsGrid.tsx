'use client'
import React from 'react'
import { useEffect, useState } from "react";
import { supabase } from "@/components/createClient";
import { Image } from 'landing-page-ui';

interface Project {
  id: number;
  created_at: string;
  title: string;
  short_description: string;
  project_type: string[];
  project_status: string;
  date_started: string;
  date_complete: string;
  tech_use: string[];
  project_url: string;
  role: string;
  client_name?: string | null;
  client_feedback?: string | null;
  key_features: {
    desc: string;
    title: string;
  }[];
  challenges_faced?: string | null;
  lessons_learned?: string | null;
  team_size: number;
  collaborators?: string[] | null;
  project_images: string[];
  project_videos?: string[] | null;
  documentation_links?: string | null;
  github_repo?: string | null;
  downable_resources?: string | null;
  updated_at: string;
  tags: string[];
  views_count: number;
  likes: number;
  comments?: string | null;
  description: string[];
}

const ProjectsGrid = () => {
  const [getData, setGetData] = useState<Project[]>([]);
  useEffect(() => {
    fetchProjects();
    // fetchAndUpdateViewsCount();
  }, []);

  async function fetchProjects() {
    const { data } = await supabase
      .from('projects')
      .select('*');
    setGetData(data as Project[]);
  }

  return (
    <div className='px-16 pb-20'>
      <div className='grid gap-3 grid-cols-3'>
        {getData.map((data, index) => {
          console.log(data)
          return (
            <div key={index} className=''>
              <Image src={data.project_images.length == 0 ? 'https://via.placeholder.com/600x400' : data.project_images[0]} alt={data.title} />
              <div>
                <h4>{data.title}</h4>
                <p>{data.short_description}</p>
                <div>
                  {data.tags.slice(0, 3).map((tag, i) => {
                    return (
                      <span key={i}>{tag}</span>
                    )
                  })}
                </div>
                <div>
                  <a href={data.project_url}>Live Preview</a>
                  <a href={data.github_repo ? data.github_repo : "#"}>View Code</a>
                </div>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}

export default ProjectsGrid