// Main JavaScript for FrogsTech-Hub System
// DOM Elements
const popupModal = document.getElementById('popupModal');
const closeModalBtn = document.getElementById('closeModal');
const closeModalBtnFooter = document.querySelector('.close-modal-btn');
const studyGroupsModal = document.getElementById('studyGroupsModal');
const studyGroupsBtn = document.getElementById('studyGroupsBtn');
const closeStudyGroupsBtn = document.querySelector('.close-study-groups');
const groupsCourseSelect = document.getElementById('groupsCourseSelect');
const studyGroupsContainer = document.getElementById('studyGroupsContainer');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const coursesContainer = document.getElementById('coursesContainer');
const courseSelect = document.getElementById('courseSelect');
const timetableElement = document.getElementById('timetable');
const currentWeekElement = document.getElementById('currentWeek');
const resourceSearch = document.getElementById('resourceSearch');
const searchBtn = document.getElementById('searchBtn');
const resourceType = document.getElementById('resourceType');
const resourceCourse = document.getElementById('resourceCourse');
const resourcesGrid = document.getElementById('resourcesGrid');
const eventRsvpBtn = document.querySelector('.event-rsvp');
const attendEventBtn = document.querySelector('.btn-attend');
const interestButtons = document.querySelectorAll('.event-interest');
const birthdayModal = document.getElementById('birthdayModal'); // birthday modal

// Global variables
let popupTimeout;
let birthdayTimeout; // birthday timeout

// Google Form URLs 
const GOOGLE_FORM_URLS = {
    nyamaChoma: "https://forms.gle/knqyPZ1LCSd3uKph6", 
    careerTalk: "", 
    
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show popup modal on page load
    setTimeout(() => {
        popupModal.style.display = 'flex';
        
        // Set timeout to close popup after 10 seconds
        popupTimeout = setTimeout(closePopup, 10000);
        
        // Add click event to modal overlay to close when clicking outside
        popupModal.addEventListener('click', function(e) {
            if (e.target === popupModal) {
                closePopup();
            }
        });
        
    }, 1000);
    
    // Show birthday modal after 30 seconds
    setTimeout(() => {
        if (birthdayModal) {
            birthdayModal.style.display = 'flex';
            
            // Set timeout to close birthday popup after 30 seconds
            birthdayTimeout = setTimeout(closeBirthdayPopup, 30000);
            
            // Add click event to close when clicking outside
            birthdayModal.addEventListener('click', function(e) {
                if (e.target === birthdayModal) {
                    closeBirthdayPopup();
                }
            });
        }
    }, 30000);
    
    // Load courses
    loadCourses();
    
    // Load timetable
    loadTimetable();
    
    // Load resources
    loadResources();
    
    // Set up event listeners
    setupEventListeners();
});

// Function to close popup
function closePopup() {
    // Clear the timeout if it exists
    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }
    
    // Add fade out animation
    popupModal.style.animation = 'fadeOut 0.5s ease forwards';
    
    // Remove modal after animation completes
    setTimeout(() => {
        popupModal.style.display = 'none';
        // Reset animation for next time
        popupModal.style.animation = '';
    }, 500);
}

// Function to close study groups modal
function closeStudyGroupsModal() {
    studyGroupsModal.style.animation = 'fadeOut 0.5s ease forwards';
    
    setTimeout(() => {
        studyGroupsModal.style.display = 'none';
        studyGroupsModal.style.animation = '';
    }, 500);
}

// Function to close birthday popup
function closeBirthdayPopup() {
    // Clear the timeout if it exists
    if (birthdayTimeout) {
        clearTimeout(birthdayTimeout);
    }
    
    // Add fade out animation
    if (birthdayModal) {
        birthdayModal.style.animation = 'fadeOut 0.5s ease forwards';
        
        // Remove modal after animation completes
        setTimeout(() => {
            birthdayModal.style.display = 'none';
            // Reset animation for next time
            birthdayModal.style.animation = '';
        }, 500);
    }
}

// Add CSS for fade out animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; visibility: hidden; }
    }
