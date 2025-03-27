const controller = {
    // Show About Section
    showAbout: function() {
        const aboutText = model.getAboutText();
        if (aboutText) {
            view.renderAboutText(aboutText);
        } else {
            view.showAlert('About text is not available.');
        }
    },

    // Show Projects Section
    showProjects: function() {
        const projects = model.getProjects();
        if (projects.length > 0) {
            view.renderProjects(projects);
        } else {
            view.showAlert('No projects available.');
        }
    },

    // Initialize the page (Default View)
    initialize: function() {
        this.showAbout();
        this.showProjects();
    },

    // Update About Text (From View)
    updateAboutText: function(newText) {
        model.updateAboutText(newText);
        this.showAbout();
    },

    // Add a New Project (From View)
    addNewProject: function(name, description) {
        model.addProject(name, description);
        this.showProjects();
    }
};

// Initialize the default view on load
window.onload = function() {
    controller.initialize();
};
