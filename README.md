## Link Demo

[react-typescript-june-1-24.vercel.app](https://react-typescript-june-1-24.vercel.app/)

## I only followed raw rect

I have tried to demostrate my solid understanding of react js application and implement proper best practices as much as I can.

## The API Integration

API integration and state management has been handled with the help of context API. I implemented a similar store pattern like redux but only in react way.

> NOTE: I know there are opportunities for caching mechanism in the task. I still choose to keep things simple. `useQuery` library can be utlised to implment advanced caching mechanism.

## Tests

I organise the behavioral tests in the tests folders in the directories where the tests are needed. PLease run `yarn test` to run the behavioral tests.

## Folder strucure for convenience


```
.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Avatar.tsx
│   │   ├── readme.md
│   │   └── Skeleton.tsx
│   ├── hooks
│   │   └── apiResponse
│   │       ├── index.js
│   │       ├── useAPIError.js
│   │       └── useAPISuccess.js
│   ├── index.css
│   ├── index.tsx
│   ├── __mocks__
│   │   └── @formkit
│   │       └── auto-animate
│   │           └── react
│   │               └── index.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── services
│   │   ├── commentService.ts
│   │   ├── httpService.ts
│   │   ├── postService.ts
│   │   └── userService.ts
│   ├── setupTests.ts
│   ├── store
│   │   └── application
│   │       ├── Context.tsx
│   │       ├── index.ts
│   │       ├── types.ts
│   │       ├── useConsumer.ts
│   │       └── useStore.ts
│   ├── types
│   │   ├── Comment.ts
│   │   ├── index.ts
│   │   ├── Post.ts
│   │   └── User.ts
│   └── views
│       └── timeline
│           ├── components
│           │   ├── AvatarSkeleton.tsx
│           │   ├── CommentSkeleton.tsx
│           │   ├── Comment.tsx
│           │   ├── PostSkeleton.tsx
│           │   ├── Posts.tsx
│           │   ├── Post.tsx
│           │   ├── store
│           │   │   ├── post
│           │   │   │   ├── Context.tsx
│           │   │   │   ├── index.ts
│           │   │   │   ├── types.ts
│           │   │   │   ├── useComments.ts
│           │   │   │   ├── useConsumer.ts
│           │   │   │   └── useStore.ts
│           │   │   └── user
│           │   │       ├── Context.tsx
│           │   │       ├── index.ts
│           │   │       ├── types.ts
│           │   │       ├── useConsumer.ts
│           │   │       ├── useStore.ts
│           │   │       └── useUsers.ts
│           │   └── tests
│           │       ├── Comment.test.tsx
│           │       ├── Posts.test.tsx
│           │       └── Post.test.tsx
│           ├── store
│           │   ├── Context.tsx
│           │   ├── index.ts
│           │   ├── types.ts
│           │   ├── useConsumer.ts
│           │   ├── usePosts.ts
│           │   └── useStore.ts
│           └── Timeline.tsx
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```
