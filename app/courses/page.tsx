import Link from "next/link";

const mockCourses = [
  {
    id: 1,
    title: "3ds Max Cơ Bản Đến Nâng Cao",
    description: "Khóa học toàn diện về 3ds Max từ A-Z, phù hợp cho người mới bắt đầu",
    duration: "40 giờ",
    lessons: 120,
    students: 450,
    price: "2.500.000đ",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Vray Rendering Mastery",
    description: "Làm chủ kỹ thuật render với Vray, tạo ra những hình ảnh siêu thực",
    duration: "25 giờ",
    lessons: 80,
    students: 320,
    price: "1.800.000đ",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "AutoCAD Thiết Kế Kiến Trúc",
    description: "Học AutoCAD chuyên sâu cho lĩnh vực kiến trúc và xây dựng",
    duration: "35 giờ",
    lessons: 100,
    students: 280,
    price: "2.000.000đ",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Corona Renderer Pro",
    description: "Nâng cao kỹ năng render với Corona Renderer, tips & tricks chuyên nghiệp",
    duration: "20 giờ",
    lessons: 60,
    students: 190,
    price: "1.500.000đ",
    level: "Advanced",
  },
];

const levelColor: Record<string, string> = {
  Beginner: "text-accent border-accent/40 bg-accent/10",
  Intermediate: "text-primary border-primary/40 bg-primary/10",
  Advanced: "text-orange-400 border-orange-400/40 bg-orange-400/10",
};

const courseImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
  2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  3: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
  4: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
};

export default function CoursesPage() {
  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a] via-background to-background pointer-events-none"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.07)_0%,transparent_60%)] pointer-events-none"/>
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none"/>

      <div className="container mx-auto px-4 py-12 relative z-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/25 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Đào tạo chuyên nghiệp</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Khóa Học Chuyên Nghiệp
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Học từ cơ bản đến nâng cao với các giảng viên giàu kinh nghiệm
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { value: "1,240+", label: "Học viên", color: "primary" },
            { value: "360+", label: "Bài học", color: "accent" },
            { value: "95%", label: "Hài lòng", color: "primary" },
          ].map((stat) => (
            <div key={stat.label} className="relative rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm p-6 text-center overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,212,255,0.06)_0%,transparent_70%)]`}/>
              <div className={`text-4xl font-bold mb-1.5 ${stat.color === "accent" ? "text-accent" : "text-primary"}`}>
                {stat.value}
              </div>
              <div className="text-sm text-foreground/55">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mockCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-400 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
            >
              <div className="flex">
                {/* Thumbnail */}
                <div className="relative w-[160px] flex-shrink-0 overflow-hidden">
                  <img
                    src={courseImages[course.id]}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60"/>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded border text-xs font-semibold ${levelColor[course.level]}`}>
                      {course.level}
                    </span>
                  </div>

                  <p className="text-foreground/55 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-foreground/45 mb-4">
                    <span className="flex items-center gap-1">⏱ {course.duration}</span>
                    <span className="flex items-center gap-1">📖 {course.lessons} bài</span>
                    <span className="flex items-center gap-1">👥 {course.students}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
                    <span className="text-xl font-bold text-accent">{course.price}</span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="px-4 py-2 bg-primary text-black text-xs font-bold rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                    >
                      Chi tiết →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10"/>
          <div className="absolute inset-0 border border-accent/25 rounded-2xl"/>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"/>
          <div className="relative p-8 text-center">
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs font-bold uppercase tracking-wide mb-4">
              Ưu đãi có hạn
            </div>
            <h2 className="text-2xl font-bold mb-3">
              🎁 Giảm <span className="text-accent">30%</span> cho khóa học đầu tiên
            </h2>
            <p className="text-foreground/60 text-sm mb-6 max-w-md mx-auto">
              Chỉ dành cho 20 học viên đầu tiên đăng ký trong tháng này. Đừng bỏ lỡ!
            </p>
            <div className="relative inline-block group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"/>
              <button className="relative px-8 py-3 bg-accent text-black font-bold rounded-xl text-sm hover:scale-[1.02] transition-transform">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
