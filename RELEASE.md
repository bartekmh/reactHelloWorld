# Release Guide

This document explains how to release new versions of the React Hello World application using GitHub Actions.

## Release Process

### Automatic Releases via GitHub Actions

The project is configured with GitHub Actions for automated building, testing, and releasing.

#### How it works:

1. **Create a Git tag** with semantic versioning (e.g., `v1.0.0`, `v1.0.1`, `v2.0.0`)
2. **Push the tag** to the GitHub repository
3. **GitHub Actions automatically**:
   - Installs dependencies
   - Builds the project with TypeScript and Vite
   - Runs tests (when configured)
   - Creates a GitHub Release with build artifacts
   - Deploys to GitHub Pages

### Manual Release Commands

You can use the provided npm scripts to create releases:

```bash
# Patch release (bug fixes): 0.0.0 → 0.0.1
npm run release:patch

# Minor release (new features): 0.0.1 → 0.1.0
npm run release:minor

# Major release (breaking changes): 0.1.0 → 1.0.0
npm run release:major
```

These scripts will:
- Bump the version in `package.json`
- Create a git commit with the version bump
- Create a git tag (e.g., `v1.0.0`)
  - Push both commit and tag to GitHub
  - Trigger the GitHub Actions workflow

### Manual Git Tag Release

Alternatively, you can create releases manually:

```bash
# 1. Update version in package.json manually
# 2. Commit changes
git add package.json
git commit -m "chore: bump version to 1.0.0"

# 3. Create and push tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main
git push origin v1.0.0
```

### Release Stages

The GitHub Actions workflow includes these jobs:

1. **Install**: Install dependencies with caching
2. **Build**: Compile TypeScript and build with Vite
3. **Test**: Run tests (when configured)
4. **Release**: Create GitHub Release with artifacts
5. **Deploy**: Deploy to GitHub Pages

### Deployment

- **Main branch**: Automatically deploys to GitHub Pages
- **Release tags**: Creates downloadable release artifacts
- **Staging**: Manual deployment from develop branch
- **Production**: Manual deployment from release tags

### GitHub Pages URL

Your application will be available at:
```
https://[username].github.io/[repository-name]
```

### Release Notes

Each release automatically includes:
- Version information
- Build details
- Downloadable artifacts
- Commit information

### Troubleshooting

#### Build fails:
- Check TypeScript compilation errors
- Verify all dependencies are installed
- Check Vite configuration

#### Release not created:
- Ensure tag follows semantic versioning (v1.0.0)
- Check GitHub Actions permissions
- Verify workflow completed successfully

#### Deployment issues:
- Check GitHub Pages settings in repository settings
- Verify build artifacts exist
- Check repository visibility settings
- Ensure GitHub Pages is enabled for the repository

#### "Cannot find any run with github.run_id" error:
- This usually happens when GitHub Pages environment is not properly configured
- Go to **Settings** → **Environments** → Create `github-pages` environment if it doesn't exist
- Make sure the environment has proper permissions (Pages: Write, Actions: Read)
- Try pushing a new commit to trigger the workflow again

### Configuration Files

- `.github/workflows/deploy.yml`: GitHub Actions workflow configuration
- `scripts/release.js`: Release automation script
- `scripts/changelog.js`: Changelog generation
- `vite.config.ts`: Vite build configuration
- `package.json`: Project metadata and scripts

### GitHub Pages Setup

The workflow includes two deployment methods:

#### Method 1: GitHub Actions Pages (Recommended)
1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when pushing to `main` branch

#### Method 2: gh-pages branch (Backup)
If GitHub Actions Pages fails, the workflow will also deploy to a `gh-pages` branch:
1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select `gh-pages` branch and `/ (root)` folder
4. Save the settings

**Important Notes:**
- Make sure the repository has proper permissions enabled
- For first-time setup, you may need to manually trigger the workflow
- The backup method creates a `gh-pages` branch automatically

### Required Repository Permissions

Make sure your repository has the following permissions enabled:
- **Actions**: Read and write permissions
- **Contents**: Read and write permissions  
- **Pages**: Write permissions
- **Pull requests**: Read permissions
