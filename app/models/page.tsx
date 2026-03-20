"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mockModels = [
  { id: 1, title: "Modern Living Room", category: "Interior", renderer: "Vray", size: "150 MB", price: "FREE", isPro: false, likes: 12, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
  { id: 2, title: "Scandinavian Bedroom", category: "Interior", renderer: "Corona", size: "200 MB", price: "500k", isPro: true, likes: 8, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
  { id: 3, title: "Modern Kitchen", category: "Interior", renderer: "Vray", size: "180 MB", price: "FREE", isPro: false, likes: 5, image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80" },
  { id: 4, title: "Office Space", category: "Interior", renderer: "Corona", size: "220 MB", price: "500k", isPro: true, likes: 20, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: 5, title: "Dining Room Set", category: "Furniture", renderer: "Vray", size: "100 MB", price: "FREE", isPro: false, likes: 3, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" },
  { id: 6, title: "Luxury Bathroom", category: "Interior", renderer: "Corona", size: "190 MB", price: "500k", isPro: true, likes: 11, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80" },
  { id: 1, title: "Minimalist Living", category: "Interior", renderer: "Vray", size: "130 MB", price: "FREE", isPro: false, likes: 7, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { id: 2, title: "Modern Apartment", category: "Interior", renderer: "Corona", size: "170 MB", price: "500k", isPro: true, likes: 16, image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&q=80" },
  { id: 3, title: "Cozy Bedroom", category: "Interior", renderer: "Vray", size: "145 MB", price: "FREE", isPro: false, likes: 4, image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80" },
  { id: 4, title: "Studio Apartment", category: "Interior", renderer: "Corona", size: "210 MB", price: "500k", isPro: true, likes: 9, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
];

const categories = [
  { name: "Pendant light", icon: "💡", count: 250 },
  { name: "Sofa", icon: "🛋️", count: 180 },
  { name: "Arm chair", icon: "🪑", count: 320 },
  { name: "Chair", icon: "💺", count: 420 },
  { name: "Table", icon: "🪑", count: 290 },
  { name: "Wardrobe", icon: "🚪", count: 150 },
  { name: "Bed", icon: "🛏️", count: 380 },
  { name: "Table + Chair", icon: "🍽️", count: 210 },
  { name: "Wall light", icon: "💡", count: 160 },
];

const sidebarCategories = [
  "Architecture", "Bathroom", "Childroom", "Decoration",
  "Furniture", "Kitchen", "Lighting", "Materials",
  "Other Models", "Plants", "Scripts", "Technology",
  "Textures", "Transport",
];

const popularTags = ["sofa", "living", "bedroom", "chair", "table", "lamp", "kitchen", "interior", "modern", "wood"];

export default function ModelsPage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchMode, setSearchMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeRender, setActiveRender] = useState<string[]>([]);
  const [activeFormat, setActiveFormat] = useState<string[]>([]);
  const [activeStyle, setActiveStyle] = useState<string[]>([]);
  const [proFilter, setProFilter] = useState<"all" | "pro" | "free">("all");

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % 3);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + 3) % 3);

  const enterSearch = (cat?: string) => {
    setSearchMode(true);
    if (cat) setActiveCategory(cat);
  };

  const clearAll = () => {
    setActiveCategory(null);
    setActiveRender([]);
    setActiveFormat([]);
    setActiveStyle([]);
    setProFilter("all");
  };

  const toggleArr = (arr: string[], val: string, set: (v: string[]) => void) =>
    arr.includes(val) ? set(arr.filter((x) => x !== val)) : set([...arr, val]);

  const hasFilters = activeCategory || activeRender.length || activeFormat.length || activeStyle.length || proFilter !== "all";

  /* ─── SEARCH / BROWSE LAYOUT ─── */
  if (searchMode) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        {/* Top bar */}
        <div className="border-b border-white/10 bg-surface/30">
          <div className="container mx-auto px-4 py-3 flex items-center gap-4">
            <button onClick={() => { setSearchMode(false); clearAll(); }} className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              Quay lại
            </button>
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Tìm kiếm models..."
                className="w-full px-4 py-2 pr-10 bg-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-sm"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 flex gap-6">

          {/* ── LEFT SIDEBAR ── */}
          <aside className="hidden lg:block w-[200px] flex-shrink-0 space-y-6">
            {/* Categories */}
            <div>
              {sidebarCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`w-full text-left px-2 py-1.5 text-sm rounded flex items-center justify-between group transition-colors ${activeCategory === cat ? "text-primary font-semibold" : "text-foreground/65 hover:text-foreground"}`}
                >
                  <span>{cat}</span>
                  <svg className="w-3 h-3 opacity-40 group-hover:opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              ))}
            </div>

            {/* Popular tags */}
            <div>
              <div className="flex flex-wrap gap-1.5">
                {popularTags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs rounded-full border border-white/10 text-foreground/50 bg-surface/60 hover:border-primary/50 hover:text-primary cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">Style</h4>
              {["Classic", "Modern", "Ethnic"].map((s) => (
                <label key={s} className="flex items-center gap-2.5 py-1 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeStyle.includes(s)}
                    onChange={() => toggleArr(activeStyle, s, setActiveStyle)}
                    className="w-4 h-4 rounded border border-white/20 bg-surface accent-primary cursor-pointer"
                  />
                  <span className={`text-sm ${activeStyle.includes(s) ? "text-primary" : "text-foreground/65 group-hover:text-foreground"}`}>{s}</span>
                </label>
              ))}
            </div>

            {/* Render */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">Render</h4>
              {[
                { name: "Vray", color: "bg-blue-500" },
                { name: "Corona", color: "bg-orange-500" },
                { name: "Standard", color: "bg-white/40" },
              ].map((r) => (
                <label key={r.name} className="flex items-center gap-2.5 py-1 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeRender.includes(r.name)}
                    onChange={() => toggleArr(activeRender, r.name, setActiveRender)}
                    className="w-4 h-4 rounded border border-white/20 bg-surface accent-primary cursor-pointer"
                  />
                  <span className={`w-3 h-3 rounded-full ${r.color}`}/>
                  <span className={`text-sm ${activeRender.includes(r.name) ? "text-primary" : "text-foreground/65 group-hover:text-foreground"}`}>{r.name}</span>
                </label>
              ))}
            </div>

            {/* Format */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">Format</h4>
              {[".obj", ".fbx", ".max", ".blend"].map((f) => (
                <button
                  key={f}
                  onClick={() => toggleArr(activeFormat, f, setActiveFormat)}
                  className={`inline-flex items-center px-3 py-1 mr-1.5 mb-1.5 rounded border text-xs font-mono transition-all ${activeFormat.includes(f) ? "border-primary bg-primary/15 text-primary" : "border-white/15 text-foreground/50 hover:border-white/30"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">
            {/* Filter bar */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <button
                onClick={() => setProFilter(proFilter === "pro" ? "all" : "pro")}
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${proFilter === "pro" ? "bg-primary text-black" : "bg-surface border border-white/10 hover:border-white/30 text-foreground/70"}`}
              >
                PRO
              </button>
              <button
                onClick={() => setProFilter(proFilter === "free" ? "all" : "free")}
                className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${proFilter === "free" ? "bg-accent text-black" : "bg-surface border border-white/10 hover:border-white/30 text-foreground/70"}`}
              >
                FREE
              </button>
              <div className="flex items-center gap-2 text-sm text-foreground/50">
                <input type="checkbox" id="manufacturer" className="accent-primary"/>
                <label htmlFor="manufacturer">From manufacturers</label>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <select className="px-3 py-2 bg-surface border border-white/10 rounded-lg text-sm focus:border-primary focus:outline-none text-foreground/70">
                  <option>Newest</option>
                  <option>Most liked</option>
                  <option>Most downloaded</option>
                </select>
              </div>
            </div>

            {/* Active filters */}
            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {activeCategory && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/40 text-primary text-xs rounded-full">
                    {activeCategory}
                    <button onClick={() => setActiveCategory(null)} className="hover:text-white">×</button>
                  </span>
                )}
                {activeRender.map((r) => (
                  <span key={r} className="flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/40 text-primary text-xs rounded-full">
                    {r}<button onClick={() => toggleArr(activeRender, r, setActiveRender)} className="hover:text-white">×</button>
                  </span>
                ))}
                {activeFormat.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/40 text-primary text-xs rounded-full font-mono">
                    {f}<button onClick={() => toggleArr(activeFormat, f, setActiveFormat)} className="hover:text-white">×</button>
                  </span>
                ))}
                <button onClick={clearAll} className="text-xs text-primary hover:underline ml-1">Clear filters</button>
              </div>
            )}

            {/* Count */}
            <p className="text-sm text-foreground/40 mb-5">{mockModels.length * 47}23 models found</p>

            {/* Grid — 5 cols like 3dsky */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mockModels.map((model, i) => (
                <Link key={i} href={`/models/${model.id}`} className="group">
                  <div className="rounded-xl overflow-hidden border border-white/8 hover:border-primary/50 transition-all bg-surface/30">
                    <div className="relative aspect-square overflow-hidden bg-surface">
                      <img
                        src={model.image}
                        alt={model.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {model.isPro && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-accent text-black text-[10px] font-bold rounded">PRO</div>
                      )}
                    </div>
                    <div className="p-2.5">
                      <h3 className="text-xs font-medium line-clamp-1 group-hover:text-primary transition-colors mb-1">
                        {model.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-foreground/40">
                        {model.isPro && <span className="text-accent font-bold">PRO</span>}
                        <span className="flex items-center gap-0.5">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/></svg>
                          {model.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1.5 mt-10">
              <button className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all text-foreground/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              {[1,2,3,4,5].map((p) => (
                <button key={p} className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${p === 1 ? "bg-primary text-black" : "border border-white/10 text-foreground/60 hover:border-primary"}`}>{p}</button>
              ))}
              <button className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-all text-foreground/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── DEFAULT LANDING LAYOUT ─── */
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#08111f] to-[#0d1a2e]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/sample-banner.png" alt="Banner" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent/8 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-10 sm:py-14 md:py-0 md:h-[380px] md:flex md:items-center">
          <div className="max-w-xl space-y-4">
            <h1 className="font-black leading-[1.1]">
              <span className="block text-2xl sm:text-3xl md:text-4xl text-foreground/80">Mua</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-primary">CREDITS TRƯỚC,</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-foreground/80">
                lấy models <span className="text-accent text-4xl sm:text-5xl md:text-6xl">SAU</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-foreground/65">Cách đơn giản để có được models bạn cần</p>
            <div className="flex items-center gap-4 pt-1">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-xl text-sm sm:text-base">
                Mua credits ngay
              </button>
              {/* Dots — inline on mobile to avoid overlap with arrows */}
              <div className="flex gap-2 sm:hidden">
                {[0,1,2].map((i) => (
                  <button key={i} onClick={() => setCurrentBanner(i)} className={`h-2 rounded-full transition-all ${currentBanner === i ? "bg-primary w-6" : "bg-white/30 w-2"}`}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nav arrows — hidden on mobile to avoid overlapping text */}
        <button onClick={prevBanner} className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center hover:bg-white/20 transition-all z-20">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={nextBanner} className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center hover:bg-white/20 transition-all z-20">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Dots — desktop */}
        <div className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 gap-2 z-20">
          {[0,1,2].map((i) => (
            <button key={i} onClick={() => setCurrentBanner(i)} className={`h-2 rounded-full transition-all ${currentBanner === i ? "bg-primary w-8" : "bg-white/30 w-2"}`}/>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-surface/30 py-8 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Tìm kiếm models theo tên, danh mục, phần mềm..."
              onFocus={() => enterSearch()}
              className="w-full px-6 py-4 pr-14 bg-surface border-2 border-white/10 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg cursor-pointer"
              readOnly
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-all">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="bg-background py-6 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center scrollbar-hide">
            {[
              { icon: "🆓", label: "FREE 3D models" },
              { icon: "📦", label: "FBX + 3ds Max" },
              { icon: "🎯", label: "OBJ + 3ds Max" },
              { icon: "☀️", label: "Corona" },
              { icon: "⚡", label: "V-Ray" },
              { icon: "🔥", label: "Best selling" },
              { icon: "📚", label: "Collections" },
            ].map((filter, index) => (
              <button
                key={index}
                onClick={() => enterSearch(filter.label)}
                className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 glassmorphism rounded-full hover:border-primary transition-all group flex items-center gap-1.5 sm:gap-2"
              >
                <span className="text-lg sm:text-xl group-hover:scale-125 transition-transform">{filter.icon}</span>
                <span className="font-medium text-sm sm:text-base whitespace-nowrap">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-14 bg-surface/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Get fresh 3D models daily
          </h2>

          {/* Model image grid */}
          <div className="grid grid-cols-6 gap-2 mb-4">
            {[
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80",
              "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&q=80",
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&q=80",
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=300&q=80",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80",
              "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=300&q=80",
              "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=300&q=80",
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80",
              "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&q=80",
              "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=300&q=80",
              "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=300&q=80",
            ].map((img, i) => (
              <button key={i} onClick={() => enterSearch()} className="group">
                <div className="aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/8 hover:border-primary/50 transition-all">
                  <img src={img} alt={`model-${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
              </button>
            ))}
          </div>

          {/* Category tag bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => enterSearch(cat.name)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-surface/60 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all text-sm text-foreground/70 whitespace-nowrap"
              >
                <span className="text-base">{cat.icon}</span>
                <span className="font-medium">{cat.name}</span>
              </button>
            ))}
            <button className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-surface/60 flex items-center justify-center hover:border-primary/60 transition-all text-foreground/50 hover:text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Đã xem gần đây */}
      <section className="py-14 bg-background border-t border-white/8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Đã xem gần đây</h2>
            <button className="text-sm text-primary hover:underline">Xóa lịch sử</button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3">
            {[
              { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&q=80", title: "Modern Living Room", isPro: true },
              { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&q=80", title: "Scandinavian Bedroom", isPro: false },
              { img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=200&q=80", title: "Modern Kitchen", isPro: true },
              { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&q=80", title: "Office Space", isPro: true },
              { img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=200&q=80", title: "Dining Room", isPro: false },
              { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&q=80", title: "Luxury Bathroom", isPro: true },
              { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&q=80", title: "Minimalist Living", isPro: false },
              { img: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=200&q=80", title: "Modern Apartment", isPro: true },
              { img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=200&q=80", title: "Cozy Bedroom", isPro: false },
              { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80", title: "Studio Apartment", isPro: true },
            ].map((item, i) => (
              <Link key={i} href="/models/1" className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/8 hover:border-primary/50 transition-all bg-surface/30">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  {item.isPro && (
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-accent text-black text-[9px] font-bold rounded">PRO</div>
                  )}
                </div>
                <p className="text-[10px] text-foreground/50 mt-1 line-clamp-1 group-hover:text-primary transition-colors">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tại sao chọn Xoi Studio */}
      <section className="py-16 bg-surface/10 border-t border-white/8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Models 3D cho Diễn Họa Kiến Trúc</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-1 rounded-2xl border border-white/10 bg-surface/50 p-6 flex flex-col justify-between relative overflow-hidden min-h-[240px]">
              <div>
                <h3 className="text-lg font-bold mb-3">Chất lượng chuyên nghiệp</h3>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-[200px]">
                  Mỗi model được tối ưu cho sử dụng thực tế: topology sạch, tỷ lệ chính xác, geometry phù hợp cho render và visualization.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-black text-primary">5</span>
                <span className="text-sm text-foreground/50 ml-2">năm kinh nghiệm</span>
              </div>
              <div className="absolute right-4 bottom-4 opacity-15 text-7xl select-none pointer-events-none">🪑</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface/30 p-6 flex flex-col justify-between min-h-[240px]">
              <div>
                <h3 className="text-lg font-bold mb-3">Tiết kiệm thời gian</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Bộ lọc thông minh giúp bạn nhanh chóng tìm và tải đúng model 3D cần thiết, tập trung vào công việc thay vì mất thời gian tìm kiếm.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-primary">500+</span>
                  <span className="text-sm text-foreground/50">models trong kho</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-accent">9+</span>
                  <span className="text-sm text-foreground/50">danh mục</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1a1a2e] border border-primary/20 p-6 flex flex-col justify-between min-h-[240px]">
              <div>
                <h3 className="text-lg font-bold mb-2">Models cho 3ds Max</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Tất cả tài nguyên đều ở định dạng 3ds Max, sẵn sàng render với V-Ray hoặc Corona ngay lập tức.
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">No.1</span>
                  <span className="text-xs text-foreground/50 leading-tight">Thư viện 3D<br/>cho kiến trúc sư</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-4 py-3 bg-accent/90 rounded-xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-black">50+</span>
                  <span className="text-xs text-black/70 font-medium">model mới mỗi tháng</span>
                </div>
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bài viết hữu ích */}
      <section className="py-16 bg-background border-t border-white/8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Bài Viết Hữu Ích</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80", tag: "TOP LIST", tagColor: "bg-primary text-black", title: "Top models bán chạy nhất tháng 1", overlay: "Models và danh mục được mua nhiều nhất tháng 1", overlayColor: "from-primary/80" },
              { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80", tag: "KẾT QUẢ", tagColor: "bg-red-500 text-white", title: 'Kết quả cuộc thi "Bàn ăn đôi"', overlay: 'Cuộc thi 3D "Bàn ăn đôi" · Valentine 2026', overlayColor: "from-black/80" },
              { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80", tag: "SỰ KIỆN", tagColor: "bg-accent text-black", title: "Thi thiết kế nội thất Valentine 2026", overlay: "Bàn ăn đôi · Cuộc thi Valentine's Day", overlayColor: "from-black/80" },
              { img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80", tag: "TIN TỨC", tagColor: "bg-purple-500 text-white", title: "3 cập nhật mới cho tác giả model cần biết", overlay: "3 cập nhật quan trọng dành cho tác giả 3D", overlayColor: "from-purple-900/80" },
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.overlayColor} to-transparent`}/>
                  <div className="absolute inset-0 p-3 flex flex-col justify-between">
                    <span className={`self-start px-2 py-0.5 text-[10px] font-bold rounded ${article.tagColor}`}>{article.tag}</span>
                    <p className="text-white font-bold text-sm leading-snug line-clamp-3">{article.overlay}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{article.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
