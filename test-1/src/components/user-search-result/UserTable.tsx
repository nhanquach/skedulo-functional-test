import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { IGithubUser } from "../../redux/github-users/types";

const UserTable = () => {
  const users = useSelector<RootState, IGithubUser[] | null>(
    (state: RootState) => state.githubUsers.users
  );

  if (!users) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>avatar_url</td>
          <td>login</td>
          <td>type</td>
          <td>score</td>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 && (
          <tr>
            <td colSpan={4} className="data-no-user">
              No users found
            </td>
          </tr>
        )}

        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td className="data-avatar_url">
                <img src={user.avatar_url} alt={user.login} width={50} />
              </td>
              <td className="data-login">{user.login}</td>
              <td className="data-type">{user.type}</td>
              <td className="data-score">{user.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