`;
document.head.appendChild(fadeOutStyle);

// Event Listeners setup
function setupEventListeners() {
    // Close modal when clicking close button
    closeModalBtn.addEventListener('click', closePopup);
    closeModalBtnFooter.addEventListener('click', closePopup);
    
    // Close modal when clicking outside
    popupModal.addEventListener('click', function(e) {
        if (e.target === popupModal) {
            closePopup();
        }
    });
    
    // Close birthday modal when clicking close button
    const closeBirthdayBtn = birthdayModal ? birthdayModal.querySelector('.close-modal') : null;
    if (closeBirthdayBtn) {
        closeBirthdayBtn.addEventListener('click', closeBirthdayPopup);
    }
    
    // Close birthday modal when clicking outside
    if (birthdayModal) {
        birthdayModal.addEventListener('click', function(e) {
            if (e.target === birthdayModal) {
                closeBirthdayPopup();
            }
        });
    }
    
    // Close birthday modal when clicking thank you button
    const birthdayCloseBtn = document.querySelector('.birthday-close-btn');
    if (birthdayCloseBtn) {
        birthdayCloseBtn.addEventListener('click', closeBirthdayPopup);
    }
    
    // Study groups modal
    studyGroupsBtn.addEventListener('click', function() {
        studyGroupsModal.style.display = 'flex';
        studyGroupsModal.style.animation = 'modalAppear 0.5s ease-out';
    });
    
    // Close study groups modal
    closeStudyGroupsBtn.addEventListener('click', closeStudyGroupsModal);
    studyGroupsModal.addEventListener('click', function(e) {
        if (e.target === studyGroupsModal) {
            closeStudyGroupsModal();
        }
    });
    
    // Study groups course selection
    groupsCourseSelect.addEventListener('change', function() {
        const selectedCourse = this.value;
        if (selectedCourse) {
            loadStudyGroups(selectedCourse);
        } else {
            studyGroupsContainer.innerHTML = `
                <div class="no-groups-selected">
                    <i class="fas fa-users"></i>
                    <h3>Select a course to view study groups</h3>
                    <p>Choose a course from the dropdown above to see available study groups</p>
                </div>
            `;
        }
    });
    
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${tab}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Course selection for timetable
    courseSelect.addEventListener('change', loadTimetable);
    
    // Resource search
    searchBtn.addEventListener('click', loadResources);
    resourceSearch.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            loadResources();
        }
    });
    
    // Resource filters
    resourceType.addEventListener('change', loadResources);
    resourceCourse.addEventListener('change', loadResources);
    
    // RSVP button functionalities 
    if (eventRsvpBtn) {
        eventRsvpBtn.addEventListener('click', function() {
            // Open Google Form for Nyama Choma event
            openGoogleForm('nyamaChoma', 'Nyama Choma Event');
            
            // Update button appearance
            this.innerHTML = "🎉 You're Coming!";
            this.style.background = "linear-gradient(to right, #FF8C00, #FFA500)";
            showNotification("Awesome! Please fill out the RSVP form. We'll see you at the Nyama Choma event!");
            
            // Disable button after click
            this.disabled = true;
            this.style.cursor = "default";
        });
    }
    
    // Attend event button
    if (attendEventBtn) {
        attendEventBtn.addEventListener('click', function() {
            // Open Google Form for specific event
            openGoogleForm('Eg-careerTalk', 'Eg-Career Talk Event');
            
            // Update button appearance
            this.innerHTML = "🎉 You're Attending!";
            this.style.background = "linear-gradient(to right, #FF8C00, #FFA500)";
            showNotification("Great! Please fill out the attendance form.");
            
            // Disable button after click
            this.disabled = true;
            this.style.cursor = "default";
        });
    }
    
    // Event interest buttons
    interestButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML === "Interested") {
                this.innerHTML = "✓ Interested";
                this.style.background = "var(--primary-green)";
                this.style.color = "white";
                showNotification("Added to your interested events!");
            } else {
                this.innerHTML = "Interested";
                this.style.background = "rgba(30, 144, 255, 0.1)";
                this.style.color = "var(--primary-blue)";
            }
        });
    });
    
    // Course card clicks
    document.addEventListener('click', function(event) {
        const courseCard = event.target.closest('.course-card');
        if (courseCard) {
            const courseId = courseCard.dataset.course;
            showCourseModules(courseId);
        }
    });
    
    // Quick link cards
    document.querySelectorAll('.quick-link-card').forEach(card => {
        card.addEventListener('click', function() {
            const text = this.querySelector('h3').textContent;
            if (text === "Study Groups") {
                // Already handled by studyGroupsBtn
                return;
            } else if (text === "View Timetable") {
                // Navigate to timetable section
                document.querySelector('.nav-item[data-tab="timetable"]').click();
            } else if (text === "Study Resources") {
                // Navigate to resources section
                document.querySelector('.nav-item[data-tab="resources"]').click();
            }
        });
    });
}

// Opening google forms
function openGoogleForm(formKey, eventName) {
    const formUrl = GOOGLE_FORM_URLS[formKey];
    
    // Check if form URL is configured
    if (!formUrl || formUrl.includes("YOUR_FORM_ID")) {
        showNotification(`Error: Google Form URL for "${eventName}" is not configured. Please update the GOOGLE_FORM_URLS in script.js`);
        console.error(`Google Form URL for "${eventName}" is not configured. Please update the GOOGLE_FORM_URLS in script.js`);
        
        // Open a sample form for testing (remove in production)
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdTpQZq3P9Q4Q8V7V6B5N4M3L2K1J9H8G7F6E5D4C3B2A1/viewform", '_blank', 'noopener,noreferrer');
        return;
    }
    
    // Open Google Form in new tab
    window.open(formUrl, '_blank', 'noopener,noreferrer');
}

// Load courses to the homepage
function loadCourses() {
    coursesContainer.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.course = course.id;
        courseCard.innerHTML = `
            <div class="course-icon" style="background: ${course.color}">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-info">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <div class="module-count">
                    <i class="fas fa-book"></i>
                    <span>${course.modules.length} Modules</span>
                </div>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
}

