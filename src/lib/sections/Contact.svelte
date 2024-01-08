<script lang="ts">
	import { AlertLevels } from '$lib/components/Notifications/enums/alertLevels';
	import { pushNotification } from '$lib/components/Notifications/notificationStore';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faDiscord, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import emailjs from 'emailjs-com';
	import { CONFIG } from '../../config/configuration';

	let form = {
		user_email: '',
		from_name: '',
		subject: '',
		message: ''
	};

	const sendEmail = async (e: any) => {
		e.preventDefault();
		try {
			await emailjs.send(CONFIG.email.serviceId, CONFIG.email.templateId, form, CONFIG.email.userId);
			pushNotification('Email sent successfully!', AlertLevels.SUCCESS);
		} catch (error) {
			pushNotification('Email failed to send!', AlertLevels.ERROR);
		}
		form.from_name = '';
		form.user_email = '';
		form.subject = '';
		form.message = '';
	};
</script>

<div class="min-h-full p-4 flex flex-col items-center justify-center">
	<h1 class="text-4xl font-bold mb-8">Contact Me</h1>
	<form class="w-full max-w-lg flex flex-wrap -mx-3 mb-6" on:submit|preventDefault={sendEmail}>
		<div class="w-full px-3 mb-6 md:mb-0">
			<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-email"> Full Name </label>
			<input
				class="block w-full bg-neutral-content border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-neutral"
				id="grid-name"
				type="text"
				placeholder="John Smith"
				bind:value={form.from_name}
			/>
		</div>
		<div class="w-full px-3 mb-6 md:mb-0">
			<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-email"> Email </label>
			<input
				class="block w-full bg-neutral-content border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-neutral"
				id="grid-email"
				type="email"
				placeholder="you@example.com"
				bind:value={form.user_email}
			/>
		</div>
		<div class="w-full px-3 mb-6">
			<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-subject"> Subject </label>
			<input
				class="block w-full bg-neutral-content border rounded py-3 px-4 leading-tight focus:out		line-none focus:bg-white focus:border-gray-500 text-neutral"
				id="grid-subject"
				type="text"
				placeholder="Enter subject"
				bind:value={form.subject}
			/>
		</div>
		<div class="w-full px-3 mb-6">
			<label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-message"> Message </label>
			<textarea
				class="block w-full bg-neutral-content border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-neutral"
				id="grid-message"
				placeholder="Enter your message"
				bind:value={form.message}
			></textarea>
		</div>
		<div class="w-full flex items-center justify-between px-3">
			<button class="shadow bg-primary text-primary-content font-bold py-2 px-4 rounded" type="submit"> Send </button>
			<div class="inline-flex">
				<FontAwesomeIcon icon={faLinkedinIn} class="mx-2 h-6" title="LinkedIn" />
				<FontAwesomeIcon icon={faInstagram} class="mx-2 h-6" title="Instagram" />
				<FontAwesomeIcon icon={faDiscord} class="mx-2 h-6" title="Discord" />
			</div>
		</div>
	</form>
</div>
