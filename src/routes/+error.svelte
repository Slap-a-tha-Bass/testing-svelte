<script>
	import { page } from '$app/stores';
</script>

<h1>Oops! {$page.status}</h1>
<p>{$page.error?.message}</p>
