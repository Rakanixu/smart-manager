import { ProjectDB } from './project.db';
import { Project } from './project.model';

const projectDB = new ProjectDB();

export async function getProjects() {
  return projectDB.getProjects();
}

export async function createProject(project: Project) {
  return projectDB.createProject(project);
}

export async function getProject(ProjectEmail: string) {
  return projectDB.getProject(ProjectEmail);
}

export async function deleteProject(ProjectEmail: string) {
  return projectDB.deleteProject(ProjectEmail);
}
