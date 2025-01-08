---
id: "react-useeffect-closure"
title: "What will this React Hook log? 🤔

```jsx
function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(count);
    setCount(1);
    console.log(count);
  }, []);
}
```

*Hint: Think about closure and state updates*"
answers:
  - id: "a"
    text: "0, 1"
  - id: "b"
    text: "0, 0"
  - id: "c"
    text: "1, 1"
  - id: "d"
    text: "undefined, undefined"
correctAnswer: "b"
---

### Understanding React's Closure Behavior

The key to understanding this behavior is React's closure mechanism:

1. **Closure Creation**:
   ```jsx
   useEffect(() => {
     // This closure captures count=0
     console.log(count);    // 0
     setCount(1);
     console.log(count);    // Still 0!
   }, []);
   ```

2. **State Updates**:
   - State updates are scheduled
   - They don't immediately affect the current render's values
   - The closure still has access to the original value

Learn more about:
- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [Closures in React](https://react.dev/learn/passing-data-deeply-with-context) 