// Sample course data
const allCourses = [
    {
        id: 1,
        title: "The Complete Web Development Bootcamp",
        instructor: "Dr. Angela Yu",
        rating: 4.7,
        ratingCount: 345678,
        price: "$84.99",
        emoji: "💻",
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Python for Data Science and Machine Learning",
        instructor: "Jose Portilla",
        rating: 4.6,
        ratingCount: 287543,
        price: "$79.99",
        emoji: "🐍",
        badge: "Highest Rated"
    },
    {
        id: 3,
        title: "Complete JavaScript Course 2025",
        instructor: "Jonas Schmedtmann",
        rating: 4.8,
        ratingCount: 456789,
        price: "$89.99",
        emoji: "⚡",
        badge: "Bestseller"
    },
    {
        id: 4,
        title: "React - The Complete Guide 2025",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        ratingCount: 334521,
        price: "$84.99",
        emoji: "⚛️",
        badge: "Popular"
    },
    {
        id: 5,
        title: "The Complete Digital Marketing Course",
        instructor: "Rob Percival",
        rating: 4.5,
        ratingCount: 198765,
        price: "$74.99",
        emoji: "📱",
        badge: "New"
    },
    {
        id: 6,
        title: "AWS Certified Solutions Architect",
        instructor: "Stephane Maarek",
        rating: 4.7,
        ratingCount: 267890,
        price: "$89.99",
        emoji: "☁️",
        badge: "Bestseller"
    },
    {
        id: 7,
        title: "The Data Science Course: Complete Bootcamp",
        instructor: "365 Careers Team",
        rating: 4.6,
        ratingCount: 245123,
        price: "$84.99",
        emoji: "📊",
        badge: "Popular"
    },
    {
        id: 8,
        title: "Complete SQL Bootcamp",
        instructor: "Jose Portilla",
        rating: 4.7,
        ratingCount: 321456,
        price: "$79.99",
        emoji: "🗄️",
        badge: "Highest Rated"
    },
    {
        id: 9,
        title: "Graphic Design Masterclass",
        instructor: "Lindsay Marsh",
        rating: 4.6,
        ratingCount: 189432,
        price: "$69.99",
        emoji: "🎨",
        badge: "New"
    },
    {
        id: 10,
        title: "iOS & Swift - The Complete iOS App Development",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        ratingCount: 298765,
        price: "$94.99",
        emoji: "📱",
        badge: "Bestseller"
    },
    {
        id: 11,
        title: "Machine Learning A-Z: Hands-On Python",
        instructor: "Kirill Eremenko",
        rating: 4.5,
        ratingCount: 412345,
        price: "$89.99",
        emoji: "🤖",
        badge: "Popular"
    },
    {
        id: 12,
        title: "The Ultimate Photography Course",
        instructor: "Phil Ebiner",
        rating: 4.6,
        ratingCount: 156789,
        price: "$74.99",
        emoji: "📷",
        badge: "New"
    },
    {
        id: 13,
        title: "Complete English Grammar Course",
        instructor: "Anthony Kelleher",
        rating: 4.7,
        ratingCount: 234567,
        price: "$59.99",
        emoji: "📚",
        badge: "Bestseller"
    },
    {
        id: 14,
        title: "The Complete Financial Analyst Course",
        instructor: "365 Careers Team",
        rating: 4.6,
        ratingCount: 178901,
        price: "$79.99",
        emoji: "💰",
        badge: "Popular"
    },
    {
        id: 15,
        title: "Blockchain and Cryptocurrency Course",
        instructor: "Chris Haroun",
        rating: 4.5,
        ratingCount: 145678,
        price: "$84.99",
        emoji: "⛓️",
        badge: "Hot"
    },
    {
        id: 16,
        title: "Angular - The Complete Guide",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        ratingCount: 267890,
        price: "$84.99",
        emoji: "🅰️",
        badge: "Bestseller"
    },
    {
        id: 17,
        title: "Complete SEO Training",
        instructor: "Anil Agarwal",
        rating: 4.6,
        ratingCount: 189234,
        price: "$74.99",
        emoji: "🔍",
        badge: "New"
    },
    {
        id: 18,
        title: "Docker and Kubernetes: The Complete Guide",
        instructor: "Stephen Grider",
        rating: 4.7,
        ratingCount: 298765,
        price: "$89.99",
        emoji: "🐳",
        badge: "Popular"
    },
    {
        id: 19,
        title: "The Complete Video Production Course",
        instructor: "Phil Ebiner",
        rating: 4.6,
        ratingCount: 156789,
        price: "$79.99",
        emoji: "🎥",
        badge: "New"
    },
    {
        id: 20,
        title: "Excel Skills for Business",
        instructor: "Maven Analytics",
        rating: 4.7,
        ratingCount: 334521,
        price: "$69.99",
        emoji: "📈",
        badge: "Bestseller"
    },
    {
        id: 21,
        title: "Complete C# Unity Game Developer",
        instructor: "GameDev.tv Team",
        rating: 4.7,
        ratingCount: 267890,
        price: "$89.99",
        emoji: "🎮",
        badge: "Popular"
    },
    {
        id: 22,
        title: "WordPress Complete Course",
        instructor: "Brad Hussey",
        rating: 4.6,
        ratingCount: 198765,
        price: "$74.99",
        emoji: "🌐",
        badge: "New"
    },
    {
        id: 23,
        title: "Complete Blender Creator Course",
        instructor: "GameDev.tv Team",
        rating: 4.7,
        ratingCount: 234567,
        price: "$84.99",
        emoji: "🎨",
        badge: "Bestseller"
    },
    {
        id: 24,
        title: "Cyber Security Course for Beginners",
        instructor: "Nathan House",
        rating: 4.6,
        ratingCount: 178901,
        price: "$79.99",
        emoji: "🔒",
        badge: "Hot"
    },
    {
        id: 25,
        title: "Complete Public Speaking Course",
        instructor: "TJ Walker",
        rating: 4.5,
        ratingCount: 145678,
        price: "$69.99",
        emoji: "🎤",
        badge: "New"
    },
    {
        id: 26,
        title: "Node.js - The Complete Guide",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        ratingCount: 287543,
        price: "$84.99",
        emoji: "🟢",
        badge: "Bestseller"
    },
    {
        id: 27,
        title: "Complete UX/UI Design Course",
        instructor: "Daniel Walter Scott",
        rating: 4.6,
        ratingCount: 198765,
        price: "$79.99",
        emoji: "✨",
        badge: "Popular"
    }
];

