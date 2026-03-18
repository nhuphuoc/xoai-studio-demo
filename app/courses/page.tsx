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

export default function CoursesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Khóa Học Chuyên Nghiệp
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Học từ cơ bản đến nâng cao với các giảng viên giàu kinh nghiệm
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">1,240+</div>
            <div className="text-foreground/70">Học viên</div>
          </div>
          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">360+</div>
            <div className="text-foreground/70">Bài học</div>
          </div>
          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-foreground/70">Hài lòng</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCourses.map((course) => (
            <div
              key={course.id}
              className="glassmorphism rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Thumbnail */}
                <div className="md:col-span-1 aspect-square md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    📚
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                        {course.level}
                      </span>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 text-xs text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>📖</span>
                        <span>{course.lessons} bài</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👥</span>
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-2xl font-bold text-accent">
                      {course.price}
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:neon-glow-blue transition-all duration-300"
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-12 glassmorphism rounded-xl p-8 neon-glow-green text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-accent mb-4">
              🎁 Ưu đãi đặc biệt
            </h2>
            <p className="text-lg text-foreground/90 mb-6">
              Đăng ký ngay hôm nay để nhận <strong className="text-accent">giảm 30%</strong> cho
              khóa học đầu tiên. Chỉ dành cho 20 học viên đầu tiên!
            </p>
            <button className="px-8 py-3 bg-accent text-black font-bold rounded-lg hover:scale-105 transition-all duration-300">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
