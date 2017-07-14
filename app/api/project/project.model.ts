export interface Project {
  _id?: string;
  name: string;
  members: string[];
  active: boolean;
  start_date: number;
  description?: string;
  goal?: string;
  avatar?: string;
  end_date?: number;
}

export const ProjectKeys = {
  _id: '_id',
  name: 'name',
  members: 'members',
  active: 'active',
  start_date: 'start_date',
  description: 'description',
  goal: 'goal',
  avatar: 'avatar',
  end_date: 'end_date'
};

export const ProjectCollectionSchema = {
  validator: {
      $and: [
        { 'name': { $type: 'string', $exists: true }},
        { 'active': { $type: 'bool', $exists: true }},
        { 'start_date': { $type: 'number', $exists: true }}
      ]
  }
};
// { 'members': { $type: 'array', $exists: true }},
