import Button from '@components/Button';

const ButtonPage = () => {
	return (
		<>
			<section>
				<h2 className="mb-2">Button Variant</h2>
				<div className="flex gap-3">
					<Button>Click Me</Button>
					<Button variant="outlined">Click Me</Button>
					<Button variant="text">Click Me</Button>
				</div>
			</section>
			<section>
				<h2 className="mb-2">Button Variant</h2>
				<div className="flex gap-3">
					<Button>Click Me</Button>
					<Button variant="outlined">Click Me</Button>
					<Button variant="text">Click Me</Button>
				</div>
			</section>
		</>
	);
};

export default ButtonPage;