// Show course modules when a course card is clicked
function showCourseModules(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    // Create modules modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${course.name} Modules</h2>
                <button class="close-modal close-modules-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modules-list">
                    <h3><i class="fas fa-list-ol"></i> Course Modules Semester I</h3>
                    <ul>
                        ${course.modules.map((module, index) => `
                            <li type="none">
                                <i class="fas fa-bookmark"></i>
                                <span>${module}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="module-actions">
                    <button class="resource-btn view-timetable-btn">
                        <i class="fas fa-calendar"></i> View Timetable
                    </button>
                    <button class="resource-btn view-resources-btn">
                        <i class="fas fa-folder-open"></i> View Resources
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    modal.style.display = 'flex';
    
    // Close modal event
    const closeBtn = modal.querySelector('.close-modules-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Button events
    const viewTimetableBtn = modal.querySelector('.view-timetable-btn');
    const viewResourcesBtn = modal.querySelector('.view-resources-btn');
    
    viewTimetableBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        // Switch to timetable tab and filter by course
        document.querySelector('.nav-item[data-tab="timetable"]').click();
        courseSelect.value = courseId;
        loadTimetable();
        showNotification(`Showing timetable for ${course.name}`);
    });
    
    viewResourcesBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        // Switch to resources tab and filter by course
        document.querySelector('.nav-item[data-tab="resources"]').click();
        resourceCourse.value = courseId;
        loadResources();
        showNotification(`Showing resources for ${course.name}`);
    });
}

// Load study groups for selected course
function loadStudyGroups(courseId) {
    const groups = studyGroups[courseId];
    const course = courses.find(c => c.id === courseId);
    
    if (!groups || !course) {
        studyGroupsContainer.innerHTML = `
            <div class="no-groups-selected">
                <i class="fas fa-users"></i>
                <h3>No study groups available</h3>
                <p>No study groups found for ${course ? course.name : 'this course'}</p>
            </div>
        `;
        return;
    }
    
    let groupsHTML = '<div class="study-groups-grid">';
    
    groups.forEach((group, index) => {
        groupsHTML += `
            <div class="study-group-card">
                <div class="group-header">
                    <div class="group-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="group-title">
                        <h3>${group.name}</h3>
                        <p>Group ${index + 1}</p>
                    </div>
                </div>
                <div class="group-members">
                    ${group.members.map(member => `
                        <div class="member">
                            <i class="fas fa-user"></i>
                            <span>${member}</span>
                            ${member === group.leader ? '<span class="leader-badge">Leader</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    groupsHTML += '</div>';
    studyGroupsContainer.innerHTML = groupsHTML;
}

// Load timetable with support for multi-course subjects
function loadTimetable() {
    const selectedCourse = courseSelect.value;
    let timetableHTML = '';
    
    // Create header
    timetableHTML += '<div class="timetable-header">';
    timetableHTML += '<div class="timetable-header-cell">Time</div>';
    timetableData.days.forEach(day => {
        timetableHTML += `<div class="timetable-header-cell">${day}</div>`;
    });
    timetableHTML += '</div>';
    
    // Create body
    timetableHTML += '<div class="timetable-body">';
    
    timetableData.timeSlots.forEach((timeSlot, timeIndex) => {
        timetableHTML += '<div class="timetable-row">';
        timetableHTML += `<div class="time-slot">${timeSlot}</div>`;
        
        // Add sessions for each day
        timetableData.days.forEach((day, dayIndex) => {
            const session = timetableData.sessions[dayIndex][timeIndex];
            
            if (session) {
                // Check if session has single course or multiple courses
                const sessionCourses = Array.isArray(session.courses) ? 
                    session.courses : [session.course];
                
                // Determine if we should show this session
                let shouldShow = false;
                
                if (selectedCourse === 'all') {
                    shouldShow = true;
                } else if (sessionCourses.includes('all')) {
                    shouldShow = true;
                } else if (sessionCourses.includes(selectedCourse)) {
                    shouldShow = true;
                }
                
                if (shouldShow) {
                    // Determine session type and styling
                    let sessionClass = 'session';
                    let courseInfo = '';
                    
                    // Add course-specific class for styling
                    if (sessionCourses.length === 1 && sessionCourses[0] !== 'all') {
                        sessionClass += ` ${sessionCourses[0]}`;
                        courseInfo = `<p class="course-tag">${getCourseName(sessionCourses[0])}</p>`;
                    } else if (sessionCourses.includes('all')) {
                        sessionClass += ' all';
                        courseInfo = '<div class="all-info"><i class="fas fa-globe"></i> All Courses</div>';
                    } else if (sessionCourses.length > 1) {
                        sessionClass += ' shared';
                        
                        // Get other courses (excluding the selected one if viewing specific course)
                        const otherCourses = selectedCourse === 'all' ? 
                            sessionCourses : 
                            sessionCourses.filter(c => c !== selectedCourse);
                        
                        if (otherCourses.length > 0) {
                            courseInfo = `<div class="shared-info">
                                <i class="fas fa-users"></i>
                                ${selectedCourse === 'all' ? 
                                    'All: ' + sessionCourses.map(c => getCourseShortName(c)).join(', ') :
                                    'Also: ' + otherCourses.map(c => getCourseShortName(c)).join(', ')
                                }
                            </div>`;
                        }
                    }
                    
                    timetableHTML += `
                        <div class="day-slot">
                            <div class="${sessionClass}">
                                <h4>${session.module}</h4>
                                <p class="room">${session.room}</p>
                                ${courseInfo}
                            </div>
                        </div>
                    `;
                } else {
                    timetableHTML += '<div class="day-slot"></div>';
                }
            } else {
                timetableHTML += '<div class="day-slot"></div>';
            }
        });
        
        timetableHTML += '</div>';
    });
    
    timetableHTML += '</div>';
    
    timetableElement.innerHTML = timetableHTML;
    
    // Update week display
    updateWeekDisplay();
}

// Update week display
function updateWeekDisplay() {
    if (currentWeekElement) {
        currentWeekElement.textContent = `Week ${timetableData.week}: ${timetableData.dateRange}`;
    }
}

// Get course name by ID
function getCourseName(courseId) {
    const course = courses.find(c => c.id === courseId);
    return course ? course.name : courseId;
}

// Get short course name
function getCourseShortName(courseId) {
    const courseMap = {
        'mechatronics': 'Mechatronics',
        'mechanical': 'Mechanical',
        'automotive': 'Automotive',
        'safety': 'Safety'
    };
    return courseMap[courseId] || courseId;
}

// Function to download documents
function downloadDocument(filePath, fileName) {
    if (!filePath) {
        showNotification("No file available for download.");
        return;
    }
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    
    // Extract file extension and add it to filename
    const fileExtension = filePath.split('.').pop();
    const fullFileName = `${fileName.replace(/\s+/g, '_')}.${fileExtension}`;
    
    link.download = fullFileName;
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification(`Downloading ${fileName}...`);
}

// Function to view documents in browser
function viewDocument(filePath, fileName) {
    if (!filePath) {
        showNotification("No file available to view.");
        return;
    }
    
    // Check if it's a video file
    const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv'];
    const fileExtension = filePath.split('.').pop().toLowerCase();
    
    if (videoExtensions.includes(fileExtension)) {
        // Show video in modal
        showVideoModal(filePath, fileName);
    } else {
        // For other files (PDF, images, etc.), open in new tab
        window.open(filePath, '_blank');
        showNotification(`Opening ${fileName}...`);
    }
}

// Updated loadResources function
function loadResources() {
    const searchTerm = resourceSearch.value.toLowerCase();
    const typeFilter = resourceType.value;
    const courseFilter = resourceCourse.value;
    
    // Use the enhanced search function (assuming searchResources exists in data.js)
    // If not, we'll create a simple filter
    let filteredResources = resources;
    
    if (searchTerm) {
        filteredResources = filteredResources.filter(resource => 
            resource.title.toLowerCase().includes(searchTerm) ||
            resource.description.toLowerCase().includes(searchTerm) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    if (typeFilter && typeFilter !== 'all') {
        filteredResources = filteredResources.filter(resource => 
            resource.type === typeFilter
        );
    }
    
    if (courseFilter && courseFilter !== 'all') {
        filteredResources = filteredResources.filter(resource => 
            resource.courses.includes(courseFilter) || 
            resource.courses.includes('all')
        );
    }
    
    // Display resources
    if (filteredResources.length === 0) {
        resourcesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No resources found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    resourcesGrid.innerHTML = '';
    
    filteredResources.forEach(resource => {
        const fileExtension = resource.filePath ? resource.filePath.split('.').pop().toLowerCase() : '';
        const fileIcon = getFileIcon(fileExtension);
        
        // Determine sharing badge
        let sharingBadge = '';
        if (resource.courses.length === 4) {
            sharingBadge = '<span class="sharing-badge all-shared"><i class="fas fa-users"></i> All Courses</span>';
        } else if (resource.courses.length === 3) {
            sharingBadge = '<span class="sharing-badge three-shared"><i class="fas fa-user-friends"></i> 3 Courses</span>';
        } else if (resource.courses.length === 2) {
            sharingBadge = '<span class="sharing-badge two-shared"><i class="fas fa-handshake"></i> 2 Courses</span>';
        } else {
            sharingBadge = '<span class="sharing-badge exclusive"><i class="fas fa-user"></i> Exclusive</span>';
        }
        
        // Get course names for display
        const courseNames = resource.courses.map(courseId => {
            const course = courses.find(c => c.id === courseId);
            return course ? course.name : courseId;
        }).join(', ');
        
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <div class="resource-header">
                <div class="resource-icon" style="background: ${resource.iconColor}">
                    <i class="${resource.icon || fileIcon}"></i>
                </div>
                <div class="resource-meta">
                    <h3>${resource.title} ${sharingBadge}</h3>
                    <p class="resource-courses">${courseNames}</p>
                    ${resource.moduleCode ? `<p class="module-code"><i class="fas fa-book"></i> ${resource.moduleCode}</p>` : ''}
                    ${resource.fileSize ? `<p class="file-size"><i class="fas fa-hdd"></i> ${resource.fileSize}</p>` : ''}
                </div>
            </div>
            <div class="resource-body">
                <p class="resource-description">${resource.description}</p>
                <div class="resource-tags">
                    ${resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    <span class="tag file-type">${fileExtension.toUpperCase()}</span>
                </div>
                <div class="resource-actions">
                    <button class="resource-btn download-btn" data-file="${resource.filePath}" data-title="${resource.title}">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button class="resource-btn view-btn" data-file="${resource.filePath}" data-title="${resource.title}">
                        <i class="fas fa-external-link-alt"></i> View
                    </button>
                    <button class="resource-btn info-btn" data-id="${resource.id}">
                        <i class="fas fa-info-circle"></i> Info
                    </button>
                </div>
            </div>
        `;
        
        resourcesGrid.appendChild(resourceCard);
    });
    
    // Add event listeners for download and view buttons
    document.querySelectorAll('.resource-card .download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filePath = this.getAttribute('data-file');
            const fileName = this.getAttribute('data-title');
            downloadDocument(filePath, fileName);
        });
    });
    
    document.querySelectorAll('.resource-card .view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filePath = this.getAttribute('data-file');
            const fileName = this.getAttribute('data-title');
            viewDocument(filePath, fileName);
        });
    });
    
    // Add info button event listeners
    document.querySelectorAll('.resource-card .info-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const resourceId = parseInt(this.getAttribute('data-id'));
            showResourceInfo(resourceId);
        });
    });
}

