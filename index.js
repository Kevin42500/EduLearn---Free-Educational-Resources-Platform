// Sample course data with images
const courses = [
    {
      image: 'images/Math.JPEG.jpg',
      title: 'Introduction to Mathematics',
      description: 'Learn the fundamentals of mathematics in this comprehensive course.',
    },
    {
      image: 'images/Js.JPEG.jpeg',
      title: 'Programming Basics with JavaScript',
      description: 'Get started with coding using JavaScript and build interactive web applications.',
    },
    {
      image: 'images/Eng.JPEG.jpeg',
      title: 'English Grammar Mastery',
      description: 'Improve your English grammar skills and enhance your communication.',
    },
    {
        image: 'images/Ps.JPEG.jpeg',
        title: 'Introduction to Psychology',
        description: 'Enhance your skills in reading people thoughts and behaviours',
      },
      {
        image: 'images/CHEM.JPEG.jpg',
        title: 'Introduction to Chemistry',
        description: 'Extend your knowledge on chemistry',
      },
  
  ];
  
  // Populate course list
  const courseList = document.getElementById('course-list');
  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button>Enroll Now</button>
    `;
    courseList.appendChild(courseCard);
  });
  