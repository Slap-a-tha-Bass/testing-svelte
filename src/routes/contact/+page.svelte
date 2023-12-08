<form method="POST">
	<label>
		Name: <input required type="text" name="name" id="name" />
	</label>
	<label>
		Email: <input required type="email" name="email" id="email" />
	</label>
	<label>
		Message: <textarea required name="message" id="message" />
	</label>
	<button type="submit">Send Email</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 400px;
		margin: 0 auto;
	}
	label {
		display: block;
	}
</style>