// New function to show resource info
function showResourceInfo(resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    if (!resource) return;
    
    // Get course names
    const courseNames = resource.courses.map(courseId => {
        const course = courses.find(c => c.id === courseId);
        return course ? course.name : courseId;
    });
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Resource Information</h2>
                <button class="close-modal close-resource-info">&times;</button>
            </div>
            <div class="modal-body">
                <div class="resource-info">
                    <h3>${resource.title}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong><i class="fas fa-book"></i> Module:</strong>
                            <span>${resource.moduleCode || 'N/A'}</span>
                        </div>
                        <div class="info-item">
                            <strong><i class="fas fa-users"></i> Courses:</strong>
                            <span>${courseNames.join(', ')}</span>
                        </div>
                        <div class="info-item">
                            <strong><i class="fas fa-user"></i> Author:</strong>
                            <span>${resource.author || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <strong><i class="fas fa-calendar"></i> Added:</strong>
                            <span>${resource.dateAdded || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <strong><i class="fas fa-file"></i> Type:</strong>
                            <span>${resource.type.toUpperCase()}</span>
                        </div>
                        <div class="info-item">
                            <strong><i class="fas fa-hdd"></i> Size:</strong>
                            <span>${resource.fileSize || 'Unknown'}</span>
                        </div>
                    </div>
                    <div class="info-tags">
                        <strong>Tags:</strong>
                        ${resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="info-description">
                        <strong>Description:</strong>
                        <p>${resource.description}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="resource-btn download-btn" style="margin: 0 auto;">
                    <i class="fas fa-download"></i> Download Resource
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Close modal event
    const closeBtn = modal.querySelector('.close-resource-info');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Download button in modal
    const downloadBtn = modal.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        downloadDocument(resource.filePath, resource.title);
        document.body.removeChild(modal);
    });
}

// Function to show video in modal
function showVideoModal(videoPath, videoName) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${videoName}</h2>
                <button class="close-modal close-video-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="video-viewer">
                    <video controls style="width: 100%; border-radius: 10px;">
                        <source src="${videoPath}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-actions" style="margin-top: 20px; text-align: center;">
                        <button class="resource-btn download-btn" style="margin: 0 auto;">
                            <i class="fas fa-download"></i> Download Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Close modal event
    const closeBtn = modal.querySelector('.close-video-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Download button
    const downloadBtn = modal.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        downloadDocument(videoPath, videoName);
    });
}

