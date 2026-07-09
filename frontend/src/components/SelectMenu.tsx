import type { Dispatch, SetStateAction } from 'react';
import './SelectMenu.css';
import { FaAngleDown } from 'react-icons/fa';

export default function SelectMenu({
	text,
	options,
	isOpen,
	onToggle,
	setValue,
    value
}: {
	text: string;
	options: string[];
	isOpen?: boolean;
	onToggle?: () => void;
	setValue?: Dispatch<SetStateAction<string|null>>;
    value?: string|null;
}) {
	return (
		<div className="select-menu">
			<button className="select-menu-button" onClick={onToggle}>
				{value ? value : text}
				<FaAngleDown className={`select-menu-icon ${isOpen ? 'open' : ''}`} />
			</button>
			{isOpen && (
				<ul className="select-menu-options">
					{options.map((option, index) => (
						<li
							key={index}
							className="select-menu-option"
							onClick={() => {
								if (setValue) {
									setValue(option);
								}
								if (onToggle) {
									onToggle();
								}
                                if (value === option && setValue) {
                                    setValue(null);
                                }
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
