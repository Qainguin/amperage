import type { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import git from "isomorphic-git";

let repo = {};

export async function initRepo(fs: PromisifiedFS) {
  const repo = { fs, dir: `/${window.projectId}` };
  await git.init(repo);
}

export async function stageChanges(fs: PromisifiedFS) {
  const repo = { fs, dir: `/${window.projectId}` };
  await git
    .statusMatrix(repo)
    .then((status) =>
      Promise.all(
        status.map(([filepath, , worktreeStatus]) =>
          worktreeStatus
            ? git.add({ ...repo, filepath })
            : git.remove({ ...repo, filepath })
        )
      )
    );
}

export async function commitChanges(
  fs: PromisifiedFS,
  message: string = "Initial Commit"
) {
  const repo = { fs, dir: `/${window.projectId}` };
  await git.commit({
    ...repo,
    author: {
      name: "Qainguin",
      email: "qainguin@example.com",
    },
    message,
  });
}
