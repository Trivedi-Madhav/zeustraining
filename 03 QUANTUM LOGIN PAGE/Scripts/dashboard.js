/*document.addEventListener("DOMContentLoaded",function (e) { 
    
 });
 */
function getCourses(file) {
    fetch(file)
    .then(response => {
        return response.json();
      })
    .then(jsonData => {
        jsonData.data.forEach(course => {
            
            var string = `<div class="course-container">
            <div class="course-img-container">
                <img class="course-img" src="${course.heading.cover}">
            </div>
            <div class="course-description">
                <h4 class="course-title">${course.heading.title}</h4>
                <label class="course-core-subject">${course.class.subject}</label> || <label class="course-grade"> ${course.class.grade}</label><label class="grade-added">${course.class.addedGrade}</label>
                <div style="display: flex;"> <label class="course-units">${course.syllabus.units}</label>&nbsp;<label class="sideText"> ${course.syllabus.unitsText} </label>&nbsp;<label class="course-lessons">${course.syllabus.lessons}</label>&nbsp;<label class="sideText"> ${course.syllabus.lessonsText} </label>&nbsp;<label class="course-topics">${course.syllabus.topics}</label><label class="sideText"> ${course.syllabus.topicsText}</label></div>
                <div class="course-teacher">
                    <select class="course-teacher-options"><option>${course.teacher}</option></select>
                </div>
                <div>
                    <label></label>
                    <label></label>
                    <label></label>
                </div>
            </div>
            <div class="course-options">
                <img src="./icons/preview.svg">
                <img src="./icons/manage course.svg">
                <img src="./icons/grade submissions.svg">
                <img src="./icons/reports.svg">
            </div>
  </div>`;
            document.querySelector(".courses").innerHTML+=string;
        });
    })
    .catch(error=>{
        console.error(error);
    });

}

function getAnnoucements(file)
{
    fetch(file)
    .then(response=>response.json())
    .then(data=>{
        data["messages"].forEach(message=>{
            const messageCard = document.createElement('div');
            messageCard.classList.add('con-card');
            if(message.type=="read")
            {
                messageCard.classList.add("con-read")
            }
            else
            {
                messageCard.classList.add("con-unread");
            }
            messageCard.innerHTML = `
              <div class="con-title">
                <p>
                  <span class="PA">PA: </span><span class="con-name">${message.PA}</span>
                </p>
                <img src="${message.statusIcon}" height="18px">
              </div>
              <p class="con-msg">${message.message}</p>
              <div style="display: flex">
                ${message.attachments ? `<div class="con-card-footer"><img src="./icons/attach-icon.png" height="12px"><span>${message.attachments} Files attached</span></div>` : ''}
                ${message.course ? `<div class="con-card-footer"><span>Course: ${message.course}</span></div>` : ''}
                <span class="con-time">${message.timestamp}</span>
              </div>
            `;
    
            document.querySelector("#announcementContainer").appendChild(messageCard);
        });
    })
}

function getNotification(file)
{
    fetch(file)
    .then(response=>response.json())
    .then(data=>{
        data.notifications.forEach(notification=>{
            const notificationCard = document.createElement('div');
            notificationCard.className = `con-card ${notification.type=="read"?"con-read":"con-unread"}`;

            notificationCard.innerHTML = `
              <div class="con-title">
                <p>
                  <span class="con-name">${notification.content}</span>
                </p>
                <img src="${notification.statusIcon}" height="18px">
              </div>
              ${notification.course ? `<div class="con-title"><p><span class="PA">Course: </span><span class="con-name">${notification.course}</span></p></div>` : ''}
              ${notification.class ? `<div class="con-title"><p><span class="PA">Class: </span><span class="con-name">${notification.class}</span></p></div>` : ''}
              <div style="display: flex">
                <span class="con-time">${notification.timestamp}</span>
              </div>
            `;
    
            document.querySelector("#notificationContainer").appendChild(notificationCard);
        });
    })
}
getCourses("./data/data.json");
getAnnoucements("./data/announcements.json");
getNotification("./data/notifications.json");
