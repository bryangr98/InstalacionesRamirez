const projects = [];

function addProject() {
  const title = document.getElementById('title').value;
  const image = document.getElementById('image').value;
  const description = document.getElementById('description').value;

  const project = {
    id: projects.length + 1,
    title,
    image,
    description
  };

  projects.push(project);

  saveProjects();
}

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}
