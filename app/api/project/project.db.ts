import { MongoDB } from '../../database/index';
import { Project } from './project.model';
import { ProjectKeys } from './project.model';
import { ProjectCollectionSchema } from './project.model';
const mongo = require('mongodb');

export class ProjectDB {
  static collection: string = 'project';
  private db: MongoDB;

  constructor() {
    this.db = new MongoDB(ProjectCollectionSchema, ProjectDB.collection);
  }

  public async getProjects() {
    const sort = {};
    sort[ProjectKeys.start_date] = -1;

    return this.db.searchDocuments({}, sort, ProjectDB.collection, true);
  }

  public async createProject(project: Project) {
    return this.db.insertDocument(project, ProjectDB.collection);
  }

  public async getProject(projectId: string) {
    const match = {};
    match[ProjectKeys._id] = new mongo.ObjectID(projectId);
    console.log(match);

    return this.db.searchDocuments(match, {}, ProjectDB.collection, true);
  }

  public async deleteProject(projectId: string) {
    const match = {};
    match[ProjectKeys._id] = new mongo.ObjectID(projectId);

    return this.db.deleteDocument(match, ProjectDB.collection);
  }
}
