### Step 1 - Instalação e Setup do Supabase em Docker

# - bun add supabase

# - bun supabase init

# - bun supabase start

# - scripts:

// "supabase:start": "supabase start", // "supabase:gen-types": "bunx supabase gen types typescript --local > ./src/types/supabase.ts",

### Step 2 - Configuração de Auth

# - Gerar types para usar Database

# - Criar hooks do ServerClient & Browser & Router + Middleware

# - Fazer verificação no layout usando o getSession

# - Fazer Register + Auth-callback

# - Fazer Login

# - Fazer SignOut

### Step 3 - Explicar como replicar tabela profile

## - CODIGO:

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER AS $function$ begin insert into public.profiles (id, email, name) values (new.id, new.email, new.raw_user_meta_data->>'name'); return new; end; $function$
