const model = {
    aboutText: "I am a passionate developer specializing in frontend and backend technologies. I enjoy solving problems and creating innovative solutions using modern frameworks and tools.",

    projects: [
        { name: "Project One", description: "A full-stack web app built with React.js and Node.js" },
        { name: "Project Two", description: "A mobile app developed using React Native" },
        { name: "Project Three", description: "A machine learning project using TensorFlow" }
    ],

    // Fetch About Text
    getAboutText: function() {
        return this.aboutText;
    },

    // Fetch All Projects
    getProjects: function() {
        return this.projects;
    },

    // Add a new project
    addProject: function(name, description) {
        this.projects.push({ name, description });
    },

    // Update About Text
    updateAboutText: function(newText) {
        this.aboutText = newText;
    }
};