// Pagination settings
const coursesPerPage = 9; // 3x3 grid
let currentPage = 1;
let totalPages = Math.ceil(allCourses.length / coursesPerPage);

// Function to render courses
function renderCourses(page) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    
    const startIndex = (page - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const coursesToShow = allCourses.slice(startIndex, endIndex);
    
    coursesToShow.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="course-image">${course.emoji}</div>
            <div class="course-content">
                <div class="course-badge">${course.badge}</div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">${course.instructor}</p>
                <div class="course-rating">
                    <span class="rating-number">${course.rating}</span>
                    <span class="rating-stars">★★★★★</span>
                    <span class="rating-count">(${course.ratingCount.toLocaleString()})</span>
                </div>
                <div class="course-price">${course.price}</div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

// Function to render pagination
function renderPagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    
    // Calculate which page numbers to show
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    // Adjust if we're near the start or end
    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
    }
    if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number';
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => goToPage(i));
        pageNumbers.appendChild(pageNumber);
    }
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

// Function to go to specific page
function goToPage(page) {
    currentPage = page;
    renderCourses(currentPage);
    renderPagination();
    
    // Smooth scroll to top of courses section
    document.querySelector('.courses-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Previous button
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

// Next button
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
});

// Initial render
renderCourses(currentPage);
renderPagination();

