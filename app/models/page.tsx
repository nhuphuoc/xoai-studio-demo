"use client";

import { useState } from "react";
import Link from "next/link";

const mockModels = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Interior",
    software: "3ds Max",
    renderer: "Vray",
    size: "150 MB",
    price: "FREE",
    isPro: false,
  },
  {
    id: 2,
    title: "Scandinavian Bedroom",
    category: "Interior",
    software: "3ds Max",
    renderer: "Corona",
    size: "200 MB",
    price: "500k",
    isPro: true,
  },
  {
    id: 3,
    title: "Modern Kitchen",
    category: "Interior",
    software: "3ds Max",
    renderer: "Vray",
    size: "180 MB",
    price: "FREE",
    isPro: false,
  },
  {
    id: 4,
    title: "Office Space",
    category: "Interior",
    software: "3ds Max",
    renderer: "Corona",
    size: "220 MB",
    price: "500k",
    isPro: true,
  },
  {
    id: 5,
    title: "Dining Room Set",
    category: "Furniture",
    software: "3ds Max",
    renderer: "Vray",
    size: "100 MB",
    price: "FREE",
    isPro: false,
  },
  {
    id: 6,
    title: "Luxury Bathroom",
    category: "Interior",
    software: "3ds Max",
    renderer: "Corona",
    size: "190 MB",
    price: "500k",
    isPro: true,
  },
];

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Thư Viện 3D Models
          </h1>
          <p className="text-foreground/70">
            Khám phá và tải xuống các mô hình 3D chất lượng cao
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="glassmorphism rounded-lg p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Tìm kiếm
                </h3>
                <input
                  type="text"
                  placeholder="Tìm model..."
                  className="w-full px-4 py-2 bg-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Danh mục
                </h3>
                <div className="space-y-2">
                  {["all", "Interior", "Furniture", "Lighting", "Nature"].map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">
                        {category === "all" ? "Tất cả" : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Loại
                </h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "Tất cả" },
                    { value: "free", label: "Miễn phí" },
                    { value: "pro", label: "Pro" },
                  ].map((type) => (
                    <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={type.value}
                        checked={selectedType === type.value}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Phần mềm
                </h3>
                <div className="space-y-2">
                  {["3ds Max", "AutoCAD", "Blender"].map((software) => (
                    <label key={software} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{software}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Models Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockModels.map((model) => (
                <Link
                  key={model.id}
                  href={`/models/${model.id}`}
                  className="group glassmorphism rounded-lg overflow-hidden hover:border-accent transition-all duration-300"
                >
                  {/* Model Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                      🏠
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-primary font-semibold">Xem chi tiết</span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 text-black text-xs font-bold rounded-full ${
                          model.isPro ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {model.price}
                      </span>
                    </div>
                  </div>

                  {/* Model Info */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                      {model.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <div className="flex items-center gap-2">
                        <span>🎨 {model.renderer}</span>
                      </div>
                      <span>📦 {model.size}</span>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <span className="text-xs text-foreground/50">
                        {model.category} • {model.software}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
