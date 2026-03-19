"use client";

import { useState } from "react";

const mockSyllabus = [
  {
    id: 1,
    title: "Module 1: Giới thiệu Corona Render",
    lessons: [
      { id: 1, title: "Tổng quan về Corona Render", duration: "12:30", isUnlocked: true },
      { id: 2, title: "Cài đặt và cấu hình ban đầu", duration: "18:45", isUnlocked: true },
      { id: 3, title: "Giao diện và workflow cơ bản", duration: "22:10", isUnlocked: true },
    ],
  },
  {
    id: 2,
    title: "Module 2: Lighting & Camera",
    lessons: [
      { id: 4, title: "Corona Sun & Sky", duration: "20:00", isUnlocked: true },
      { id: 5, title: "Interior Lighting Setup", duration: "28:15", isUnlocked: false },
      { id: 6, title: "Camera & DOF Settings", duration: "16:40", isUnlocked: false },
    ],
  },
  {
    id: 3,
    title: "Module 3: Materials nâng cao",
    lessons: [
      { id: 7, title: "Corona Physical Material", duration: "24:00", isUnlocked: false },
      { id: 8, title: "Glass & Water Materials", duration: "19:30", isUnlocked: false },
      { id: 9, title: "Fabric & Wood Textures", duration: "22:50", isUnlocked: false },
    ],
  },
  {
    id: 4,
    title: "Module 4: Post-production",
    lessons: [
      { id: 10, title: "Corona VFB & LightMix", duration: "18:00", isUnlocked: false },
      { id: 11, title: "Photoshop Workflow", duration: "32:10", isUnlocked: false },
      { id: 12, title: "Final Project", duration: "45:00", isUnlocked: false },
    ],
  },
];

export default function LearnPage() {
  const [activeLesson, setActiveLesson] = useState(1);
  const [activeTab, setActiveTab] = useState<"overview" | "files">("overview");
  const [expandedModules, setExpandedModules] = useState<number[]>([1]);

  const toggleModule = (id: number) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const currentLesson = mockSyllabus
    .flatMap((m) => m.lessons)
    .find((l) => l.id === activeLesson);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] min-h-[calc(100vh-80px)]">

        {/* ── LEFT: Player + Info ── */}
        <div className="flex flex-col">

          {/* Video Player */}
          <div className="relative bg-[#0a0a0f]" style={{ aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button className="w-16 h-16 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center hover:bg-primary/25 hover:border-primary/70 transition-all group">
                <svg className="w-6 h-6 text-primary ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <span className="text-sm text-foreground/40">Nhấn để xem bài giảng</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-white/10 bg-background">
            <div className="flex">
              {[
                { key: "overview", label: "Tổng quan" },
                { key: "files", label: "Tài liệu đính kèm" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "overview" | "files")}
                  className={`px-5 py-3.5 text-sm font-medium transition-all border-b-2 ${
                    activeTab === tab.key
                      ? "text-primary border-primary"
                      : "text-foreground/50 border-transparent hover:text-foreground/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-6 bg-background">
            {activeTab === "overview" && (
              <div className="max-w-2xl space-y-4">
                <h1 className="text-2xl font-bold leading-snug">
                  Masterclass Corona Render – Từ Cơ Bản Đến Nâng Cao
                </h1>
                <p className="text-sm text-foreground/50">
                  Tuấn Anh – Xoi Studio · 1,240 học viên
                </p>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Khóa học chuyên sâu giúp bạn làm chủ Corona Renderer trong 3ds Max. Từ setup scene, lighting, material cho đến post-production chuyên nghiệp. Phù hợp cho cả người mới bắt đầu và designer đã có kinh nghiệm.
                </p>
                <div className="space-y-2 pt-2">
                  <h3 className="font-semibold text-sm text-foreground/80">Bạn sẽ học được:</h3>
                  <ul className="space-y-1.5">
                    {[
                      "Thiết lập scene và workflow chuyên nghiệp trong Corona",
                      "Kỹ thuật lighting nội thất và ngoại thất",
                      "Tạo vật liệu thực tế với Corona Physical Material",
                      "Post-production bằng Corona VFB và Photoshop",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/65">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "files" && (
              <div className="max-w-2xl space-y-3">
                <h3 className="font-semibold text-sm text-foreground/80 mb-4">Tài liệu bài học</h3>
                {[
                  { name: "Corona_Render_Guide.pdf", size: "3.2 MB", type: "PDF" },
                  { name: "Scene_Files_Module1.zip", size: "24 MB", type: "ZIP" },
                  { name: "Material_Library.zip", size: "85 MB", type: "ZIP" },
                ].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-surface/40 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{file.name}</div>
                        <div className="text-xs text-foreground/40">{file.type} · {file.size}</div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-xs rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-black transition-all font-medium">
                      Tải xuống
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Syllabus Sidebar ── */}
        <div className="border-l border-white/10 bg-background lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto">
          <div className="p-5 border-b border-white/10">
            <h2 className="font-semibold text-base">Nội dung khóa học</h2>
          </div>

          <div className="divide-y divide-white/8">
            {mockSyllabus.map((chapter) => {
              const isExpanded = expandedModules.includes(chapter.id);
              return (
                <div key={chapter.id}>
                  {/* Module header */}
                  <button
                    onClick={() => toggleModule(chapter.id)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-surface/40 transition-colors text-left"
                  >
                    <span className="text-sm font-semibold text-foreground/90">{chapter.title}</span>
                    <svg
                      className={`w-4 h-4 text-foreground/50 flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>

                  {/* Lessons */}
                  {isExpanded && (
                    <div className="bg-surface/20">
                      {chapter.lessons.map((lesson) => {
                        const isActive = activeLesson === lesson.id;
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => lesson.isUnlocked && setActiveLesson(lesson.id)}
                            disabled={!lesson.isUnlocked}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all ${
                              isActive
                                ? "bg-primary/10 border-l-2 border-primary"
                                : "border-l-2 border-transparent hover:bg-surface/50"
                            } ${!lesson.isUnlocked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                          >
                            {/* Play icon */}
                            <svg
                              className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : "text-foreground/40"}`}
                              fill="currentColor" viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>

                            <span className={`flex-1 text-sm leading-snug ${isActive ? "text-primary font-medium" : "text-foreground/70"}`}>
                              {lesson.title}
                            </span>

                            <span className="text-xs text-foreground/40 flex-shrink-0">{lesson.duration}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
