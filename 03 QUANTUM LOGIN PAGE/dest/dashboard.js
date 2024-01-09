document.addEventListener('DOMContentLoaded', function () {
    const coursesContainer = document.querySelector('.courses');
    function createCourseElement(courseData) {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-container');
      
        
        courseDiv.innerHTML = `
          <div class="course-img-container">
              <img class="course-img" src="${courseData.heading.cover}">
          </div>
          <div class="course-description">
              <h4 class="course-title">${courseData.heading.title}</h4>
              <label class="course-core-subject">${courseData.class.subject}</label> || <label class="course-grade">${courseData.class.grade}</label><label class="grade-added">${courseData.class.greenText}</label>
              <div style="display: flex;"> <label class="course-units">${courseData.syllabus.units}</label>&nbsp;<label class="sideText">${courseData.syllabus.unitsText}</label>&nbsp;<label class="course-lessons">${courseData.syllabus.lessons}</label>&nbsp;<label class="sideText">${courseData.syllabus.lessonsText}</label>&nbsp;<label class="sideText">${courseData.syllabus.topicsText}</label></div>
              <div class="course-teacher">
                  <select class="course-teacher-options"><option>${courseData.teacher}</option></select>
              </div>
              <div>
                  <label></label>
                  <label></label>
                  <label></label>
              </div>
          </div>
          <div class="course-options">
              <img src="${courseData.preview.icon}">
              <img src="${courseData.manage.icon}">
              <img src="${courseData.submission.icon}">
              <img src="${courseData.report.icon}">
          </div>
        `;
      
        return courseDiv;
}

function renderCourses(data) {
      data.forEach(courseData => {
        const courseElement = createCourseElement(courseData);
        coursesContainer.appendChild(courseElement);
        
        
      });
}
function createImage(src, isDisabled) {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('course-option-icon');
        if (isDisabled) {
          img.classList.add('disabled');
        }
        return img;
}
function handleData(data) {
      renderCourses(data.data);
}
  
fetch('./data/data.json')
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        handleData(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
      
});
  