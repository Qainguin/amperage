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
            : git.remove({ ...repo, filepath }),
        ),
      ),
    );
}

export async function commitChanges(
  fs: PromisifiedFS,
  details: { name: string; email: string; message: string } = {
    name: "Qainguin",
    email: "qainguin@example.com",
    message: "Initial Commit",
  },
) {
  const repo = { fs, dir: `/${window.projectId}` };
  await git.commit({
    ...repo,
    author: {
      name: details.name,
      email: details.email,
    },
    message: details.message,
  });
}

export function getRepoNameFromUrl(url: string): string | null {
  // Return null if the input is not a string or is empty
  if (typeof url !== 'string' || !url.trim()) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    // Ensure the protocol is HTTP or HTTPS
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return null;
    }

    // Split the pathname and filter out any empty parts
    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);

    // The repository name should be the last part of the path
    let repoName = pathParts[pathParts.length - 1] || null;

    // Remove the ".git" extension if it exists
    if (repoName && repoName.toLowerCase().endsWith('.git')) {
      repoName = repoName.slice(0, -4);
    }

    return repoName;
  } catch (error) {
    // Catch invalid URL format errors
    return null;
  }
}