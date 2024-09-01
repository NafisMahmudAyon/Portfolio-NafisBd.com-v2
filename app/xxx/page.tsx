'use client'
import React, { useState, ChangeEvent } from 'react';
import { supabase } from '@/components/createClient';

interface KeyFeature {
  title: string;
  desc: string;
}

interface FormData {
  title: string;
  short_description: string;
  project_type: string[];  // Explicitly typing as string[]
  project_status: string;
  date_started: string;
  date_complete: string;
  tech_use: string[];  // Explicitly typing as string[]
  project_url: string;
  role: string;
  client_name: string;
  client_feedback: string;
  key_features: KeyFeature[];
  challenges_faced: string;
  lessons_learned: string;
  team_size: number;
  collaborators: string[];  // Explicitly typing as string[]
  project_images: string[];  // Explicitly typing as string[]
  project_videos: string[];  // Explicitly typing as string[]
  documentation_links: string[];  // Explicitly typing as string[]
  github_repo: string;
  downloadable_resources: string[];  // Explicitly typing as string[]
  tags: string[];  // Explicitly typing as string[]
  description: string[];  // Explicitly typing as string[]
}

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    short_description: '',
    project_type: [],  // Initialized as string[]
    project_status: '',
    date_started: '',
    date_complete: '',
    tech_use: [],  // Initialized as string[]
    project_url: '',
    role: '',
    client_name: '',
    client_feedback: '',
    key_features: [{ title: '', desc: '' }],
    challenges_faced: '',
    lessons_learned: '',
    team_size: 0,
    collaborators: [],  // Initialized as string[]
    project_images: [],  // Initialized as string[]
    project_videos: [],  // Initialized as string[]
    documentation_links: [],  // Initialized as string[]
    github_repo: '',
    downloadable_resources: [],  // Initialized as string[]
    tags: [],  // Initialized as string[]
    description: [],  // Initialized as string[]
  });

  // console.log(formData)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value.split(',').map(item => item.trim()),
    });
  };

  const handleFeatureChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFeatures = formData.key_features.map((feature, i) =>
      i === index ? { ...feature, [name]: value } : feature
    );
    setFormData({
      ...formData,
      key_features: updatedFeatures,
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      key_features: [...formData.key_features, { title: '', desc: '' }],
    });
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formData.key_features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      key_features: updatedFeatures,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handling date fields
    const formatToISOWithTimezone = (dateString: string | null) => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toISOString(); // Converts to ISO format "2024-02-25T02:16:06.000Z"
    };

    const dateStarted = formatToISOWithTimezone(formData.date_started);
    const dateComplete = formatToISOWithTimezone(formData.date_complete);

    // Assuming key_features is already in the correct format (array of objects)
    // const keyFeaturesArray = Array.isArray(formData.key_features)
    //   ? formData.key_features
    //   : formData.key_features.split(',').map((feature: string) => {
    //     const [title, desc] = feature.split(':');
    //     return { title: title.trim(), desc: desc.trim() };
    //   });

    const keyFeaturesArray = formData.key_features;

    // const tagsArray = Array.isArray(formData.tags)
    //   ? formData.tags
    //   : formData.tags.split(',').map((tag: string) => tag.trim());
    const tagsArray = formData.tags

    // const projectImagesArray = Array.isArray(formData.project_images)
    //   ? formData.project_images
    //   : formData.project_images.split(',').map((image: string) => image.trim());
    const projectImagesArray = formData.project_images
    
    // const descriptionArray = Array.isArray(formData.description)
    //   ? formData.description
    //   : formData.description.split(',').map((desc: string) => desc.trim());
    const descriptionArray = formData.description

    const { data, error } = await supabase
      .from('projects')
      .insert([
        {
          ...formData,
          date_started: dateStarted,
          date_complete: dateComplete,
          key_features: keyFeaturesArray,
          tags: tagsArray,
          project_images: projectImagesArray,
          description: descriptionArray,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };



  return (
    <form className='grid gap-4 place-items-center' onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Short Description:
        <textarea name="short_description" value={formData.short_description} onChange={handleChange} required />
      </label>
      <label>
        Project Type (comma separated):
        <input
          type="text"
          name="project_type"
          value={formData.project_type.join(', ')}
          onChange={(e) => handleArrayChange(e, 'project_type')}
          required
        />
      </label>
      <label>
        Project Status:
        <input type="text" name="project_status" value={formData.project_status} onChange={handleChange} required />
      </label>
      <label>
        Date Started:
        <input type="date" name="date_started" value={formData.date_started} onChange={handleChange} required />
      </label>
      <label>
        Date Completed:
        <input type="date" name="date_complete" value={formData.date_complete} onChange={handleChange} />
      </label>
      <label>
        Technologies Used (comma separated):
        <input
          type="text"
          name="tech_use"
          value={formData.tech_use.join(', ')}
          onChange={(e) => handleArrayChange(e, 'tech_use')}
          required
        />
      </label>
      <label>
        Project URL:
        <input type="url" name="project_url" value={formData.project_url} onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={formData.role} onChange={handleChange} required />
      </label>
      <label>
        Client Name:
        <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} />
      </label>
      <label>
        Client Feedback:
        <textarea name="client_feedback" value={formData.client_feedback} onChange={handleChange} />
      </label>
      <label>Key Features:</label>
      {formData.key_features.map((feature, index) => (
        <div key={index} style={{ marginBottom: '1em' }}>
          <label>
            Feature Title:
            <input
              type="text"
              name="title"
              value={feature.title}
              onChange={(e) => handleFeatureChange(index, e)}
              required
            />
          </label>
          <label>
            Feature Description:
            <input
              type="text"
              name="desc"
              value={feature.desc}
              onChange={(e) => handleFeatureChange(index, e)}
              required
            />
          </label>
          <button type="button" onClick={() => removeFeature(index)}>
            Remove Feature
          </button>
        </div>
      ))}
      <button type="button" onClick={addFeature}>
        Add Another Feature
      </button>
      <label>
        Challenges Faced:
        <textarea name="challenges_faced" value={formData.challenges_faced} onChange={handleChange} />
      </label>
      <label>
        Lessons Learned:
        <textarea name="lessons_learned" value={formData.lessons_learned} onChange={handleChange} />
      </label>
      <label>
        Team Size:
        <input
          type="number"
          name="team_size"
          value={formData.team_size}
          onChange={(e) => setFormData({ ...formData, team_size: Number(e.target.value) })}
          required
        />
      </label>
      <label>
        Collaborators (comma separated):
        <textarea
          name="collaborators"
          value={formData.collaborators.join(', ')}
          onChange={(e) => handleArrayChange(e, 'collaborators')}
        />
      </label>
      <label>
        Project Images (comma separated URLs):
        <textarea
          name="project_images"
          value={formData.project_images.join(', ')}
          onChange={(e) => handleArrayChange(e, 'project_images')}
        />
      </label>
      <label>
        Project Videos (comma separated URLs):
        <textarea
          name="project_videos"
          value={formData.project_videos.join(', ')}
          onChange={(e) => handleArrayChange(e, 'project_videos')}
        />
      </label>
      <label>
        Documentation Links (comma separated URLs):
        <textarea
          name="documentation_links"
          value={formData.documentation_links.join(', ')}
          onChange={(e) => handleArrayChange(e, 'documentation_links')}
        />
      </label>
      <label>
        GitHub Repo:
        <input type="url" name="github_repo" value={formData.github_repo} onChange={handleChange} />
      </label>
      <label>
        Downloadable Resources (comma separated URLs):
        <textarea
          name="downloadable_resources"
          value={formData.downloadable_resources.join(', ')}
          onChange={(e) => handleArrayChange(e, 'downloadable_resources')}
        />
      </label>
      <label>
        Tags (comma separated):
        <textarea name="tags" value={formData.tags.join(', ')} onChange={(e) => handleArrayChange(e, 'tags')} required />
      </label>
      <label>
        Description (comma separated paragraphs):
        <textarea
          name="description"
          value={formData.description.join(', ')}
          onChange={(e) => handleArrayChange(e, 'description')}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;
