# Components Directory

This directory contains all the React components used in the Sasaek-mini application.

## Icon Components

Due to TypeScript compatibility issues between the current version of React (v19) and react-icons (v5.5.0), we've implemented a workaround for using icons in the application:

1. The `IconComponents.tsx` file provides wrapper components for all the Feather icons used in the application.
2. We use a helper function `createIconComponent` to properly render the icons within a span container.
3. This approach successfully handles both TypeScript type checking issues and ensures proper rendering.

### Usage Example

```tsx
// Import icons from IconComponents instead of react-icons directly
import { DownloadIcon, ChevronRightIcon } from './IconComponents';

// Use in JSX
<DownloadIcon />

// Use with styled-components
const StyledDownloadIcon = styled(DownloadIcon)`
  margin-left: 8px;
  color: red;
`;
```

### How It Works

Our solution works by:
1. Using `React.createElement()` to safely create the icon elements
2. Wrapping icons in a span with proper display styling
3. Creating a reusable pattern with a helper function to maintain consistency

### Why This Approach?

React 19 introduced stricter type checking, which conflicts with how `react-icons` exports its icon components. The icons are exported as `IconType` which is not directly compatible with React's component types in the latest versions.

Our approach ensures both TypeScript compatibility and proper rendering.

## Future Improvements

Once `react-icons` releases a version that is fully compatible with React 19's TypeScript definitions, we can replace this workaround with direct imports from the library. 