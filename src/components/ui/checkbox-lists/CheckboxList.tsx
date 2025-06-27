import React from 'react' 
import styles from './CheckboxList.module.css';
import { CheckboxOption } from './CheckboxOption';
import type { CheckboxListOptionType } from './CheckboxOption';
import { ButtonEl } from './ButtonEl';

type CheckboxListProps = {
	name: string;
	options:  CheckboxListOptionType[];
	selected:  CheckboxListOptionType;
	onChange?: (value: CheckboxListOptionType) => void;
	title?: string;
	footerText?: string;
	
};

export const  CheckboxList = (props: CheckboxListProps) => {
	const { name, options, selected, onChange, title, footerText } = props;

	const handleChange = (option:  CheckboxListOptionType) => onChange?.(option);

	return (
		<div className={styles.container}>
			{title && (
				<>
					<h3 className={styles.title}>{title}</h3>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					< CheckboxOption
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
			{title && (
				<>
					<div className={styles.footerText_container}>
						<h4 className={styles.footerText}>{footerText}</h4>
						<ButtonEl/>
					</div>	
				</>
			)}
		</div>
	);
};
