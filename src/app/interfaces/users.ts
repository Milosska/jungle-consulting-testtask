export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IUserByQuery {
  incomplete_results: boolean;
  items: IUser[];
  total_count: number;
}

export interface IRepo {
  name: string;
  description: string | null;
  language: string;
  has_issues: boolean;
  html_url: string;
}
