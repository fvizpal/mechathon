<h1 align="center">BaatCheet</h1>
<p align="center">
Pour your heart out
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/fvizpal/mechathon.git
```

2. Intall dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tech stack
1. Next.js
2. Prisma
3. Socketio
4. ShadcnUI
5. TailwindCSS
6. Express
7. Nodejs
8. Typescript

## Features
1. Login and signup using credentials and Google OAuth
2. Email Verification and password reset functionality
3. Creation of communities
4. Creation of Groups within communities
5. Invite others with community share link
6. Manage members by changing their roles(ADMIN, MODERATOR, GUEST)
7. Kick a member 
8. Search functionality for ease of access
9. Realtime chat functionality
10. Image and pdf transfer
11. Realtime collaborative drawing functionality
12. Edit and delete communities and groups
13. Manage profile with user settings

## Folder structure

```
src
│   types.ts
│
├───app
│   │   favicon.ico
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │
│   ├───(land)
│   │   ├───about
│   │   │       page.tsx
│   │   │
│   │   ├───blog
│   │   │       page.tsx
│   │   │
│   │   └───contact
│   │           page.tsx
│   │
│   ├───(main)
│   │   │   layout.tsx
│   │   │
│   │   └───community
│   │       └───[communityId]
│   │           │   layout.tsx
│   │           │   page.tsx
│   │           │
│   │           └───groups
│   │               └───[groupId]
│   │                       page.tsx
│   │
│   ├───api
│   │   ├───auth
│   │   │   └───[...nextauth]
│   │   │           route.ts
│   │   │
│   │   ├───communities
│   │   │   │   route.ts
│   │   │   │
│   │   │   └───[communityId]
│   │   │       │   route.ts
│   │   │       │
│   │   │       ├───invite
│   │   │       │       route.ts
│   │   │       │
│   │   │       └───leave
│   │   │               route.ts
│   │   │
│   │   ├───groups
│   │   │   │   route.ts
│   │   │   │
│   │   │   └───[groupId]
│   │   │           route.ts
│   │   │
│   │   ├───members
│   │   │   └───[memberId]
│   │   │           route.ts
│   │   │
│   │   ├───messages
│   │   │       route.ts
│   │   │
│   │   ├───pusher-auth
│   │   │       route.ts
│   │   │
│   │   └───uploadthing
│   │           core.ts
│   │           route.ts
│   │
│   ├───auth
│   │   ├───new-password
│   │   │       page.tsx
│   │   │
│   │   ├───new-verification
│   │   │       page.tsx
│   │   │
│   │   └───reset
│   │           page.tsx
│   │
│   ├───invite
│   │   └───[inviteCode]
│   │           page.tsx
│   │
│   └───onboard
│           page.tsx
│
├───components
│   ├───chat
│   │       ChatHeader.tsx
│   │       ChatInput.tsx
│   │       ChatMessages.tsx
│   │       VideoPlayer.tsx
│   │
│   ├───community
│   │       CommunityGroup.tsx
│   │       CommunityHeader.tsx
│   │       CommunitySection.tsx
│   │       CommunitySidebar.tsx
│   │       CommunitySidebarSearch.tsx
│   │       SidebarMember.tsx
│   │
│   ├───draw
│   │       DrawPage.tsx
│   │
│   ├───modals
│   │       AuthModal.tsx
│   │       CreateCommunityModal.tsx
│   │       CreateGroupModal.tsx
│   │       DeleteCommunityModal.tsx
│   │       DeleteGroupModal.tsx
│   │       EditCommunity.tsx
│   │       EditGroupModal.tsx
│   │       InviteModal.tsx
│   │       LeaveCommunityModal.tsx
│   │       MemberModal.tsx
│   │       MessageFileModal.tsx
│   │       OnboardModal.tsx
│   │       UserSettings.tsx
│   │
│   ├───navigation
│   │       NavAddCommunity.tsx
│   │       NavigationItem.tsx
│   │       NavigationSidebar.tsx
│   │
│   ├───providers
│   │       modalProvider.tsx
│   │       socketProvider.tsx
│   │       themeProvider.tsx
│   │
│   ├───shared
│   │       CheckModal.tsx
│   │       EnterButton.tsx
│   │       FileUploader.tsx
│   │       Footer.tsx
│   │       FormError.tsx
│   │       FormSuccess.tsx
│   │       LoginForm.tsx
│   │       LogoutButton.tsx
│   │       MobileToggle.tsx
│   │       ModeToggle.tsx
│   │       NewPasswordForm.tsx
│   │       NewVerificationForm.tsx
│   │       PortFolio1.tsx
│   │       PortFolio2.tsx
│   │       PortFolio3.tsx
│   │       PortFolio4.tsx
│   │       RegisterForm.tsx
│   │       ResetForm.tsx
│   │       SocialLogin.tsx
│   │       UserAvatar.tsx
│   │       UserButton.tsx
│   │
│   └───ui
│           avatar.tsx
│           button.tsx
│           command.tsx
│           dialog.tsx
│           dropdown-menu.tsx
│           form.tsx
│           input.tsx
│           label.tsx
│           scroll-area.tsx
│           select.tsx
│           separator.tsx
│           sheet.tsx
│           textarea.tsx
│
├───hooks
│       useDraw.ts
│       useModalStore.ts
│       useOrigin.ts
│
├───lib
│   │   pusher.ts
│   │   uploadthing.ts
│   │   utils.ts
│   │
│   ├───actions
│   │       generatePasswordResetToken.ts
│   │       generateVerificationToken.ts
│   │       login.ts
│   │       logout.ts
│   │       newPassword.ts
│   │       newVerification.ts
│   │       register.ts
│   │       resetPassword.ts
│   │
│   ├───database
│   │       db.ts
│   │
│   └───mailer
│           index.ts
│
└───schemas
        index.ts
```
