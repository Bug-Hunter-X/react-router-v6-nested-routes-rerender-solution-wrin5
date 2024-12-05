# React Router v6 Nested Routes Unexpected Re-rendering

This repository demonstrates a common issue encountered when using nested routes in React Router v6: unexpected re-rendering of parent components.

## Problem

When navigating between nested routes (child routes within a parent route), the parent component re-renders even if it doesn't need to. This can lead to performance issues and unnecessary state updates.

## Solution

The solution often involves using techniques like memoization or preventing unnecessary re-renders using React's built-in features.