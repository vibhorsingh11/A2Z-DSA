function sortStack(stack) {
  if (stack.length <= 1) {
    return stack; // Base case: stack is already sorted
  } else {
    const temp = stack.pop(); // Pop the top element from stack

    // Recursively sort the remaining stack
    sortStack(stack);

    // Insert the popped element back into the sorted stack
    insertInSortedOrder(stack, temp);
    return stack;
  }
}

// Helper function to insert element in sorted order
function insertInSortedOrder(stack, value) {
  // Base case: if stack is empty or top of stack is smaller, push the value
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  // If top of stack is greater, remove the top and recur
  const top = stack.pop();
  insertInSortedOrder(stack, value);

  // Put back the top element removed earlier
  stack.push(top);
}

let stack = [4, 2, 1, 3];
console.log('Original Stack:', stack);
sortStack(stack);
console.log('Sorted Stack:', stack); // Output: [1, 2, 3, 4]
