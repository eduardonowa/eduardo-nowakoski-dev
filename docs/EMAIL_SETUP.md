# Professional Email Setup — eduardonowakoski.dev

This guide explains how to send and receive email as `contact@eduardonowakoski.dev` using your Namecheap domain.

## Recommended: Option A — ImprovMX + Gmail (free)

You keep using Gmail, but recruiters see your domain email on the portfolio and in signatures.

### 1. Create ImprovMX account

1. Go to [https://improvmx.com](https://improvmx.com)
2. Sign up and add domain: `eduardonowakoski.dev`
3. Create alias: `contact@eduardonowakoski.dev` → forward to your personal Gmail

### 2. Configure DNS on Namecheap

In **Namecheap → Domain List → Manage → Advanced DNS**, add:

| Type | Host | Value | Priority |
|------|------|-------|----------|
| MX | `@` | `mx1.improvmx.com` | 10 |
| MX | `@` | `mx2.improvmx.com` | 20 |

Remove conflicting MX records if any exist.

Wait up to 24h for propagation (usually much faster).

### 3. Send mail as your domain from Gmail

1. Gmail → **Settings** → **See all settings** → **Accounts and Import**
2. **Send mail as** → **Add another email address**
3. Name: `Eduardo Nowakoski`
4. Email: `contact@eduardonowakoski.dev`
5. SMTP server: `smtp.improvmx.com`
6. Port: `587`
7. Username: `contact@eduardonowakoski.dev`
8. Password: your ImprovMX SMTP password (from ImprovMX dashboard)
9. Verify via the confirmation email ImprovMX forwards to Gmail
10. Set as default **Send mail as** address (optional but recommended)

### 4. Update portfolio references

After verification works, confirm these files use the domain email:

- `lib/constants/contact.ts`
- GitHub profile README (`resumes/github-README.md`)

---

## Option B — Google Workspace (~US$6/month)

Best if you want a native Gmail inbox without SMTP configuration.

1. Sign up at [https://workspace.google.com](https://workspace.google.com)
2. Verify domain ownership via Namecheap DNS (TXT record)
3. Add MX records Google provides
4. Create user `contact@eduardonowakoski.dev`

---

## Option C — Zoho Mail (free tier)

1. Sign up at [https://www.zoho.com/mail/](https://www.zoho.com/mail/)
2. Add domain and verify via DNS
3. Create mailbox `contact@eduardonowakoski.dev`

---

## Verification checklist

- [x] Send a test email **to** `contact@eduardonowakoski.dev` from an external account
- [x] Reply **from** `contact@eduardonowakoski.dev` and confirm the From header
- [ ] Update LinkedIn contact email to match
- [ ] Update GitHub profile email (optional: keep private, show on README only)

---

## Troubleshooting

**Emails not arriving:** Check MX records with [https://mxtoolbox.com](https://mxtoolbox.com)

**Gmail SMTP auth fails:** Regenerate ImprovMX SMTP password; use port 587 with STARTTLS

**Spam folder:** Add SPF record ImprovMX provides in your DNS panel
