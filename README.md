# Svelte Project Documentation

## Project Initiation

### 1. Install Svelte:

Run `npm install svelte@latest <project-name>`

### 2. Project Setup:

Choose “Skeleton project” for a barebone layout and press Enter.
Select “Yes, using JavaScript with JSDoc comments” and press Enter.
Choose “ESLint for code linting” and “Add prettier for code formatting” and press Enter.

### 3. Install Dependencies:

Change into the project directory and run `npm install`.

### 4. Launch the Project:

Run `npm run dev`.
Open `localhost:5173` in your browser.

## Routes

### 1. Setup Routing:

Routes are managed in the `src/routes` directory.

### 2. Create a New Route:

Add a new folder in `src/routes`, e.g., `src/routes/about` for the “/about” path.
Inside the folder, create a Svelte page named `+page.svelte`.
You can write HTML directly in this file.

## Layouts

### 1. Layout Basics:

Layouts define the structure and look of your app.

### 2. Implementing a Layout:

Create a Svelte file for the layout, e.g., `+layout.svelte`.
Use this layout file to wrap around your route components.

## Styles (Componetized)

### 1. Component Styling:

Use `<style>` tags within Svelte components for scoped styling.

### 2. Example:

```svelte
<script>
	// Your script here
</script>

<h1>Hello World</h1>

<style>
	h1 {
		color: blue;
	}
</style>
```

## Styles Global

### 1. Global Styles:

Place global CSS in a separate file, e.g., `styles.css`.

### 2. Using Global Styles in Layouts:

Import the CSS file in your main layout component.

```svelte
<script>
	import '../styles.css';
</script>
```

## Working in the lib directory

### 1. Lib Directory:

Use `src/lib` for reusable components or modules.

### 2. Importing with `$lib`:

Access files in `lib` from anywhere using the `$lib` alias.
Example: `import MyComponent from '$lib/MyComponent.svelte';`

## Loading data

### 1. Data Fetching:

Use async functions or Svelte's `load` function to fetch data.
Example in `+page.svelte`:

```js
export async function load({ fetch }) {
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();
	return { props: { data: await response.json() } };
}
```

## Using hooks

## Using Hooks

### 1. Svelte Hooks:

Hooks like `onMount`, `beforeUpdate`, and `afterUpdate` can be used in scripts.
Example using `onMount`:

```svelte
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('Component mounted');
	});
</script>
```
