# Branch Protection Configuration

This document describes the branch protection rules configured for the `main` branch of the nicholasdudek/camscdlcenter repository.

## Overview

Branch protection rules help prevent accidental changes to important branches and enforce best practices for code review and collaboration.

## Configuration Files

Branch protection for this repository is managed through the following files:

1. **`.github/settings.yml`** - Main configuration file (Probot Settings compatible)
2. **`.github/CODEOWNERS`** - Defines code ownership and review requirements
3. **`.github/workflows/branch-protection.yml`** - Validates configuration on every push/PR

## Protection Rules for `main` Branch

### Essential Protections

#### 1. Require Pull Request Reviews Before Merging
- **Enabled**: Yes
- **Required approving reviews**: 1 (suitable for solo development)
- **Dismiss stale reviews**: Yes (new commits invalidate previous approvals)
- **Require code owner reviews**: No (can be enabled if needed)

**Impact**: All changes to `main` must go through a pull request and receive at least one approval before merging.

#### 2. Require Status Checks to Pass Before Merging
- **Enabled**: Yes
- **Strict mode**: Yes (branches must be up-to-date with base)
- **Required checks**:
  - `Validate Branch Protection` - Ensures configuration files are present and valid

**Impact**: Pull requests cannot be merged until all required CI checks pass.

#### 3. Require Conversation Resolution Before Merging
- **Enabled**: Yes

**Impact**: All review comments and conversations must be resolved before a PR can be merged.

#### 4. Prevent Force Pushes
- **Enabled**: Yes (`allow_force_pushes: false`)

**Impact**: Force pushes to `main` are blocked, preventing accidental history rewrites.

#### 5. Prevent Branch Deletion
- **Enabled**: Yes (`allow_deletions: false`)

**Impact**: The `main` branch cannot be accidentally deleted.

### Optional Settings (Current Configuration)

- **Require signed commits**: No (can be enabled if GPG signing is configured)
- **Require linear history**: No (allows merge commits)
- **Enforce for administrators**: No (allows repository owner to bypass rules if needed)

## How to Apply These Settings

### Option 1: Using Probot Settings (Recommended)

1. Install the [Probot Settings GitHub App](https://github.com/apps/settings) on your repository
2. The app will automatically read `.github/settings.yml` and apply the configuration
3. Changes to `.github/settings.yml` will be automatically synchronized

### Option 2: Manual Configuration via GitHub Web UI

If you prefer to configure manually or don't want to use Probot Settings:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Branches**
3. Click **Add branch protection rule**
4. Configure the following settings for the `main` branch:
   - ✅ Require a pull request before merging
     - Required approvals: 1
     - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
     - ✅ Require branches to be up to date before merging
     - Add status check: `Validate Branch Protection`
   - ✅ Require conversation resolution before merging
   - ✅ Do not allow bypassing the above settings (optional)
   - ✅ Restrict who can push to matching branches (if needed)
   - In the "Rules applied to everyone including administrators" section:
     - ✅ Allow force pushes: **Disabled**
     - ✅ Allow deletions: **Disabled**

### Option 3: Using GitHub CLI

```bash
# This requires additional GitHub API configuration
gh api repos/nicholasdudek/camscdlcenter/branches/main/protection \
  --method PUT \
  --field required_pull_request_reviews[required_approving_review_count]=1 \
  --field required_pull_request_reviews[dismiss_stale_reviews]=true \
  --field enforce_admins=false \
  --field required_status_checks[strict]=true \
  --field required_status_checks[contexts][]=Validate\ Branch\ Protection \
  --field restrictions=null
```

## Workflow for Contributing

With these branch protection rules in place, the typical workflow is:

1. **Create a feature branch** from `main`
   ```bash
   git checkout main
   git pull
   git checkout -b feature/my-feature
   ```

2. **Make your changes** and commit them
   ```bash
   git add .
   git commit -m "Description of changes"
   git push -u origin feature/my-feature
   ```

3. **Create a pull request** on GitHub
   - Go to the repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Select your feature branch
   - Fill in the PR description

4. **Wait for status checks** to pass
   - GitHub Actions will run the `Validate Branch Protection` workflow
   - Ensure all checks are green

5. **Request review** (if working with others)
   - Request review from @nicholasdudek or other collaborators

6. **Address feedback**
   - Respond to comments
   - Make requested changes
   - Mark conversations as resolved

7. **Merge the PR** once approved
   - All conversations resolved ✓
   - All status checks passed ✓
   - Required approvals received ✓
   - Click "Merge pull request"

## Solo Developer Considerations

For solo development, this configuration provides:

- **Protection against accidents**: Can't force push or delete `main`
- **Code review discipline**: Encourages reviewing your own changes in PR format
- **CI/CD integration**: Automated checks run before merging
- **Flexibility**: `enforce_admins: false` allows bypassing rules when absolutely necessary

You can approve your own PRs (GitHub allows this for repository owners), but you still get the benefit of:
- Reviewing changes in PR format
- Running automated checks
- Maintaining a clean, linear history
- Documentation of why changes were made

## Verifying Protection Rules

### Via GitHub Web UI
1. Go to **Settings** → **Branches**
2. Look for the `main` branch protection rule
3. Verify all settings match this document

### Via GitHub CLI
```bash
gh api repos/nicholasdudek/camscdlcenter/branches/main/protection
```

### Via GitHub Actions
The `Validate Branch Protection` workflow runs on every push and PR to ensure configuration files are present and valid.

## Troubleshooting

### "Required status check is not yet configured"
- Make sure the `Validate Branch Protection` workflow has run at least once
- The status check will appear after the first workflow run

### "Review required but no reviewers configured"
- Repository owners can approve their own PRs
- Alternatively, temporarily disable the review requirement for urgent fixes

### "Cannot force push to protected branch"
- This is expected behavior and protects against accidental history rewrites
- If you must force push, temporarily disable branch protection (not recommended)

## Maintenance

- **Updating rules**: Edit `.github/settings.yml` and commit to update protection rules
- **Adding status checks**: Add new workflow names to the `contexts` array in `.github/settings.yml`
- **Reviewing configuration**: The validation workflow runs automatically to check configuration

## References

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [Probot Settings](https://github.com/probot/settings)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Last Updated**: 2026-02-13  
**Maintained By**: @nicholasdudek
