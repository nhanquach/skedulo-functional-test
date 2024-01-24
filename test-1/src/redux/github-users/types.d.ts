export interface IGithubUser {
  login: string;
  id: number;
  avatar_url: string;
  type: string;
  score: number;
}

export interface IGithubUsersState {
  users: IGithubUser[] | null;
  isLoading: boolean;
  error: string;
}
