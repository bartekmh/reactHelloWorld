# Release Guide

This document explains how to release new versions of the React Hello World application using GitLab CI/CD.

## Release Process

### Automatic Releases via GitLab CI/CD

The project is configured with GitLab CI/CD for automated building, testing, and releasing.

#### How it works:

1. **Create a Git tag** with semantic versioning (e.g., `v1.0.0`, `v1.0.1`, `v2.0.0`)
2. **Push the tag** to the GitLab repository
3. **GitLab CI/CD automatically**:
   - Installs dependencies
   - Builds the project with TypeScript and Vite
   - Runs tests (when configured)
   - Creates a GitLab Release with build artifacts
   - Deploys to GitLab Pages

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
- Push both commit and tag to GitLab
- Trigger the CI/CD pipeline

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

The GitLab CI/CD pipeline includes these stages:

1. **Install**: Install dependencies with caching
2. **Build**: Compile TypeScript and build with Vite
3. **Test**: Run tests (when configured)
4. **Release**: Create GitLab Release with artifacts
5. **Deploy**: Deploy to GitLab Pages

### Deployment

- **Main branch**: Automatically deploys to GitLab Pages
- **Release tags**: Creates downloadable release artifacts
- **Staging**: Manual deployment from develop branch
- **Production**: Manual deployment from release tags

### GitLab Pages URL

Your application will be available at:
```
https://[username].gitlab.io/[project-name]
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
- Check GitLab CI/CD permissions
- Verify pipeline completed successfully

#### Deployment issues:
- Check GitLab Pages settings
- Verify build artifacts exist
- Check repository visibility settings

### Configuration Files

- `.gitlab-ci.yml`: GitLab CI/CD configuration
- `scripts/release.js`: Release automation script
- `scripts/changelog.js`: Changelog generation
- `vite.config.ts`: Vite build configuration
- `package.json`: Project metadata and scripts
