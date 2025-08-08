
import { Card, CardContent, CardHeader, CardTitle, Breadcrumb, BreadcrumbItem, Badge, Divider, Button, CardDescription } from '@/components/aspect-ui';
import BlogNav from '@/components/BlogNav';
import Footer from '@/components/Footer/Footer';
import MarkdownContent from '@/components/MarkdownContent';
import PageTitle from '@/components/PageTitle';
import data from '@/public/project-getData.json';
import { Calendar, Code, ExternalLink, Github, Info, Settings, Star, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const getData = data.filter((item) => item.slug === slug);

  const [activeSection, setActiveSection] = useState('overview')
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code },
    { id: 'details', label: 'Project Details', icon: Settings }
  ]
  return (
    <main className="w-full overflow-hidden cursor-none">
      <div
        id="home"
        className="mx-auto mt-4 w-full rounded-t-3xl background bg-[#f1f6fb] pb-12 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] lg:max-w-[1440px]"
      >
        {/* <NavBar /> */}
        <PageTitle
          title={getData[0].title}
          className="text-wrap pt-10 px-3 flex justify-center w-full text-2xl"
        />
      </div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{getData.title}</h1>
            <div className="flex gap-2 mb-4">
              {getData.project_type.map((type) => (
                <Badge key={type} variant="outline" className="text-xs">
                  {type}
                </Badge>
              ))}
            </div>
            <Badge
              variant={getData.project_status === 'In Progress' ? 'outline' : 'default'}
              className="mb-4"
            >
              {getData.project_status}
            </Badge>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <Divider className="my-6" />

          <div className="space-y-4">
            <Button className="w-full">
              <a href={getData.project_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </a>
            </Button>
            <Button variant="outline" className="w-full">
              <a href={getData.github_repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Stats</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Started:</span>
                <span>{new Date(getData.date_started).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Team Size:</span>
                <span>{getData.team_size}</span>
              </div>
              <div className="flex justify-between">
                <span>Technologies:</span>
                <span>{getData.tech_use.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeSection === 'overview' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {getData.short_description}
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About This Project</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    Aspect UI is a comprehensive React component library designed to accelerate modern web development.
                    Built with performance and developer experience in mind, it provides a rich set of customizable
                    components that integrate seamlessly into any React project.
                  </p>
                  <p className="text-gray-600">
                    The library focuses on providing developers with the tools they need to create beautiful,
                    responsive, and accessible user interfaces without compromising on performance or flexibility.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Started:</span>
                        <span className="font-medium">{new Date(getData.date_started).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <Badge variant="default">{getData.project_status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Size:</span>
                        <span className="font-medium">{getData.team_size} Developer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">Author</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'features' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
                <p className="text-lg text-gray-600">
                  Discover what makes Aspect UI the perfect choice for your next project
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {getData.key_features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Star className="h-5 w-5 text-blue-600" />
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'tech-stack' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
                <p className="text-lg text-gray-600">
                  Built with modern technologies for optimal performance and developer experience
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                  <CardDescription>
                    The following technologies power this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {getData.tech_use.map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Code className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-900">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>
                    Keywords and categories associated with this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getData.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'details' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Details</h2>
                <p className="text-lg text-gray-600">
                  Comprehensive information about the project structure and implementation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Project Type</label>
                      <div className="flex gap-2 mt-1">
                        {getData.project_type.map((type) => (
                          <Badge key={type} variant="outline">{type}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Status</label>
                      <div className="mt-1">
                        <Badge variant="default">{getData.project_status}</Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Start Date</label>
                      <p className="mt-1 text-gray-900">{new Date(getData.date_started).toLocaleDateString()}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Links & Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Live Demo</label>
                      <div className="mt-1">
                        <a
                          href={getData.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          {getData.project_url}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Source Code</label>
                      <div className="mt-1">
                        <a
                          href={getData.github_repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          GitHub Repository
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
