import { TextInput } from "@packages/react-components";


const TextInputPage = () => {
	return (
		<>
			<section className="mb-8">
				<h2 className="mb-2">Button Variant</h2>
				<div className="flex items-end gap-3">
					<TextInput
						className="w-1/2"
						labelText="Name"
						name="name"
						supportingText="input your full name"
					/>
					<TextInput className="w-1/2" />
				</div>
			</section>
			<section>
				<h2 className="mb-2">State</h2>
				<div className="flex items-end gap-3">
					<TextInput
						className="w-1/2"
						labelText="Name"
						name="name"
						status="error"
						supportingText="input your full name"
					/>
					<TextInput
						className="w-1/2"
						labelText="Name"
						name="name"
						status="warning"
						supportingText="input your full name"
					/>
				</div>
			</section>
		</>
	);
};

export default TextInputPage;
