<script>
	export let data;
	$: ({ episode, user } = data);
</script>

<h1>{episode.title}</h1>
<p>Current user: {user.email}</p>
{episode.show_notes}
