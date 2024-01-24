import { IGithubUser } from "./types";

export const githubUserConvertor = (raw: any): IGithubUser => {
  const { login, type, avatar_url, score, id } = raw || {
    id: "",
    login: "",
    type: "",
    avatar_url: "",
    score: 0,
  };

  return {
    id,
    login,
    type,
    avatar_url,
    score,
  };
};
