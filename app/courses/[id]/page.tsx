"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const mockCourses: Record<string, {
  id: number; title: string; subtitle: string; description: string;
  instructor: string; duration: string; lessons: number; students: number;
  price: string; level: string; rating: number; image: string;
  includes: string[]; syllabus: { title: string; lessons: { title: string; duration: string }[] }[];
}> = {
  "1": {
    id: 1,
    title: "3ds Max Cơ Bản Đến Nâng Cao",
    subtitle: "Khóa học toàn diện về 3ds Max từ A-Z, phù hợp cho người mới bắt đầu",
    description: "Đây là khóa học 3ds Max đầy đủ nhất, đưa bạn từ con số 0 đến thành thạo phần mềm. Bạn sẽ học modeling, vật liệu, lighting và render để tạo ra những sản phẩm chuyên nghiệp.",
    instructor: "Tuấn Anh",
    duration: "40 giờ",
    lessons: 120,
    students: 450,
    price: "2.500.000đ",
    level: "Beginner",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    includes: ["120 bài giảng video HD", "File scene thực hành", "Chứng chỉ hoàn thành", "Hỗ trợ trọn đời", "Cập nhật miễn phí"],
    syllabus: [
      { title: "Module 1: Giới thiệu 3ds Max", lessons: [{ title: "Tổng quan giao diện", duration: "15:00" }, { title: "Cài đặt và cấu hình", duration: "12:30" }, { title: "Navigation cơ bản", duration: "18:00" }] },
      { title: "Module 2: Modeling cơ bản", lessons: [{ title: "Primitive Objects", duration: "20:00" }, { title: "Editable Poly", duration: "28:15" }, { title: "Modifiers Stack", duration: "22:40" }] },
      { title: "Module 3: Materials & Lighting", lessons: [{ title: "Material Editor", duration: "25:00" }, { title: "Vray Materials", duration: "30:10" }, { title: "Lighting Setup", duration: "24:00" }] },
      { title: "Module 4: Rendering & Output", lessons: [{ title: "Vray Settings", duration: "20:00" }, { title: "Post-production", duration: "18:30" }, { title: "Final Project", duration: "45:00" }] },
    ],
  },
  "2": {
    id: 2,
    title: "Vray Rendering Mastery",
    subtitle: "Làm chủ kỹ thuật render với Vray, tạo ra những hình ảnh siêu thực",
    description: "Khóa học chuyên sâu về Vray Renderer giúp bạn tạo ra những hình ảnh render chất lượng studio. Học cách setup lighting, vật liệu PBR và post-production hoàn chỉnh.",
    instructor: "Minh Khoa",
    duration: "25 giờ",
    lessons: 80,
    students: 320,
    price: "1.800.000đ",
    level: "Intermediate",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    includes: ["80 bài giảng video HD", "Scene files + assets", "Chứng chỉ hoàn thành", "Group hỗ trợ riêng", "Cập nhật miễn phí"],
    syllabus: [
      { title: "Module 1: Vray Core Concepts", lessons: [{ title: "Global Illumination", duration: "20:00" }, { title: "Vray Camera", duration: "15:30" }] },
      { title: "Module 2: Lighting Mastery", lessons: [{ title: "Interior Lighting", duration: "32:00" }, { title: "Exterior Lighting", duration: "28:00" }] },
      { title: "Module 3: Materials Pro", lessons: [{ title: "PBR Workflow", duration: "25:00" }, { title: "Glass & Metal", duration: "22:00" }] },
    ],
  },
  "3": {
    id: 3,
    title: "AutoCAD Thiết Kế Kiến Trúc",
    subtitle: "Học AutoCAD chuyên sâu cho lĩnh vực kiến trúc và xây dựng",
    description: "Khóa học AutoCAD dành riêng cho kiến trúc sư và kỹ sư xây dựng. Từ bản vẽ 2D đến mô hình 3D, bạn sẽ thành thạo công cụ thiết kế chuyên nghiệp nhất trong ngành.",
    instructor: "Nguyễn Hùng",
    duration: "35 giờ",
    lessons: 100,
    students: 280,
    price: "2.000.000đ",
    level: "Beginner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    includes: ["100 bài giảng video HD", "File bản vẽ mẫu", "Chứng chỉ hoàn thành", "Hỗ trợ trọn đời", "Template AutoCAD"],
    syllabus: [
      { title: "Module 1: AutoCAD Cơ bản", lessons: [{ title: "Giao diện AutoCAD", duration: "18:00" }, { title: "Lệnh cơ bản 2D", duration: "25:00" }] },
      { title: "Module 2: Bản vẽ kiến trúc", lessons: [{ title: "Mặt bằng kiến trúc", duration: "30:00" }, { title: "Mặt đứng & cắt", duration: "28:00" }] },
      { title: "Module 3: Layout & In ấn", lessons: [{ title: "Paper Space", duration: "20:00" }, { title: "Plot Settings", duration: "15:00" }] },
    ],
  },
  "4": {
    id: 4,
    title: "Corona Renderer Pro",
    subtitle: "Nâng cao kỹ năng render với Corona Renderer, tips & tricks chuyên nghiệp",
    description: "Khóa học Corona Renderer chuyên nghiệp giúp bạn làm chủ hoàn toàn workflow render nội thất. Từ setup scene đến LightMix và post-production với Photoshop.",
    instructor: "Tuấn Anh",
    duration: "20 giờ",
    lessons: 60,
    students: 190,
    price: "1.500.000đ",
    level: "Advanced",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
    includes: ["60 bài giảng video HD", "Corona scene files", "Chứng chỉ hoàn thành", "Group hỗ trợ riêng", "LightMix presets"],
    syllabus: [
      { title: "Module 1: Corona Setup", lessons: [{ title: "Corona vs Vray", duration: "12:00" }, { title: "Render Settings", duration: "18:00" }] },
      { title: "Module 2: Lighting & Materials", lessons: [{ title: "Corona Lights", duration: "22:00" }, { title: "Physical Material", duration: "28:00" }] },
      { title: "Module 3: Post-production", lessons: [{ title: "VFB & LightMix", duration: "20:00" }, { title: "Photoshop Workflow", duration: "35:00" }] },
    ],
  },
};

