// src/pages/Modules.jsx
import React, { useState, useEffect, useMemo } from "react";

const SAMPLE_COURSES = [
  {
    id: "1",
    name: "Front End Engineering with HTML & CSS",
    description:
      "Master the art of building interactive, responsive, and visually stunning websites with HTML,CSS                                  ",
    price: 0,
    chapters: 11,
    category: "web-development",
    color: "#5B8DEE",
    isPremium: true,
  },
  {
    id: "2",
    name: "Core Java Programming Fundamentals",
    description:
      "Dive into the fundamentals of Java programming. Learn essential concepts like OOP, inheritance",
      
    price: 249,
    chapters: 2,
    category: "programming",
    color: "#1AACAC",
    isPremium: true,
  },
  {
    id: "3",
    name: "Object Oriented Software Engineering",
    description:
      "Explore the principles of object-oriented software engineering, from design patterns and design.",
    price: 150,
    chapters: 59,
    category: "engineering",
    color: "#9B59E8",
    isPremium: true,
  },
  {
    id: "4",
    name: "Object Oriented Programming using C++",
    description:
      "Master OOP using C++. Learn about classes, objects, inheritance, polymorphism, and advanced .",
    price: 349,
    chapters: 25,
    category: "programming",
    color: "#1AACAC",
    isPremium: true,
  },
  {
    id: "5",
    name: "Database Management System",
    description:
      "Learn DBMS fundamentals: data models, SQL, normalization, transactions, and query.",
    price: 1299,
    chapters: 45,
    category: "database",
    color: "#9B59E8",
    isPremium: true,
  },
  {
    id: "7",
    name: "Python Programming Advanced",
    description:
      "Learn Python from basics to advanced topics including data structures, algorithms.",
    price: 799,
    chapters: 40,
    category: "programming",
    color: "#E67E22",
    isPremium: true,
  },
  {
    id: "8",
    name: "Calculus and Its Applications",
    description:
      "Master limits, derivatives, integrals and applications in a structured way.",
    price: 499,
    chapters: 30,
    category: "mathematics",
    color: "#E74C3C",
    isPremium: true,
  },
  {
    id: "9",
    name: "Object-Oriented Programming",
    description:
      "Learn encapsulation, inheritance, polymorphism, abstraction with practical.",
    price: 450,
    chapters: 28,
    category: "programming",
    color: "#5B8DEE",
    isPremium: true,
  },
];

