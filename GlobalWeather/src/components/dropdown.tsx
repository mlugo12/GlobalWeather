import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

export function CustomDropdown({ label, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      } 
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
    },[]);
    const handleOptionClick = (option: string) => {
      onSelect(option);
      setIsOpen(false);
    };
    
    return (
      <div ref={dropdownRef} className="dropdown">
        <button 
        type='button' 
        className="dropdown-button"
        onClick={() => setIsOpen((prev) => !prev)}>
          {label}
        </button>

        {isOpen && (  
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li key={option}> 
                <button type="button" className="dropdown-option" onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }