
const courses = [
    { "image": "images/Math.JPEG.jpg",
        "title": "Introduction to Mathematics",
        "description": "Learn the fundamentals of mathematics in this comprehensive course."
      },
      {
        "image": "images/Js.JPEG.jpeg",
        "title": "Programming Basics with JavaScript",
        "description": "Get started with coding using JavaScript and build interactive web applications."
      },
      {
        "image": "images/Eng.JPEG.jpeg",
        "title": "English Grammar Mastery",
        "description": "Improve your English grammar skills and enhance your communication."
      },
      {
          "image": "images/Ps.JPEG.jpeg",
          "title": "Introduction to Psychology",
          "description": "Enhance your skills in reading people thoughts and behaviours"
        },
        {
          "image": "images/CHEM.JPEG.jpg",
          "title": "Introduction to Chemistry",
          "description": "Extend your knowledge on chemistry."
        },
    
  
  ];
  

const courseList = document.getElementById('course-list');
courses.forEach(course => {
  const courseCard = document.createElement('div');
  courseCard.classList.add('course-card');
  courseCard.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <button class="enroll-button">Enroll Now</button>
  `;
  courseList.appendChild(courseCard);

  const enrollButton = courseCard.querySelector('.enroll-button');
  enrollButton.addEventListener('click', () => {
    enrollButton.textContent = 'Enrolled';
    enrollButton.style.backgroundColor = '#4CAF50';
    enrollButton.style.cursor = 'default';
    enrollButton.disabled = true;
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore-btn');
  
    exploreButton.addEventListener('click', () => {
      alert('Button clicked!'); 
    });
  });
  
