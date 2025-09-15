"use client";
import Container from "@/app/(withCommonLayout)/_component/Shared/Container";
import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Calendar,
  MapPin,
  Edit3,
  Camera,
  Phone,
  Globe,
  Briefcase,
  Award,
  Settings,
  Save,
  X,
} from "lucide-react";

// Mock user data - replace with actual user data from your API/context
const mockUserData = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  website: "https://johndoe.dev",
  bio: "Full-stack developer passionate about creating amazing web experiences. Love working with React, Node.js, and modern web technologies.",
  profession: "Senior Software Engineer",
  company: "Tech Solutions Inc.",
  joinDate: "January 2023",
  // Using Unsplash images as examples - replace with your actual image URLs or local images
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  coverImage:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop",
  // Alternative: Use local images from your public folder
  // avatar: "/images/default-avatar.jpg",
  // coverImage: "/images/default-cover.jpg",
  stats: {
    posts: 24,
    followers: 1250,
    following: 180,
  },
  skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Next.js"],
  achievements: [
    "Top Contributor 2024",
    "100+ Posts Published",
    "Community Leader",
  ],
};

const Profile = () => {
  const [userData, setUserData] = useState(mockUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(userData);
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
    // Here you would typically make an API call to update the user data
    console.log("Saving user data:", editData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(userData);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        {/* Cover Image Section */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
          <Image
            src={userData.coverImage}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <button className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all">
            <Camera size={20} />
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-b-lg shadow-lg p-6 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <button className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                <Camera size={16} />
              </button>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 bg-transparent focus:outline-none"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-gray-900">
                      {userData.name}
                    </h1>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.profession}
                      onChange={(e) =>
                        handleInputChange("profession", e.target.value)
                      }
                      className="text-gray-600 border-b border-gray-300 bg-transparent focus:outline-none mt-1"
                    />
                  ) : (
                    <p className="text-gray-600">{userData.profession}</p>
                  )}

                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="text-gray-500 border-b border-gray-300 bg-transparent focus:outline-none mt-1"
                    />
                  ) : (
                    <p className="text-gray-500">{userData.company}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Save size={16} />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <X size={16} />
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Edit3 size={16} />
                        Edit Profile
                      </button>
                      <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                        <Settings size={16} />
                        Settings
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {userData.stats.posts}
                  </div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {userData.stats.followers}
                  </div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {userData.stats.following}
                  </div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Contact & Bio */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About
              </h2>
              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{userData.bio}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.email}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.phone}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.location}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="text-gray-400" size={20} />
                  {isEditing ? (
                    <input
                      type="url"
                      value={editData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <a
                      href={userData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      {userData.website}
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-gray-400" size={20} />
                  <span className="text-gray-600">
                    Joined {userData.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Achievements */}
          <div className="space-y-6">
            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Achievements
              </h2>
              <div className="space-y-3">
                {userData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="text-yellow-500" size={20} />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Professional
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-gray-400" size={20} />
                  <div>
                    <div className="font-medium text-gray-900">
                      {userData.profession}
                    </div>
                    <div className="text-sm text-gray-500">
                      {userData.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
