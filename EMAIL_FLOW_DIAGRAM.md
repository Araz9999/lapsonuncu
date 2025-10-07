# Email Confirmation System - Flow Diagrams

## 📧 Registration & Email Verification Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER REGISTRATION FLOW                       │
└─────────────────────────────────────────────────────────────────┘

    User                    Frontend                Backend              SendGrid
     │                         │                       │                    │
     │  1. Fill Registration   │                       │                    │
     │  Form & Submit          │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  2. POST /auth/       │                    │
     │                         │     register          │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │                         │                       │  3. Create User    │
     │                         │                       │     (unverified)   │
     │                         │                       │                    │
     │                         │                       │  4. Generate       │
     │                         │                       │     Token          │
     │                         │                       │                    │
     │                         │                       │  5. Send           │
     │                         │                       │     Verification   │
     │                         │                       │     Email          │
     │                         │                       ├───────────────────>│
     │                         │                       │                    │
     │                         │  6. Return Success    │                    │
     │                         │     + JWT Tokens      │                    │
     │                         │<──────────────────────┤                    │
     │                         │                       │                    │
     │  7. Show Success        │                       │                    │
     │     Message             │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
     │                         │                       │  8. Email Sent     │
     │  9. Receive Email       │                       │                    │
     │<────────────────────────┼───────────────────────┼────────────────────┤
     │                         │                       │                    │
     │  10. Click "Təsdiqlə"   │                       │                    │
     │      Link               │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  11. GET /auth/       │                    │
     │                         │      verify-email     │                    │
     │                         │      ?token=xxx       │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │                         │                       │  12. Verify Token  │
     │                         │                       │      Mark as       │
     │                         │                       │      Verified      │
     │                         │                       │                    │
     │                         │                       │  13. Send Welcome  │
     │                         │                       │      Email         │
     │                         │                       ├───────────────────>│
     │                         │                       │                    │
     │                         │  14. Return Success   │                    │
     │                         │<──────────────────────┤                    │
     │                         │                       │                    │
     │  15. Show Success       │                       │                    │
     │      Page               │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
     │  16. Receive Welcome    │                       │                    │
     │      Email              │                       │                    │
     │<────────────────────────┼───────────────────────┼────────────────────┤
     │                         │                       │                    │
     │  17. Redirect to Home   │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
```

## 🔐 Password Reset Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     PASSWORD RESET FLOW                          │
└─────────────────────────────────────────────────────────────────┘

    User                    Frontend                Backend              SendGrid
     │                         │                       │                    │
     │  1. Click "Forgot       │                       │                    │
     │     Password"           │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │  2. Enter Email         │                       │                    │
     │     Address             │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  3. POST /auth/       │                    │
     │                         │     forgot-password   │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │                         │                       │  4. Find User      │
     │                         │                       │     by Email       │
     │                         │                       │                    │
     │                         │                       │  5. Generate       │
     │                         │                       │     Reset Token    │
     │                         │                       │     (1h expiry)    │
     │                         │                       │                    │
     │                         │                       │  6. Send Reset     │
     │                         │                       │     Email          │
     │                         │                       ├───────────────────>│
     │                         │                       │                    │
     │                         │  7. Return Success    │                    │
     │                         │<──────────────────────┤                    │
     │                         │                       │                    │
     │  8. Show "Check Email"  │                       │                    │
     │     Message             │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
     │  9. Receive Reset       │                       │                    │
     │     Email               │                       │                    │
     │<────────────────────────┼───────────────────────┼────────────────────┤
     │                         │                       │                    │
     │  10. Click "Sıfırla"    │                       │                    │
     │      Link               │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  11. GET /auth/       │                    │
     │                         │      reset-password   │                    │
     │                         │      ?token=xxx       │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │  12. Enter New          │                       │                    │
     │      Password           │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  13. POST /auth/      │                    │
     │                         │      reset-password   │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │                         │                       │  14. Verify Token  │
     │                         │                       │      Update        │
     │                         │                       │      Password      │
     │                         │                       │                    │
     │                         │  15. Return Success   │                    │
     │                         │<──────────────────────┤                    │
     │                         │                       │                    │
     │  16. Show Success       │                       │                    │
     │      & Redirect         │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
     │  17. Login with New     │                       │                    │
     │      Password           │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
```

