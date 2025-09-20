#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get command line arguments
const args = process.argv.slice(2);
const releaseType = args[0]; // 'patch', 'minor', 'major'

if (!releaseType || !['patch', 'minor', 'major'].includes(releaseType)) {
  console.error('Usage: node scripts/release.js [patch|minor|major]');
  process.exit(1);
}

try {
  // Read current package.json
  const packagePath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Get current version
  const currentVersion = packageJson.version;
  console.log(`Current version: ${currentVersion}`);
  
  // Bump version
  execSync(`npm version ${releaseType}`, { stdio: 'inherit' });
  
  // Read new version
  const newPackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const newVersion = newPackageJson.version;
  console.log(`New version: ${newVersion}`);
  
  // Create git tag
  const tagName = `v${newVersion}`;
  execSync(`git tag -a ${tagName} -m "Release version ${newVersion}"`, { stdio: 'inherit' });
  
  // Push changes and tags
  execSync('git push origin main', { stdio: 'inherit' });
  execSync(`git push origin ${tagName}`, { stdio: 'inherit' });
  
  console.log(`\n✅ Successfully released version ${newVersion}!`);
  console.log(`🏷️  Tag: ${tagName}`);
  console.log(`🚀 GitHub Actions will now build and deploy the release.`);
  
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}