export default function Modules() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState(1500);
  const [favorites, setFavorites] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("prepx_favorite_courses");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem(
      "prepx_favorite_courses",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setSortBy("default");
    setPriceRange(1500);
  };

  // Filter + sort
  const filteredCourses = useMemo(() => {
    let list = SAMPLE_COURSES.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        category === "all" || course.category === category;

      const matchesPrice = course.price <= priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === "price-low") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === "chapters-low") {
      list = [...list].sort((a, b) => a.chapters - b.chapters);
    } else if (sortBy === "chapters-high") {
      list = [...list].sort((a, b) => b.chapters - a.chapters);
    }

    return list;
  }, [searchQuery, category, sortBy, priceRange]);

  const openDetails = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeDetails = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = (course) => {
    // you can replace with toast if you want
    alert(`Enrolled in ${course.name}`);
  };

  return (
    <div className="modules-page">
      <div className="modules-inner">
        {/* Page heading */}
        <header className="modules-hero">
          <h1>Explore Courses</h1>
          <p>
            Discover industry-leading courses designed to boost your skills
            and accelerate your career.
          </p>
        </header>

        {/* Filters row */}
        <section className="filters-card">
          <div className="filters-row">
            <div className="filters-item filters-full">
              <span className="filters-label">Search</span>
              <div className="filters-input-wrapper">
                <span className="filters-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="filters-row">
            <div className="filters-item">
              <span className="filters-label">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="web-development">Web Development</option>
                <option value="programming">Programming</option>
                <option value="engineering">Engineering</option>
                <option value="database">Database</option>
                <option value="mathematics">Mathematics</option>
              </select>
            </div>

            <div className="filters-item">
              <span className="filters-label">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="chapters-low">Chapters: Few to Many</option>
                <option value="chapters-high">Chapters: Many to Few</option>
              </select>
            </div>

            <div className="filters-item">
              <span className="filters-label">
                Max Price <strong>₹{priceRange}</strong>
              </span>
              <input
                type="range"
                min="0"
                max="1500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>

            <div className="filters-item">
              <span className="filters-label">&nbsp;</span>
              <button className="clear-btn" onClick={clearFilters}>
                ✕ Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Count */}
        <p className="modules-count">
          Showing <span>{filteredCourses.length}</span> course
          {filteredCourses.length !== 1 && "s"}
        </p>

        {/* Cards grid */}
        {filteredCourses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No courses found</h3>
            <p>Try adjusting search or filters.</p>
          </div>
        ) : (
          <section className="courses-grid">
            {filteredCourses.map((course) => {
              const isFav = favorites.includes(course.id);
              return (
                <article
                  key={course.id}
                  className="course-card"
                >
                  <div
                    className="course-card-top"
                    style={{ backgroundColor: course.color }}
                  >
                    <div className="course-card-icon">📖</div>
                    <button
                      className="fav-btn"
                      onClick={() => toggleFavorite(course.id)}
                    >
                      <span
                        style={{
                          color: isFav ? "#ff4b8b" : "white",
                        }}
                      >
                        {isFav ? "♥" : "♡"}
                      </span>
                    </button>
                    <h2>{course.name}</h2>
                    {course.isPremium && (
                      <span className="badge-premium">PREMIUM</span>
                    )}
                  </div>

                  <div className="course-card-body">
                    <p className="course-desc">{course.description}</p>
                    <div className="course-meta">
                      <span>📚 {course.chapters} Chapters</span>
                      <span>
                        ₹{course.price}
                      </span>
                    </div>
                    <div className="course-actions">
                      {course.price === 0 ? (
                        <button
                          className="btn-access"
                          onClick={() => handleEnroll(course)}
                        >
                          ACCESS COURSE
                        </button>
                      ) : (
                        <button
                          className="btn-details"
                          onClick={() => openDetails(course)}
                        >
                          SEE DETAILS
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div className="modal-backdrop" onClick={closeDetails}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="modal-header">
              <h2>{selectedCourse.name}</h2>
              <button className="modal-close" onClick={closeDetails}>
                ✕
              </button>
            </header>

            <div className="modal-tags">
              <span>{selectedCourse.chapters} Chapters</span>
              <span>₹{selectedCourse.price}</span>
              <span>General</span>
            </div>

            <p className="modal-description">
              {selectedCourse.description}
            </p>

            <h3 className="modal-subtitle">What you'll learn:</h3>
            <ul className="modal-list">
              <li>Comprehensive course materials</li>
              <li>Hands-on projects</li>
              <li>Expert instructor guidance</li>
              <li>Certificate of completion</li>
              <li>Lifetime access to resources</li>
            </ul>

            <div className="modal-footer">
              <button
                className={
                  favorites.includes(selectedCourse.id)
                    ? "modal-fav-btn active"
                    : "modal-fav-btn"
                }
                onClick={() => toggleFavorite(selectedCourse.id)}
              >
                {favorites.includes(selectedCourse.id)
                  ? "♥ REMOVE FROM FAVORITES"
                  : "♡ ADD TO FAVORITES"}
              </button>

              <button
                className="modal-enroll-btn"
                onClick={() => handleEnroll(selectedCourse)}
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple page styles – scoped to this component */}
      <style>{`
        .modules-page {
          min-height: 100vh;
          padding: 96px 24px 32px;
          background: #050816;
          color: #f9fafb;
        }
        .modules-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .modules-hero {
          text-align: center;
          margin-bottom: 32px;
        }
        .modules-hero h1 {
          font-size: clamp(2.5rem, 4vw, 3.25rem);
          font-weight: 800;
          color: #c084fc;
          margin-bottom: 8px;
        }
        .modules-hero p {
          max-width: 620px;
          margin: 0 auto;
          color: rgba(249, 250, 251, 0.7);
          font-size: 1rem;
        }
        .filters-card {
          background: #050816;
          border-radius: 16px;
          padding: 16px 20px 20px;
          border: 1px solid rgba(148, 163, 184, 0.25);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
          margin-bottom: 20px;
        }
        .filters-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .filters-item {
          flex: 1;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .filters-full {
          flex-basis: 100%;
        }
        .filters-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(148, 163, 184, 0.9);
        }
        .filters-input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.4);
        }
        .filters-input-wrapper input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: #f9fafb;
        }
        .filters-input-wrapper input::placeholder {
          color: rgba(148, 163, 184, 0.7);
        }
        .filters-icon {
          opacity: 0.8;
        }
        select {
          background: rgba(15, 23, 42, 0.9);
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.4);
          padding: 10px 14px;
          color: #f9fafb;
          outline: none;
        }
        select option {
          color: #0f172a;
        }
        input[type="range"] {
          width: 100%;
          accent-color: #a855f7;
        }
        .clear-btn {
          border-radius: 999px;
          padding: 10px 14px;
          border: none;
          background: rgba(148, 163, 184, 0.15);
          color: rgba(249, 250, 251, 0.9);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .clear-btn:hover {
          background: rgba(148, 163, 184, 0.3);
        }
        .modules-count {
          margin-bottom: 12px;
          color: rgba(148, 163, 184, 0.9);
          font-size: 0.9rem;
        }
        .modules-count span {
          color: #a855f7;
          font-weight: 600;
        }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }
        .course-card {
          border-radius: 18px;
          overflow: hidden;
          background: #020617;
          border: 1px solid rgba(15, 23, 42, 0.9);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.7);
          display: flex;
          flex-direction: column;
        }
        .course-card-top {
          padding: 16px 18px 18px;
          position: relative;
          color: #f9fafb;
        }
        .course-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          background: rgba(15, 23, 42, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 12px;
        }
        .course-card-top h2 {
          font-size: 1.05rem;
          font-weight: 700;
          max-width: 90%;
        }
        .badge-premium {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          background: #facc15;
          color: #0f172a;
          border-radius: 999px;
          padding: 3px 8px;
          font-weight: 600;
        }
        .fav-btn {
          position: absolute;
          top: 14px;
          right: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
        }
        .course-card-body {
          padding: 14px 18px 16px;
          background: #020617;
        }

       .course-desc {
  font-size: 0.85rem;
  color: rgba(148, 163, 184, 0.95);
  margin-bottom: 12px;

  /* ★ FIX DESCRIPTION SPACING ★ */
  display: -webkit-box;
  -webkit-line-clamp: 3;   /* number of lines you want */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 60px;        /* consistent height for all cards */
  line-height: 1.3;
}
        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: rgba(148, 163, 184, 0.95);
          margin-bottom: 12px;
        }
        .course-meta span:last-child {
          font-size: 1rem;
          font-weight: 700;
          color: #f9fafb;
        }
        .course-actions {
          display: flex;
        }
        .btn-access,
        .btn-details {
          width: 100%;
          padding: 10px 14px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .btn-access {
          background: #16a34a;
          color: white;
        }
        .btn-access:hover {
          background: #15803d;
        }
        .btn-details {
          background: #a855f7;
          color: white;
        }
        .btn-details:hover {
          background: #7c3aed;
        }
        .empty-state {
          text-align: center;
          padding: 48px 16px;
          color: rgba(148, 163, 184, 0.95);
        }
        .empty-icon {
          width: 80px;
          height: 80px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 12px;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 60;
        }
        .modal-card {
          width: min(640px, 100% - 32px);
          max-height: 80vh;
          background: #020617;
          border-radius: 18px;
          padding: 20px 22px 18px;
          border: 1px solid rgba(30, 64, 175, 0.7);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.9);
          overflow: auto;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .modal-header h2 {
          font-size: 1.3rem;
          font-weight: 700;
        }
        .modal-close {
          border: none;
          background: transparent;
          color: rgba(148, 163, 184, 0.9);
          font-size: 1.2rem;
          cursor: pointer;
        }
        .modal-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .modal-tags span {
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.3);
        }
        .modal-description {
          font-size: 0.9rem;
          color: rgba(148, 163, 184, 0.95);
          margin-bottom: 12px;
        }
        .modal-subtitle {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .modal-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          font-size: 0.9rem;
          color: rgba(148, 163, 184, 0.95);
        }
        .modal-list li::before {
          content: "✔";
          color: #22c55e;
          margin-right: 8px;
        }
        .modal-footer {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .modal-fav-btn {
          flex: 1 1 50%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(168, 85, 247, 0.5);
          background: rgba(15, 23, 42, 0.9);
          color: #e5e7eb;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .modal-fav-btn.active {
          background: rgba(147, 51, 234, 0.2);
          border-color: rgba(147, 51, 234, 0.8);
          color: #f9fafb;
        }
        .modal-enroll-btn {
          flex: 1 1 50%;
          padding: 12px 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: white;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .modal-enroll-btn:hover {
          filter: brightness(1.05);
        }

        @media (max-width: 768px) {
          .modules-page {
            padding-top: 88px;
          }
          .filters-row {
            flex-direction: column;
          }
          .filters-item {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}