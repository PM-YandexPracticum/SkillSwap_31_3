import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './single-select-dropdown.module.css'
import { Text } from '../Text/Text';
import 'primeicons/primeicons.css';
import { SingleSelectDropdownProps } from './type';


export const SingleSelectDropdownUI: FC<SingleSelectDropdownProps> = ({label, options, placeholder}) => {
    const [value, setValue] = useState(placeholder);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropDown = () => setIsOpen(prev => !prev);

    const handleSelect = (option: string) => {
        setValue(option);
        setIsOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            };
        }

        if(isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        };

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen])

    return (
        <div className={styles.container} ref={dropdownRef}>
            <Text color='text'>{label}</Text>
            <div className='dropdown'>
                <div className={`dropdown-button ${isOpen ? 'dropdown-open': ''}`} onClick={toggleDropDown}>
                    <Text color={value == placeholder ? 'caption' : 'text'}>{value}</Text>
                    {isOpen ? <span className='pi pi-chevron-down'></span> : <span className='pi pi-chevron-up'></span>}
                </div>
                { isOpen && (
                    <ul className='options'>
                        {options.map((el, index) => (
                            <li key={index} className='option' onClick={() => handleSelect(el)}>
                                <Text color={value == el ? 'text-link' : 'text'}>{el}</Text>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}