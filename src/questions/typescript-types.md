---
id: "typescript-keyof-satisfies"
title: "What's the type of `result` in this TypeScript code? 🎯

```typescript
type User = { name: string; age: number };
type UserKeys = keyof User;

const result = 'address' satisfies UserKeys;
```"
answers:
  - id: "a"
    text: "Compiles successfully"
  - id: "b"
    text: "Type error: 'address' not assignable to 'name' | 'age'"
  - id: "c"
    text: "string"
  - id: "d"
    text: "UserKeys"
correctAnswer: "b"
---

### TypeScript's `keyof` and Type Safety

The `keyof` operator in TypeScript creates a union type of all property names:

```typescript
type User = { name: string; age: number };
type UserKeys = keyof User;  // "name" | "age"
```

The `satisfies` operator checks if a value matches a type:
- ✅ `'name' satisfies UserKeys`    // OK
- ❌ `'address' satisfies UserKeys` // Error!

Learn more:
- [keyof type operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [satisfies operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) 