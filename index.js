
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
  

function displayCourses() {
  courseList.innerHTML = '';
  courses.forEach((course, index) => {
    const courseCard = createCourseCard(course, index);
    courseList.appendChild(courseCard);
  });
}

function createCourseCard(course, index) {
  const courseCard = document.createElement('div');
  courseCard.classList.add('course-card');
  courseCard.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
  `;

  const editButton = courseCard.querySelector('.edit-button');
  editButton.addEventListener('click', () => editCourse(index));

  const deleteButton = courseCard.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => deleteCourse(index));

  return courseCard;
}

function editCourse(index) {
  const course = courses[index];
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');

  titleInput.value = course.title;
  descriptionInput.value = course.description;

  const saveButton = document.getElementById('save-course');
  saveButton.textContent = 'Update';

  const cancelCourseButton = document.getElementById('cancel-course');
  cancelCourseButton.style.display = 'inline-block';

  document.getElementById('create-edit-course').style.display = 'block';

  saveButton.addEventListener('click', () => {
    course.title = titleInput.value;
    course.description = descriptionInput.value;

    displayCourses();
    resetForm();
  });

  cancelCourseButton.addEventListener('click', () => {
    resetForm();
  });
}

function deleteCourse(index) {
  courses.splice(index, 1);
  displayCourses();
}

function resetForm() {
  const saveButton = document.getElementById('save-course');
  saveButton.textContent = 'Save';

  const cancelCourseButton = document.getElementById('cancel-course');
  cancelCourseButton.style.display = 'none';

  document.getElementById('create-edit-course').style.display = 'none';
}

displayCourses();

const exploreButton = document.getElementById('explore-btn');
exploreButton.addEventListener('click', () => {
  resetForm();
  document.getElementById('create-edit-course').style.display = 'block';
});


function filterCourses(query) {
  return courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );
}

function displayFilteredCourses(query) {
  const filteredCourses = filterCourses(query);
  displayCourses(filteredCourses);
}

document.addEventListener('DOMContentLoaded', () => {
 
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    const searchQuery = searchBar.value;
    displayFilteredCourses(searchQuery);
  });
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchQuery = searchBar.value;
      displayFilteredCourses(searchQuery);
    }
  });
});