const levelColor: Record<string, string> = {
  Beginner: "text-accent border-accent/40 bg-accent/10",
  Intermediate: "text-primary border-primary/40 bg-primary/10",
  Advanced: "text-orange-400 border-orange-400/40 bg-orange-400/10",
};

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  if (!id) return null;

  const course = mockCourses[id] ?? mockCourses["1"];

  const toggleModule = (i: number) =>
    setExpandedModules((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  return (
    <div className="pt-20 min-h-screen bg-background">

      {/* Hero Banner */}
      <div className="relative h-[340px] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"/>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-foreground/50 mb-5">
              <Link href="/courses" className="hover:text-primary transition-colors">Khóa học</Link>
              <span>/</span>
              <span className="text-foreground/80">{course.title}</span>
            </div>
            <div className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold mb-3 ${levelColor[course.level]}`}>
              {course.level}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 max-w-2xl leading-snug">{course.title}</h1>
            <p className="text-foreground/70 max-w-xl text-sm leading-relaxed mb-4">{course.subtitle}</p>
            <div className="flex items-center gap-5 text-sm text-foreground/60">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-white font-semibold">{course.rating}</span>
              </span>
              <span>👨‍🏫 {course.instructor}</span>
              <span>📚 {course.lessons} bài học</span>
              <span>⏱ {course.duration}</span>
              <span>👥 {course.students} học viên</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          {/* Left */}
          <div className="space-y-8">

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold mb-3">Mô tả khóa học</h2>
              <p className="text-foreground/70 leading-relaxed text-sm">{course.description}</p>
            </div>

            {/* What you'll learn */}
            <div>
              <h2 className="text-lg font-bold mb-4">Bạn sẽ học được gì?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-foreground/70">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <h2 className="text-lg font-bold mb-4">Nội dung chương trình</h2>
              <div className="rounded-xl border border-white/10 overflow-hidden divide-y divide-white/8">
                {course.syllabus.map((chapter, i) => (
                  <div key={i}>
                    <button
                      onClick={() => toggleModule(i)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-surface/50 hover:bg-surface/80 transition-colors text-left"
                    >
                      <span className="font-semibold text-sm">{chapter.title}</span>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs text-foreground/40">{chapter.lessons.length} bài</span>
                        <svg className={`w-4 h-4 text-foreground/50 transition-transform ${expandedModules.includes(i) ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </button>
                    {expandedModules.includes(i) && (
                      <div className="divide-y divide-white/5">
                        {chapter.lessons.map((lesson, j) => (
                          <div key={j} className="flex items-center gap-3 px-5 py-3 bg-background/60 hover:bg-surface/30 transition-colors">
                            <svg className="w-4 h-4 text-foreground/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            <span className="flex-1 text-sm text-foreground/65">{lesson.title}</span>
                            <span className="text-xs text-foreground/40">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Purchase card */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-sm overflow-hidden">
              {/* Preview image */}
              <div className="relative h-44 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 border border-white/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-accent">{course.price}</span>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"/>
                  <Link
                    href={`/courses/${id}/learn`}
                    className="relative flex items-center justify-center gap-2 w-full py-3 bg-accent text-black font-bold rounded-xl text-sm hover:bg-accent/95 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Bắt đầu học ngay
                  </Link>
                </div>

                <div className="space-y-2.5 pt-1">
                  {[
                    { icon: "📚", text: `${course.lessons} bài giảng video HD` },
                    { icon: "⏱", text: `${course.duration} học tập` },
                    { icon: "♾️", text: "Truy cập trọn đời" },
                    { icon: "📱", text: "Học trên mọi thiết bị" },
                    { icon: "🏆", text: "Chứng chỉ hoàn thành" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 text-sm text-foreground/65">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                  <svg className="w-4 h-4 text-foreground/30" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs text-foreground/35">Thanh toán an toàn · Hoàn tiền 7 ngày</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
