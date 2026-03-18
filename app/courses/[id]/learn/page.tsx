"use client";

import { useState } from "react";

const mockSyllabus = [
  {
    id: 1,
    title: "Giới thiệu khóa học",
    lessons: [
      { id: 1, title: "Chào mừng đến với khóa học", duration: "5:30", isUnlocked: true },
      { id: 2, title: "Cài đặt phần mềm", duration: "12:15", isUnlocked: true },
      { id: 3, title: "Giao diện 3ds Max", duration: "18:40", isUnlocked: true },
    ],
  },
  {
    id: 2,
    title: "Modeling cơ bản",
    lessons: [
      { id: 4, title: "Primitive Objects", duration: "15:20", isUnlocked: true },
      { id: 5, title: "Editable Poly", duration: "22:30", isUnlocked: true },
      { id: 6, title: "Modifiers", duration: "20:10", isUnlocked: false },
    ],
  },
  {
    id: 3,
    title: "Materials & Textures",
    lessons: [
      { id: 7, title: "Material Editor", duration: "18:00", isUnlocked: false },
      { id: 8, title: "UV Mapping", duration: "25:45", isUnlocked: false },
      { id: 9, title: "PBR Materials", duration: "30:20", isUnlocked: false },
    ],
  },
  {
    id: 4,
    title: "Lighting & Rendering",
    lessons: [
      { id: 10, title: "Lighting Basics", duration: "20:00", isUnlocked: false },
      { id: 11, title: "Vray Settings", duration: "28:30", isUnlocked: false },
      { id: 12, title: "Final Render", duration: "35:15", isUnlocked: false },
    ],
  },
];

export default function LearnPage() {
  const [activeLesson, setActiveLesson] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "files" | "contact">("description");

  return (
    <div className="pt-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Main Player - Left */}
        <div className="lg:col-span-3 bg-black">
          <div className="sticky top-20">
            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {/* Placeholder for video player */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center hover:bg-primary/30 transition-all group">
                  <svg
                    className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Lesson Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-xl font-semibold text-white">
                  Bài {activeLesson}: Chào mừng đến với khóa học
                </h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-surface border-t border-white/10">
              <div className="flex border-b border-white/10">
                {[
                  { key: "description", label: "Mô tả" },
                  { key: "files", label: "Tài liệu" },
                  { key: "contact", label: "Liên hệ" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`px-6 py-4 font-medium transition-all ${
                      activeTab === tab.key
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "description" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">
                      Về bài học này
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Trong bài học này, bạn sẽ được làm quen với giao diện 3ds Max,
                      các công cụ cơ bản và workflow làm việc hiệu quả. Đây là nền tảng
                      quan trọng để bạn có thể tiếp tục học các bài học nâng cao hơn.
                    </p>
                    <div className="glassmorphism rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Những gì bạn sẽ học:</h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Tổng quan về giao diện 3ds Max</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Navigation và viewport controls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Tùy chỉnh workspace theo workflow cá nhân</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Shortcuts và tips để làm việc nhanh hơn</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "files" && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Tài liệu bài học
                    </h3>
                    {[
                      { name: "Lesson_01_Intro.pdf", size: "2.5 MB" },
                      { name: "3dsMax_Shortcuts.pdf", size: "1.2 MB" },
                      { name: "Exercise_Files.zip", size: "15 MB" },
                    ].map((file, index) => (
                      <div
                        key={index}
                        className="glassmorphism rounded-lg p-4 flex items-center justify-between hover:border-primary transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <span className="text-xl">📄</span>
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-xs text-foreground/60">{file.size}</div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-black transition-all">
                          Tải xuống
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "contact" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Liên hệ hỗ trợ
                    </h3>
                    <div className="glassmorphism rounded-lg p-6 space-y-4">
                      <p className="text-foreground/80">
                        Nếu bạn có bất kỳ câu hỏi nào về khóa học, đừng ngần ngại liên hệ với chúng tôi:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📧</span>
                          <div>
                            <div className="text-sm text-foreground/60">Email</div>
                            <div className="font-medium">support@xoistudio.com</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💬</span>
                          <div>
                            <div className="text-sm text-foreground/60">Telegram</div>
                            <div className="font-medium">@xoistudio</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📱</span>
                          <div>
                            <div className="text-sm text-foreground/60">Hotline</div>
                            <div className="font-medium">0123 456 789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus Sidebar - Right */}
        <div className="lg:col-span-1 bg-surface border-l border-white/10">
          <div className="sticky top-20 max-h-screen overflow-y-auto">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-lg font-semibold text-primary">Nội dung khóa học</h2>
              <p className="text-sm text-foreground/60 mt-1">12 bài học • 4h 30m</p>
            </div>

            <div className="divide-y divide-white/10">
              {mockSyllabus.map((chapter) => (
                <div key={chapter.id}>
                  <div className="p-4 bg-surface/50">
                    <h3 className="font-semibold text-sm">{chapter.title}</h3>
                  </div>

                  <div>
                    {chapter.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => lesson.isUnlocked && setActiveLesson(lesson.id)}
                        className={`w-full p-4 flex items-start gap-3 hover:bg-surface/50 transition-all ${
                          activeLesson === lesson.id ? "bg-primary/10 border-l-2 border-primary" : ""
                        } ${!lesson.isUnlocked ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!lesson.isUnlocked}
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          {lesson.isUnlocked ? (
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-primary"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-foreground/40"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium line-clamp-2">
                            {lesson.title}
                          </div>
                          <div className="text-xs text-foreground/60 mt-1">
                            {lesson.duration}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
