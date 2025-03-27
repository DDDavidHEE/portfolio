const view = {
    // Renders About Text
    renderAboutText: function(text) {
        const aboutTextElement = document.getElementById('about-text');
        aboutTextElement.innerText = text;
    },

    // Renders Projects
    renderProjects: function(projects) {
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = ''; // Clear existing content

        // Loop through projects and add to the DOM
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project');
            projectItem.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;
            projectsList.appendChild(projectItem);
        });
    },

    // Show alert for empty project list (if needed)
    showAlert: function(message) {
        const alertContainer = document.getElementById('alert');
        alertContainer.innerHTML = `<div class="alert">${message}</div>`;
    }
};
