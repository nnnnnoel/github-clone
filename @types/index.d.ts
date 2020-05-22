export interface User {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: numberl;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface AuthStoreImpl {
  accessToken: string;
  user: User | null;
  setAccessToken: (token: string) => void;
  setUser: (token: User | null) => void;
}

export interface Trend {}

export interface TrendStoreImpl {
  trends: Trend[];
  appendTrend: (trend: Trend | Trend[]) => void;
}

export interface Activity {
  title: string;
}

export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  avatar_url: string;
  url: string;
}

export interface Repository {
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null;
  hooks_url: string;
  html_url: string;
  id: number;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: null;
  languages_url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  merges_url: string;
  milestones_url: string;
  mirror_url: null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
  };
  private: boolean;
  public: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  updated_at: string;
  url: string;
  watchers: number;
  watchers_count: number;
}

export interface Organization {
  avatar_url: string;
  gravatar_id: string;
  id: number;
  login: string;
  url: string;
}

export interface History {
  actor: Actor;
  created_at: string;
  id: string;
  repo: {
    id: number;
    name: string;
    url: string;
  };
  public: boolean;
}

export interface CreateHistory extends History {
  type: 'CreateEvent';
  payload: {
    ref: null;
    ref_type: string;
    description: string;
    master_branch: string;
    pusher_type: string;
  };
}

export interface ForkHistory extends History {
  type: 'ForkEvent';
  payload: {
    forkee: Repository;
  };
  org: Organization;
}

export interface WatchHistory extends History {
  type: 'WatchEvent';
  payload: {
    action: string;
  };
  org: Organization;
}

export type TimelineHistory = CreateHistory | ForkHistory | WatchHistory;

export interface Timeline {
  activity: Activity[];
  history: TimelineHistory[];
}

export interface DashboardStoreImpl {
  timeline: Timeline;
  appendActivity: (activity: ConcatArray<Activity>) => void;
  appendHistory: (history: ConcatArray<TimelineHistory>) => void;
}
