# The Harfield Hub

Phase 1 and 2. Public directory, reading live from Supabase.

## Deploy

1. Push this folder to a GitHub repo
2. Import the repo in Vercel
3. Add these environment variables in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=https://ybpwiqcosuzjwvdmspgt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key>
NEXT_PUBLIC_SITE_NAME=The Harfield Hub
NEXT_PUBLIC_SUBURB_SLUG=harfield
```

4. Deploy. Point your domain at it.

## Run locally

```
npm install
npm run dev
```

.env.local is already filled in.

## What is built

- `/` directory with search, category filter, tier ranking
- `/b/[slug]` business page for Pro and Expert
- `/offers` live offers
- `/events` upcoming events
- `/join` pricing page

## What is next

Phase 3: accounts and the signup wizard
Phase 4: Paystack
Phase 5: page builder and admin approvals

## Cloning to another suburb

Change `NEXT_PUBLIC_SUBURB_SLUG` and `NEXT_PUBLIC_SITE_NAME`.
Add the suburb row in the database. Nothing else.

## Phase 3 — one setting you must change

Supabase dashboard → Authentication → Providers → Email
Turn OFF "Confirm email".

Without this, a business signs up and cannot finish their listing until
they check their inbox. With it off, they go straight through.

## Making yourself admin

After you sign up, run this in the Supabase SQL editor:

```sql
update public.profiles set role = 'admin' where email = 'your@email.com';
```

Then /admin/businesses opens for you.
