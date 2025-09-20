#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

// Generate changelog from git commits
function generateChangelog() {
  try {
    // Get git log for the last release
    const lastTag = execSync('git describe --tags --abbrev=0 HEAD^ 2>/dev/null || echo ""', { encoding: 'utf8' }).trim();
    const gitLogCmd = lastTag 
      ? `git log ${lastTag}..HEAD --pretty=format:"- %s (%h)"`
      : 'git log --pretty=format:"- %s (%h)" --max-count=20';
    
    const commits = execSync(gitLogCmd, { encoding: 'utf8' });
    
    // Read current package.json for version
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const version = packageJson.version;
    
    // Generate changelog content
    const changelogContent = `# Changelog

## [${version}] - ${new Date().toISOString().split('T')[0]}

### Changes
${commits}

### Technical Details
- Built with Vite ${getViteVersion()}
- React ${getReactVersion()}
- TypeScript support
`;

    // Write to CHANGELOG.md
    fs.writeFileSync('CHANGELOG.md', changelogContent);
    console.log('✅ Changelog generated successfully!');
    
  } catch (error) {
    console.error('❌ Failed to generate changelog:', error.message);
  }
}

function getViteVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.devDependencies.vite || 'unknown';
  } catch {
    return 'unknown';
  }
}

function getReactVersion() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.dependencies.react || 'unknown';
  } catch {
    return 'unknown';
  }
}

generateChangelog();
