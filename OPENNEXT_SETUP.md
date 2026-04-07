# OpenNext Cloudflare Setup

Your Next.js project has been successfully converted to use OpenNext for Cloudflare Workers deployment.

## What Changed

1. **Dependencies Updated**:
   - Upgraded Next.js from 14.2 to 16.2
   - Upgraded React from 18.3 to 19.2
   - Added `@opennextjs/cloudflare` adapter
   - Added `wrangler` CLI for Cloudflare deployment

2. **Configuration Files Created**:
   - `wrangler.json` - Cloudflare Workers configuration
   - `open-next.config.ts` - OpenNext caching configuration (R2)
   - `.dev.vars` - Local environment variables
   - `public/_headers` - Static asset caching headers
   - `cloudflare-env.d.ts` - TypeScript types for Cloudflare bindings

3. **Updated Files**:
   - `next.config.js` - Added `initOpenNextCloudflareForDev()`
   - `package.json` - Added deployment scripts
   - `.gitignore` - Added OpenNext build output and Cloudflare files

## Available Commands

```bash
# Local development with Next.js dev server
npm run dev

# Build for production
npm run build

# Preview in Cloudflare Workers runtime (local)
npm run preview

# Deploy to Cloudflare Workers
npm run deploy

# Upload as a version (doesn't deploy)
npm run upload

# Regenerate TypeScript types after wrangler.json changes
npm run cf-typegen
```

## Next Steps

1. **Login to Cloudflare** (if not already):
   ```bash
   npx wrangler login
   ```

2. **Test locally**:
   ```bash
   npm run preview
   ```

3. **Deploy to Cloudflare**:
   ```bash
   npm run deploy
   ```

## Accessing Cloudflare Bindings

Use `getCloudflareContext()` in your routes to access Cloudflare features:

```typescript
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: Request) {
  const { env, cf, ctx } = getCloudflareContext();
  
  // Access request info
  const country = cf?.country;
  
  // Use image optimization
  // Already configured via IMAGES binding
  
  return Response.json({ country });
}
```

## Configuration

- **Worker Name**: `lawify-nextjs`
- **Node.js Runtime**: Enabled (nodejs_compat)
- **Image Optimization**: Enabled (Cloudflare Images)
- **Caching**: R2 Incremental Cache (for ISR)

## Important Notes

- ✅ Uses Node.js runtime (not Edge runtime)
- ✅ Image optimization enabled via Cloudflare Images
- ✅ Static assets cached with proper headers
- ⚠️ Don't commit `.open-next/` directory (already in .gitignore)
- ⚠️ Don't commit `.dev.vars` file (already in .gitignore)

## Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers)
- [Next.js Docs](https://nextjs.org/docs)