## 🔄 Resend Verification Email Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  RESEND VERIFICATION FLOW                        │
└─────────────────────────────────────────────────────────────────┘

    User                    Frontend                Backend              SendGrid
     │                         │                       │                    │
     │  1. Click "Resend       │                       │                    │
     │     Verification"       │                       │                    │
     ├────────────────────────>│                       │                    │
     │                         │                       │                    │
     │                         │  2. POST /auth/       │                    │
     │                         │     resend-           │                    │
     │                         │     verification      │                    │
     │                         │     (with JWT)        │                    │
     │                         ├──────────────────────>│                    │
     │                         │                       │                    │
     │                         │                       │  3. Check if       │
     │                         │                       │     Already        │
     │                         │                       │     Verified       │
     │                         │                       │                    │
     │                         │                       │  4. Generate New   │
     │                         │                       │     Token          │
     │                         │                       │                    │
     │                         │                       │  5. Send New       │
     │                         │                       │     Verification   │
     │                         │                       │     Email          │
     │                         │                       ├───────────────────>│
     │                         │                       │                    │
     │                         │  6. Return Success    │                    │
     │                         │<──────────────────────┤                    │
     │                         │                       │                    │
     │  7. Show "Email Sent"   │                       │                    │
     │     Message             │                       │                    │
     │<────────────────────────┤                       │                    │
     │                         │                       │                    │
     │  8. Receive New         │                       │                    │
     │     Verification Email  │                       │                    │
     │<────────────────────────┼───────────────────────┼────────────────────┤
     │                         │                       │                    │
```

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     SYSTEM COMPONENTS                            │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│   React Native   │
│   Frontend App   │
│                  │
│  - Registration  │
│  - Login         │
│  - Verification  │
│  - Password      │
│    Reset         │
└────────┬─────────┘
         │
         │ tRPC API Calls
         │
         ▼
┌──────────────────┐
│   Hono Backend   │
│   + tRPC         │
│                  │
│  Routes:         │
│  - auth.register │
│  - auth.login    │
│  - auth.verify   │
│  - auth.forgot   │
│  - auth.reset    │
└────────┬─────────┘
         │
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────────┐
│  User   │ │   Email      │
│  DB     │ │   Service    │
│         │ │              │
│ - Users │ │ - SendGrid   │
│ - Tokens│ │ - Templates  │
│ - Index │ │ - Sending    │
└─────────┘ └──────┬───────┘
                   │
                   │ HTTPS API
                   │
                   ▼
            ┌──────────────┐
            │   SendGrid   │
            │   Service    │
            │              │
            │ - Email      │
            │   Delivery   │
            │ - Analytics  │
            └──────────────┘
```

## 🔐 Security Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     SECURITY MEASURES                            │
└─────────────────────────────────────────────────────────────────┘

Registration
    │
    ├─> Password Hashing (SHA-256)
    │
    ├─> Token Generation (Crypto Random 32 bytes)
    │
    ├─> Token Expiry (24 hours)
    │
    └─> JWT Authentication

Verification
    │
    ├─> Token Validation
    │
    ├─> Expiry Check
    │
    ├─> One-time Use
    │
    └─> Mark as Verified

Password Reset
    │
    ├─> Separate Reset Token
    │
    ├─> Short Expiry (1 hour)
    │
    ├─> Token Validation
    │
    └─> Password Re-hash
```

## 📧 Email Templates

```
┌─────────────────────────────────────────────────────────────────┐
│                     EMAIL TEMPLATES                              │
└─────────────────────────────────────────────────────────────────┘

1. Verification Email
   ├─> Subject: "Email Təsdiqi - NaxtaPaz"
   ├─> Language: Azerbaijani
   ├─> Contains: Verification link (24h)
   ├─> Design: HTML + Plain text
   └─> Footer: Contact info

2. Welcome Email
   ├─> Subject: "Xoş Gəlmisiniz - NaxtaPaz"
   ├─> Language: Azerbaijani
   ├─> Contains: Platform features
   ├─> Design: HTML + Plain text
   └─> Footer: Contact info

3. Password Reset Email
   ├─> Subject: "Şifrə Sıfırlama - NaxtaPaz"
   ├─> Language: Azerbaijani
   ├─> Contains: Reset link (1h)
   ├─> Design: HTML + Plain text
   ├─> Warning: Security alert
   └─> Footer: Contact info
```

## 🎯 Success Criteria

```
✅ User Registration
   └─> Email sent within 5 seconds
   
✅ Email Delivery
   └─> 99%+ delivery rate
   
✅ Verification
   └─> One-click verification
   
✅ Security
   └─> Tokens expire properly
   
✅ User Experience
   └─> Clear error messages
   └─> Smooth redirects
   └─> Mobile-friendly
```

---

**Note**: All flows are implemented and tested. The system is production-ready!
