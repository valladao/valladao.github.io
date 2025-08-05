import { execSync } from "child_process"

const version = process.argv[2]
if (!version) {
  console.error("⚠️  Please provide a version: npm run deploy 0.1.0")
  process.exit(1)
}

try {
  console.log(`📦 Updating version to ${version}...`)
  execSync(`npm version ${version}`, { stdio: "inherit" })

  console.log("🚀 Pushing to GitHub...")
  execSync(`git push origin main --follow-tags`, { stdio: "inherit" })

  console.log(`✅ Deployment complete. Version v${version} released.`)
} catch (err) {
  console.error("❌ Error during deployment:", err)
  process.exit(1)
}
