# Branch Protection Policy

## Overview

This document outlines the branch protection policy for the Cam's CDL Center website repository. Branch protection helps maintain code quality, prevent accidental changes, and ensure proper review processes.

## Protected Branches

### Main Branch (`main`)

The `main` branch is the primary branch containing the production code for the website. It is protected with the following rules:

#### Protection Rules

1. **No Direct Pushes**
   - All changes must be made through pull requests
   - Direct commits to `main` are not allowed

2. **Required Pull Request Reviews**
   - At least 1 approving review is required before merging
   - Stale reviews are dismissed when new commits are pushed
   - Code owners are automatically requested for review

3. **No Force Pushes**
   - Force pushes (`git push --force`) are blocked
   - This prevents accidental history rewrites

4. **No Branch Deletion**
   - The `main` branch cannot be deleted
   - This ensures the production branch is always available

5. **Status Checks** (Optional)
   - If CI/CD workflows are configured, they must pass before merging
   - Branches should be up to date with `main` before merging

## How to Contribute

### Making Changes

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Edit files as needed
   - Test your changes locally
   - Commit with descriptive messages

3. **Push Your Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Add a clear title and description
   - Request review from code owners

5. **Address Review Feedback**
   - Make requested changes
   - Push updates to your branch
   - Reviews will be re-requested automatically

6. **Merge When Approved**
   - Once approved, merge your pull request
   - The branch will be automatically deleted after merge

### Best Practices

- **Small, Focused Changes**: Keep pull requests small and focused on a single feature or fix
- **Clear Descriptions**: Write clear commit messages and PR descriptions
- **Test Before Submitting**: Verify your changes work correctly before creating a PR
- **Respond to Feedback**: Address review comments promptly and professionally
- **Keep Updated**: Regularly sync your branch with `main` to avoid conflicts

## Configuration Files

This repository includes the following configuration files for branch protection:

### `.github/settings.yml`

This file contains repository settings and branch protection rules that can be automatically applied using the [Probot Settings](https://github.com/probot/settings) GitHub App.

Key settings:
- Repository metadata and features
- Branch protection rules for `main`
- Merge settings and options

### `.github/CODEOWNERS`

This file defines code ownership, automatically requesting reviews from designated owners when pull requests are created.

Current owners:
- Repository owner: @nicholasdudek

## Configuring Branch Protection in GitHub

While the configuration files provide a template, branch protection must be enabled in GitHub's repository settings:

1. Go to **Settings** → **Branches**
2. Click **Add rule** under "Branch protection rules"
3. Enter `main` as the branch name pattern
4. Configure the following settings:

   ✅ **Require a pull request before merging**
   - ✅ Require approvals: 1
   - ✅ Dismiss stale pull request approvals when new commits are pushed

   ✅ **Require status checks to pass before merging** (if CI/CD is configured)
   - ✅ Require branches to be up to date before merging

   ✅ **Do not allow bypassing the above settings**

   ✅ **Restrict who can push to matching branches** (optional)

   ✅ **Block force pushes**

   ✅ **Prevent deletion of branches**

4. Click **Create** or **Save changes**

## Alternative: Using GitHub Rulesets

For more advanced scenarios, consider using [GitHub Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets):

1. Go to **Settings** → **Rules** → **Rulesets**
2. Click **New ruleset** → **New branch ruleset**
3. Configure rules similar to branch protection
4. Rulesets offer additional features like bypass permissions and evaluation insights

## Compliance and Security

Branch protection is essential for:

- **Code Quality**: Ensures all changes are reviewed
- **Security**: Prevents unauthorized or accidental changes
- **Compliance**: Meets industry standards (SOC2, etc.)
- **Audit Trail**: Maintains a clear history of changes and approvals
- **Team Collaboration**: Facilitates proper code review processes

## Support

For questions or issues with branch protection:
- Review [GitHub's Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- Contact the repository administrator: @nicholasdudek
- Open an issue in the repository

## References

- [GitHub Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
- [GitHub CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Probot Settings](https://github.com/probot/settings)
- [GitHub Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets)

---

**Last Updated:** February 2026
**Maintained By:** Cam's CDL Center Development Team
