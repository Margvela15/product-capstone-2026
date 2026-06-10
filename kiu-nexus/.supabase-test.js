const fs = require('fs');
const path = require('path');
const envFile = path.resolve(process.cwd(), '.env.local');
const envText = fs.existsSync(envFile) ? fs.readFileSync(envFile, 'utf8') : '';
const env = {};
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^\s*([^#][^=]+)=(.*)$/);
  if (m) env[m[1].trim()] = m[2].trim();
}
if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('Missing env vars');
  process.exit(1);
}
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const email = 'test+' + Date.now() + '@example.com';
const password = 'Password123!';
console.log('Testing signUp with', email);
supabase.auth.signUp({
  email,
  password,
  options: { data: { full_name: 'Test User' } },
})
  .then((result) => {
    console.log('RESULT', JSON.stringify(result, null, 2));
    process.exit(0);
  })
  .catch((err) => {
    console.error('ERROR', err);
    process.exit(1);
  });
