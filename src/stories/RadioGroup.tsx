import { RadioOption } from './RadioOption';
import type { RadioOptionType } from './RadioOption';
import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
	name: string;
	options: RadioOptionType[];
	selected: RadioOptionType;
	onChange?: (value: RadioOptionType) => void;
	title: string;
};

export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props;

	const handleChange = (option: RadioOptionType) => onChange?.(option);

	return (
		<div className={styles.container}>
			{title && (
				<>
					<h3 className={styles.title}>{title}</h3>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<RadioOption
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	);
};