// Function to get file icon based on type
function getFileIcon(fileType) {
    const iconMap = {
        'pdf': 'fas fa-file-pdf',
        'doc': 'fas fa-file-word',
        'docx': 'fas fa-file-word',
        'ppt': 'fas fa-file-powerpoint',
        'pptx': 'fas fa-file-powerpoint',
        'xls': 'fas fa-file-excel',
        'xlsx': 'fas fa-file-excel',
        'zip': 'fas fa-file-archive',
        'rar': 'fas fa-file-archive',
        'jpg': 'fas fa-file-image',
        'jpeg': 'fas fa-file-image',
        'png': 'fas fa-file-image',
        'gif': 'fas fa-file-image',
        'mp4': 'fas fa-file-video',
        'avi': 'fas fa-file-video',
        'mov': 'fas fa-file-video',
        'mp3': 'fas fa-file-audio',
        'wav': 'fas fa-file-audio',
        'txt': 'fas fa-file-alt',
        'default': 'fas fa-file'
    };
    
    return iconMap[fileType] || iconMap['default'];
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(to right, var(--primary-green), var(--light-green));
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        animation-fill-mode: forwards;
    `;
    
    // Add keyframes for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    
    // Check if style already exists
    if (!document.querySelector('style[data-notification-animation]')) {
        style.setAttribute('data-notification-animation', '');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}