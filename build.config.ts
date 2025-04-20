import * as glob from 'glob';
import { dirname, extname, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const IncludedComponents = [
	'lib',
	'components',
	'Button',
	'Calendar',
	'Collapsible',
	'SingleCombobox',
	'MultipleCombobox',
	'DatePicker',
	'DateRangePicker',
	'FormLabel',
	'DropDownMenu',
	'ScrollArea',
	'MultipleSelect',
	'SingleSelect',
	'SupportingText',
	'Tag',
	'TextInput'
];

const entries: Array<[string, string]> = glob
	.sync('lib/**/*.{ts,tsx}', {
		ignore: ['lib/**/*.d.ts']
	})
	.filter((file) => {
		const nearestFolder = dirname(file).split(sep).pop() ?? '';
		return IncludedComponents.includes(nearestFolder);
	})
	.map((file) => [
		relative('lib', file.slice(0, file.length - extname(file).length)),
		fileURLToPath(new URL(file, import.meta.url))
	]);

export default entries;
